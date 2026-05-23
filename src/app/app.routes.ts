import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sdwan-dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'organization',
    loadComponent: () =>
      import('./pages/organization/organization.component').then(m => m.OrganizationComponent)
  },
  {
    path: 'organization/:orgId',
    loadComponent: () =>
      import('./pages/organization/organization-detail/organization-detail.component').then(m => m.OrganizationDetailComponent)
  },
  {
    path: 'sites',
    loadComponent: () =>
      import('./pages/sites/sites-page/sites-page.component').then(m => m.SitesPageComponent)
  },
  {
    path: 'sites/:siteId',
    loadComponent: () =>
      import('./pages/sites/site-detail/site-detail.component').then(m => m.SiteDetailComponent)
  },
  {
    path: 'edge-devices',
    loadComponent: () =>
      import('./pages/edge-devices/edge-devices-page/edge-devices-page.component').then(m => m.EdgeDevicesPageComponent)
  },
  {
    path: 'edge-devices/:deviceName',
    loadComponent: () =>
      import('./pages/edge-devices/edge-device-detail/edge-device-detail.component').then(m => m.EdgeDeviceDetailComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
