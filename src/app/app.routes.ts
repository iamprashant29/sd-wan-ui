import { Routes } from '@angular/router';
import { SdwanDashboardComponent } from './pages/sdwan-dashboard/sdwan-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sdwan-dashboard', pathMatch: 'full' },
  {
    path: 'sdwan-dashboard',
    component: SdwanDashboardComponent
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'organization',
    loadComponent: () =>
      import('./pages/organization/organization.component').then(m => m.OrganizationComponent)
  },
  { path: '**', redirectTo: 'sdwan-dashboard' }
];