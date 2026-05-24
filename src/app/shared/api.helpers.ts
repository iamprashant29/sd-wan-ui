export function siteStatus(online: number, offline: number): 'HEALTHY' | 'DEGRADED' | 'DOWN' {
  if (offline === 0) return 'HEALTHY';
  if (online === 0)  return 'DOWN';
  return 'DEGRADED';
}

export function deviceStatus(raw: string): 'ONLINE' | 'OFFLINE' {
  return raw?.toLowerCase() === 'online' ? 'ONLINE' : 'OFFLINE';
}

export function orgStatus(raw: string): 'HEALTHY' | 'DEGRADED' | 'DOWN' {
  const lower = (raw ?? '').toLowerCase();
  if (lower === 'ok' || lower === 'healthy') return 'HEALTHY';
  if (lower === 'down') return 'DOWN';
  return 'DEGRADED';
}