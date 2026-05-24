import {
  API_ENDPOINTS,
  BaseService,
  deviceStatus
} from "./chunk-MBURBPDE.js";
import {
  forkJoin,
  map,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-RMTPF5DE.js";

// src/app/pages/edge-devices/edge-device.service.ts
var EdgeDeviceService = class _EdgeDeviceService extends BaseService {
  getEdgeDevices() {
    return this.get(API_ENDPOINTS.EDGE_DEVICES).pipe(map((devices) => devices.map((d) => this.mapSummary(d))));
  }
  getEdgeDeviceDetail(deviceName) {
    return forkJoin({
      device: this.get(API_ENDPOINTS.EDGE_DEVICE_DETAIL(deviceName)),
      orgs: this.get(API_ENDPOINTS.ORGANIZATIONS)
    }).pipe(map(({ device, orgs }) => {
      const siteId = device.associatedSite;
      const org = orgs.find((o) => (o.sites ?? []).some((s) => s.siteId === siteId));
      const site = org?.sites?.find((s) => s.siteId === siteId);
      return {
        name: device.deviceName,
        status: deviceStatus(device.status),
        role: device.role,
        uptime: device.uptime,
        systemIp: device.systemIp,
        model: device.model,
        siteName: site?.siteName ?? siteId,
        siteId,
        orgId: org?.orgId ?? "",
        orgName: org?.orgName ?? "Organization",
        wanInterfaces: device.wanInterfaces ?? [],
        lanInterfaces: device.lanInterfaces ?? [],
        uplinkHistory: device.uplinkHistory ?? []
      };
    }));
  }
  mapSummary(d) {
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
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EdgeDeviceService_BaseFactory;
      return function EdgeDeviceService_Factory(t) {
        return (\u0275EdgeDeviceService_BaseFactory || (\u0275EdgeDeviceService_BaseFactory = \u0275\u0275getInheritedFactory(_EdgeDeviceService)))(t || _EdgeDeviceService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EdgeDeviceService, factory: _EdgeDeviceService.\u0275fac, providedIn: "root" });
  }
};

export {
  EdgeDeviceService
};
//# sourceMappingURL=chunk-FM5GH7UL.js.map
