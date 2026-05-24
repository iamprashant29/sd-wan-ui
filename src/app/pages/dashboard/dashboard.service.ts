import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from '../../shared/base.service';
import { API_ENDPOINTS } from '../../shared/api.constants';
import { DashboardApiResponse, DashboardOverview, HealthResponse } from '../../shared/models';
import { siteStatus } from '../../shared/api.helpers';

@Injectable({ providedIn: 'root' })
export class DashboardService extends BaseService {

  getHealth() {
    return this.get<HealthResponse>(API_ENDPOINTS.HEALTH);
  }

  getOverview() {
    return this.get<DashboardApiResponse>(API_ENDPOINTS.DASHBOARD).pipe(
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
            status: siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
            totalDevices: s.totalDevices,
            online: s.onlineDevicesCount,
            offline: s.offlineDevicesCount
          })),
          lastUpdated: new Date().toISOString()
        };
      })
    );
  }
}
