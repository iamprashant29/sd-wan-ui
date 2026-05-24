import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-RMTPF5DE.js";

// src/app/shared/api.constants.ts
var API_BASE_URL = "http://localhost:8080/api";
var API_ENDPOINTS = {
  HEALTH: "/health",
  DASHBOARD: "/dashboard",
  ORGANIZATIONS: "/organizations",
  ORGANIZATION_DETAIL: (orgId) => `/organizations/${orgId}`,
  SITES: "/sites",
  EDGE_DEVICES: "/edge-devices",
  EDGE_DEVICE_DETAIL: (deviceName) => `/edge-devices/${deviceName}`
};

// src/app/shared/base.service.ts
var BaseService = class _BaseService {
  constructor() {
    this.http = inject(HttpClient);
    this.baseUrl = API_BASE_URL;
  }
  get(path) {
    return this.http.get(`${this.baseUrl}${path}`);
  }
  post(path, body) {
    return this.http.post(`${this.baseUrl}${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.baseUrl}${path}`, body);
  }
  patch(path, body) {
    return this.http.patch(`${this.baseUrl}${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.baseUrl}${path}`);
  }
  static {
    this.\u0275fac = function BaseService_Factory(t) {
      return new (t || _BaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BaseService, factory: _BaseService.\u0275fac });
  }
};

// src/app/shared/api.helpers.ts
function siteStatus(online, offline) {
  if (offline === 0)
    return "HEALTHY";
  if (online === 0)
    return "DOWN";
  return "DEGRADED";
}
function deviceStatus(raw) {
  return raw?.toLowerCase() === "online" ? "ONLINE" : "OFFLINE";
}
function orgStatus(raw) {
  const lower = (raw ?? "").toLowerCase();
  if (lower === "ok" || lower === "healthy")
    return "HEALTHY";
  if (lower === "down")
    return "DOWN";
  return "DEGRADED";
}

export {
  API_ENDPOINTS,
  BaseService,
  siteStatus,
  deviceStatus,
  orgStatus
};
//# sourceMappingURL=chunk-MBURBPDE.js.map
