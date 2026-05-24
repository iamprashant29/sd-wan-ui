import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import {
  DashboardApiResponse,
  DashboardOverview,
  EdgeDeviceApiResponse,
  EdgeDeviceDetail,
  HealthResponse,
  OrganizationApiResponse,
  OrganizationDetail,
  OrganizationSummary,
  SiteApiResponse,
  SiteDetail,
  SiteHealthSnapshot,
  SiteSummary
} from './models';

@Injectable({ providedIn: 'root' })
export class SdwanApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api';

  getHealth() {
    return this.http.get<HealthResponse>(`${this.baseUrl}/health`);
  }

  // ── /api/dashboard ──────────────────────────────────
  getOverview() {
    return this.http.get<DashboardApiResponse>(`${this.baseUrl}/dashboard`).pipe(
      map((d): DashboardOverview => {
        const snapshot = d.siteHealthSnapshot ?? [];
        return {
          totalSites: d.totalSites,
          totalEdgeDevices: d.totalEdgeDevices,
          healthySites: d.healthySites,
          degradedSites: d.degradedSites,
          downSites: d.downSites,
          onlineDevices: snapshot.reduce((sum, s) => sum + s.onlineDevicesCount, 0),
          offlineDevices: snapshot.reduce((sum, s) => sum + s.offlineDevicesCount, 0),
          sites: snapshot.map(s => ({
            id: s.siteName,
            name: s.siteName,
            status: this.siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
            totalDevices: s.totalDevices,
            online: s.onlineDevicesCount,
            offline: s.offlineDevicesCount
          })),
          lastUpdated: new Date().toISOString()
        };
      })
    );
  }

  // ── /api/sites ───────────────────────────────────────
  getSites() {
    return this.http.get<SiteApiResponse[]>(`${this.baseUrl}/sites`).pipe(
      map((sites): SiteHealthSnapshot[] =>
        sites.map(s => this.mapSiteSnapshot(s))
      )
    );
  }

  getSiteDetail(siteId: string) {
    return this.http.get<SiteApiResponse[]>(`${this.baseUrl}/sites`).pipe(
      map((sites): SiteDetail => {
        const site = sites.find(s => s.siteId === siteId);
        if (!site) throw new Error(`Site '${siteId}' not found`);
        return {
          id: site.siteId,
          name: site.siteName,
          status: this.siteStatus(site.onlineDevicesCount, site.offlineDevicesCount),
          totalEdgeDevices: site.totalEdgeDevicesCount,
          online: site.onlineDevicesCount,
          offline: site.offlineDevicesCount,
          edgeDevices: (site.edgeDevices ?? []).map(d => this.mapDeviceSummary(d))
        };
      })
    );
  }

  // ── /api/organizations ───────────────────────────────
  getOrganizations() {
    return this.http.get<OrganizationApiResponse[]>(`${this.baseUrl}/organizations`).pipe(
      map((orgs): OrganizationSummary[] =>
        orgs.map(org => ({
          orgId: org.orgId,
          orgName: org.orgName,
          totalEdgeDevices: org.totalEdgeDevices,
          status: this.orgStatus(org.status),
          healthy: org.healthy,
          degraded: org.degraded,
          down: org.down
        }))
      )
    );
  }

  getOrganizationDetail(orgId: string) {
    return this.http.get<OrganizationApiResponse>(`${this.baseUrl}/organizations/${orgId}`).pipe(
      map((org): OrganizationDetail => ({
        orgId: org.orgId,
        orgName: org.orgName,
        totalEdgeDevices: org.totalEdgeDevices,
        status: this.orgStatus(org.status),
        healthy: org.healthy,
        degraded: org.degraded,
        down: org.down,
        sites: (org.sites ?? []).map((s): SiteSummary => ({
          id: s.siteId,
          name: s.siteName,
          totalEdgeDevices: s.totalEdgeDevicesCount,
          status: this.siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
          healthy: s.onlineDevicesCount,
          degraded: 0,
          down: s.offlineDevicesCount
        }))
      }))
    );
  }

  // ── /api/edge-devices ────────────────────────────────
  getEdgeDevices() {
    return this.http.get<EdgeDeviceApiResponse[]>(`${this.baseUrl}/edge-devices`).pipe(
      map(devices => devices.map(d => this.mapDeviceSummary(d)))
    );
  }

  getEdgeDeviceDetail(deviceName: string) {
    return forkJoin({
      device: this.http.get<EdgeDeviceApiResponse>(`${this.baseUrl}/edge-devices/${deviceName}`),
      orgs: this.http.get<OrganizationApiResponse[]>(`${this.baseUrl}/organizations`)
    }).pipe(
      map(({ device, orgs }): EdgeDeviceDetail => {
        const siteId = device.associatedSite;
        const org = orgs.find(o => (o.sites ?? []).some(s => s.siteId === siteId));
        const site = org?.sites?.find(s => s.siteId === siteId);
        return {
          name: device.deviceName,
          status: this.deviceStatus(device.status),
          role: device.role,
          uptime: device.uptime,
          systemIp: device.systemIp,
          model: device.model,
          siteName: site?.siteName ?? siteId,
          siteId,
          orgId: org?.orgId ?? '',
          orgName: org?.orgName ?? 'Organization',
          wanInterfaces: [],
          lanInterfaces: [],
          uplinkHistory: []
        };
      })
    );
  }

  // ── helpers ──────────────────────────────────────────
  private mapSiteSnapshot(s: SiteApiResponse): SiteHealthSnapshot {
    return {
      id: s.siteId,
      name: s.siteName,
      status: this.siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
      totalDevices: s.totalEdgeDevicesCount,
      online: s.onlineDevicesCount,
      offline: s.offlineDevicesCount
    };
  }

  private mapDeviceSummary(d: EdgeDeviceApiResponse) {
    return {
      name: d.deviceName,
      role: d.role,
      uptime: d.uptime,
      status: this.deviceStatus(d.status),
      systemIp: d.systemIp,
      model: d.model,
      siteId: d.associatedSite
    };
  }

  private siteStatus(online: number, offline: number): 'HEALTHY' | 'DEGRADED' | 'DOWN' {
    if (offline === 0) return 'HEALTHY';
    if (online === 0)  return 'DOWN';
    return 'DEGRADED';
  }

  private deviceStatus(raw: string): 'ONLINE' | 'OFFLINE' {
    return raw?.toLowerCase() === 'online' ? 'ONLINE' : 'OFFLINE';
  }

  private orgStatus(raw: string): 'HEALTHY' | 'DEGRADED' | 'DOWN' {
    const lower = (raw ?? '').toLowerCase();
    if (lower === 'ok' || lower === 'healthy') return 'HEALTHY';
    if (lower === 'down') return 'DOWN';
    return 'DEGRADED';
  }
}
