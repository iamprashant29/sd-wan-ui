import {
  API_ENDPOINTS,
  BaseService,
  orgStatus,
  siteStatus
} from "./chunk-MBURBPDE.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-RMTPF5DE.js";

// src/app/pages/organization/organization.service.ts
var OrganizationService = class _OrganizationService extends BaseService {
  getOrganizations() {
    return this.get(API_ENDPOINTS.ORGANIZATIONS).pipe(map((orgs) => orgs.map((org) => ({
      orgId: org.orgId,
      orgName: org.orgName,
      totalEdgeDevices: org.totalEdgeDevices,
      status: orgStatus(org.status),
      healthy: org.healthy,
      degraded: org.degraded,
      down: org.down
    }))));
  }
  getOrganizationDetail(orgId) {
    return this.get(API_ENDPOINTS.ORGANIZATION_DETAIL(orgId)).pipe(map((org) => ({
      orgId: org.orgId,
      orgName: org.orgName,
      totalEdgeDevices: org.totalEdgeDevices,
      status: orgStatus(org.status),
      healthy: org.healthy,
      degraded: org.degraded,
      down: org.down,
      sites: (org.sites ?? []).map((s) => ({
        id: s.siteId,
        name: s.siteName,
        totalEdgeDevices: s.totalEdgeDevicesCount,
        status: siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
        healthy: s.onlineDevicesCount,
        degraded: 0,
        down: s.offlineDevicesCount
      }))
    })));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275OrganizationService_BaseFactory;
      return function OrganizationService_Factory(t) {
        return (\u0275OrganizationService_BaseFactory || (\u0275OrganizationService_BaseFactory = \u0275\u0275getInheritedFactory(_OrganizationService)))(t || _OrganizationService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganizationService, factory: _OrganizationService.\u0275fac, providedIn: "root" });
  }
};

export {
  OrganizationService
};
//# sourceMappingURL=chunk-PESH3LZN.js.map
