export const API_BASE_URL = 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  HEALTH:              '/health',
  DASHBOARD:           '/dashboard',
  ORGANIZATIONS:       '/organizations',
  ORGANIZATION_DETAIL: (orgId: string)      => `/organizations/${orgId}`,
  SITES:               '/sites',
  EDGE_DEVICES:        '/edge-devices',
  EDGE_DEVICE_DETAIL:  (deviceName: string) => `/edge-devices/${deviceName}`,
} as const;
