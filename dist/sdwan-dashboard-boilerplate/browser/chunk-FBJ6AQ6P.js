import {
  API_ENDPOINTS,
  BaseService,
  deviceStatus,
  siteStatus
} from "./chunk-MBURBPDE.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-RMTPF5DE.js";

// src/app/pages/sites/site.service.ts
var SiteService = class _SiteService extends BaseService {
  getSites() {
    return this.get(API_ENDPOINTS.SITES).pipe(map((sites) => sites.map((s) => this.mapSnapshot(s))));
  }
  getSiteDetail(siteId) {
    return this.get(API_ENDPOINTS.SITES).pipe(map((sites) => {
      const site = sites.find((s) => s.siteId === siteId);
      if (!site)
        throw new Error(`Site '${siteId}' not found`);
      return {
        id: site.siteId,
        name: site.siteName,
        status: siteStatus(site.onlineDevicesCount, site.offlineDevicesCount),
        totalEdgeDevices: site.totalEdgeDevicesCount,
        online: site.onlineDevicesCount,
        offline: site.offlineDevicesCount,
        edgeDevices: (site.edgeDevices ?? []).map((d) => ({
          name: d.deviceName,
          role: d.role,
          uptime: d.uptime,
          status: deviceStatus(d.status),
          systemIp: d.systemIp,
          model: d.model,
          siteId: d.associatedSite
        }))
      };
    }));
  }
  mapSnapshot(s) {
    return {
      id: s.siteId,
      name: s.siteName,
      status: siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
      totalDevices: s.totalEdgeDevicesCount,
      online: s.onlineDevicesCount,
      offline: s.offlineDevicesCount
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SiteService_BaseFactory;
      return function SiteService_Factory(t) {
        return (\u0275SiteService_BaseFactory || (\u0275SiteService_BaseFactory = \u0275\u0275getInheritedFactory(_SiteService)))(t || _SiteService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteService, factory: _SiteService.\u0275fac, providedIn: "root" });
  }
};

export {
  SiteService
};
//# sourceMappingURL=chunk-FBJ6AQ6P.js.map
