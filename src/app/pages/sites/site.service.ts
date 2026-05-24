import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from '../../shared/base.service';
import { API_ENDPOINTS } from '../../shared/api.constants';
import { EdgeDeviceSummary, SiteApiResponse, SiteDetail, SiteHealthSnapshot } from '../../shared/models';
import { deviceStatus, siteStatus } from '../../shared/api.helpers';

@Injectable({ providedIn: 'root' })
export class SiteService extends BaseService {

  getSites() {
    return this.get<SiteApiResponse[]>(API_ENDPOINTS.SITES).pipe(
      map((sites): SiteHealthSnapshot[] => sites.map(s => this.mapSnapshot(s)))
    );
  }

  getSiteDetail(siteId: string) {
    return this.get<SiteApiResponse[]>(API_ENDPOINTS.SITES).pipe(
      map((sites): SiteDetail => {
        const site = sites.find(s => s.siteId === siteId);
        if (!site) throw new Error(`Site '${siteId}' not found`);
        return {
          id: site.siteId,
          name: site.siteName,
          status: siteStatus(site.onlineDevicesCount, site.offlineDevicesCount),
          totalEdgeDevices: site.totalEdgeDevicesCount,
          online: site.onlineDevicesCount,
          offline: site.offlineDevicesCount,
          edgeDevices: (site.edgeDevices ?? []).map((d): EdgeDeviceSummary => ({
            name: d.deviceName,
            role: d.role,
            uptime: d.uptime,
            status: deviceStatus(d.status),
            systemIp: d.systemIp,
            model: d.model,
            siteId: d.associatedSite
          }))
        };
      })
    );
  }

  private mapSnapshot(s: SiteApiResponse): SiteHealthSnapshot {
    return {
      id: s.siteId,
      name: s.siteName,
      status: siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
      totalDevices: s.totalEdgeDevicesCount,
      online: s.onlineDevicesCount,
      offline: s.offlineDevicesCount
    };
  }
}
