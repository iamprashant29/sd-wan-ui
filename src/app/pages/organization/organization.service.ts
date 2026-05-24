import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from '../../shared/base.service';
import { API_ENDPOINTS } from '../../shared/api.constants';
import {
  OrganizationApiResponse,
  OrganizationDetail,
  OrganizationSummary,
  SiteSummary
} from '../../shared/models';
import { orgStatus, siteStatus } from '../../shared/api.helpers';

@Injectable({ providedIn: 'root' })
export class OrganizationService extends BaseService {

  getOrganizations() {
    return this.get<OrganizationApiResponse[]>(API_ENDPOINTS.ORGANIZATIONS).pipe(
      map((orgs): OrganizationSummary[] =>
        orgs.map(org => ({
          orgId: org.orgId,
          orgName: org.orgName,
          totalEdgeDevices: org.totalEdgeDevices,
          status: orgStatus(org.status),
          healthy: org.healthy,
          degraded: org.degraded,
          down: org.down
        }))
      )
    );
  }

  getOrganizationDetail(orgId: string) {
    return this.get<OrganizationApiResponse>(API_ENDPOINTS.ORGANIZATION_DETAIL(orgId)).pipe(
      map((org): OrganizationDetail => ({
        orgId: org.orgId,
        orgName: org.orgName,
        totalEdgeDevices: org.totalEdgeDevices,
        status: orgStatus(org.status),
        healthy: org.healthy,
        degraded: org.degraded,
        down: org.down,
        sites: (org.sites ?? []).map((s): SiteSummary => ({
          id: s.siteId,
          name: s.siteName,
          totalEdgeDevices: s.totalEdgeDevicesCount,
          status: siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
          healthy: s.onlineDevicesCount,
          degraded: 0,
          down: s.offlineDevicesCount
        }))
      }))
    );
  }
}
