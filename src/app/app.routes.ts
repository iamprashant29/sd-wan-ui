import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sdwan-dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('./pages/organization/organization.routes').then(m => m.organizationRoutes)
  },
  {
    path: 'sites',
    loadChildren: () =>
      import('./pages/sites/sites.routes').then(m => m.sitesRoutes)
  },
  {
    path: 'edge-devices',
    loadChildren: () =>
      import('./pages/edge-devices/edge-devices.routes').then(m => m.edgeDevicesRoutes)
  },
  { path: '**', redirectTo: 'dashboard' }
];
