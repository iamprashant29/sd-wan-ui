export interface HealthResponse {
  status: string;
  service: string;
  timestamp: string;
  assignment: string;
}

export interface DashboardOverview {
  totalSites: number;
  totalEdgeDevices: number;
  healthySites: number;
  degradedSites: number;
  downSites: number;
  onlineDevices: number;
  offlineDevices: number;
  sites: SiteHealthSnapshot[];
  lastUpdated: string;
}

export interface SiteHealthSnapshot {
  id: string;
  name: string;
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  totalDevices: number;
  online: number;
  offline: number;
}

export interface OrganizationSummary {
  orgId: string;
  orgName: string;
  totalEdgeDevices: number;
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  healthy: number;
  degraded: number;
  down: number;
}

export interface OrganizationDetail {
  orgId: string;
  orgName: string;
  totalEdgeDevices: number;
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  healthy: number;
  degraded: number;
  down: number;
  sites: SiteSummary[];
}

export interface SiteSummary {
  id: string;
  name: string;
  totalEdgeDevices: number;
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  healthy: number;
  degraded: number;
  down: number;
}

export interface SiteDetail {
  id: string;
  name: string;
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  totalEdgeDevices: number;
  online: number;
  offline: number;
  edgeDevices: EdgeDeviceSummary[];
}

export interface EdgeDeviceSummary {
  name: string;
  role: string;
  uptime: string;
  status: 'ONLINE' | 'OFFLINE';
  systemIp: string;
  model?: string;
  siteId?: string;
}

export interface EdgeDeviceDetail {
  name: string;
  status: 'ONLINE' | 'OFFLINE';
  role: string;
  uptime: string;
  systemIp: string;
  model: string;
  siteName: string;
  siteId: string;
  orgId: string;
  orgName: string;
  wanInterfaces: DeviceInterface[];
  lanInterfaces: DeviceInterface[];
  uplinkHistory: BandwidthPoint[];
}

export interface DeviceInterface {
  name: string;
  status: 'UP' | 'DOWN';
  ipAddress: string;
}

export interface BandwidthPoint {
  timestamp: string;
  wan1Mbps: number;
  wan2Mbps: number;
}

// ── Raw backend response shapes ────────────────────────
// These mirror the Java models exactly so the service can map them.

export interface SiteApiResponse {
  siteId: string;
  siteName: string;
  totalEdgeDevicesCount: number;
  onlineDevicesCount: number;
  offlineDevicesCount: number;
  edgeDevices: EdgeDeviceApiResponse[];
}

export interface EdgeDeviceApiResponse {
  deviceName: string;
  role: string;
  uptime: string;
  status: string;       // "Online" | "Offline"
  systemIp: string;
  model: string;
  associatedSite: string;
  wanInterfaces: DeviceInterface[];
  lanInterfaces: DeviceInterface[];
  uplinkHistory: BandwidthPoint[];
}

export interface SiteHealthApiResponse {
  siteName: string;
  status: string;
  totalDevices: number;
  onlineDevicesCount: number;
  offlineDevicesCount: number;
}

export interface DashboardApiResponse {
  totalSites: number;
  totalEdgeDevices: number;
  healthySites: number;
  degradedSites: number;
  downSites: number;
  siteHealthSnapshot: SiteHealthApiResponse[];
}

export interface OrganizationApiResponse {
  orgId: string;
  orgName: string;
  totalEdgeDevices: number;
  status: string;   // "ok" | "degraded"
  healthy: number;
  degraded: number;
  down: number;
  sites: SiteApiResponse[];
}
