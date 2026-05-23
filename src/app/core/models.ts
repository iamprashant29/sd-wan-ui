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

export interface OrganizationOverview {
  organizationName: string;
  totalSites: number;
  healthySites: number;
  degradedSites: number;
  downSites: number;
  totalEdgeDevices: number;
  sites: SiteSummary[];
  lastUpdated: string;
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