import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { BaseService } from '../../shared/base.service';
import { API_ENDPOINTS } from '../../shared/api.constants';
import {
  EdgeDeviceApiResponse,
  EdgeDeviceDetail,
  EdgeDeviceSummary,
  OrganizationApiResponse
} from '../../shared/models';
import { deviceStatus } from '../../shared/api.helpers';

@Injectable({ providedIn: 'root' })
export class EdgeDeviceService extends BaseService {

  getEdgeDevices() {
    return this.get<EdgeDeviceApiResponse[]>(API_ENDPOINTS.EDGE_DEVICES).pipe(
      map(devices => devices.map(d => this.mapSummary(d)))
    );
  }

  getEdgeDeviceDetail(deviceName: string) {
    return forkJoin({
      device: this.get<EdgeDeviceApiResponse>(API_ENDPOINTS.EDGE_DEVICE_DETAIL(deviceName)),
      orgs: this.get<OrganizationApiResponse[]>(API_ENDPOINTS.ORGANIZATIONS)
    }).pipe(
      map(({ device, orgs }): EdgeDeviceDetail => {
        const siteId = device.associatedSite;
        const org = orgs.find(o => (o.sites ?? []).some(s => s.siteId === siteId));
        const site = org?.sites?.find(s => s.siteId === siteId);
        return {
          name: device.deviceName,
          status: deviceStatus(device.status),
          role: device.role,
          uptime: device.uptime,
          systemIp: device.systemIp,
          model: device.model,
          siteName: site?.siteName ?? siteId,
          siteId,
          orgId: org?.orgId ?? '',
          orgName: org?.orgName ?? 'Organization',
          wanInterfaces: device.wanInterfaces ?? [],
          lanInterfaces: device.lanInterfaces ?? [],
          uplinkHistory: device.uplinkHistory ?? []
        };
      })
    );
  }

  private mapSummary(d: EdgeDeviceApiResponse): EdgeDeviceSummary {
    return {
      name: d.deviceName,
      role: d.role,
      uptime: d.uptime,
      status: deviceStatus(d.status),
      systemIp: d.systemIp,
      model: d.model,
      siteId: d.associatedSite
    };
  }
}
