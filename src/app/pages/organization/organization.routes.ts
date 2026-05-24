import { Routes } from '@angular/router';

export const organizationRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./organization.component').then(m => m.OrganizationComponent)
  },
  {
    path: ':orgId',
    loadComponent: () =>
      import('./organization-detail/organization-detail.component').then(m => m.OrganizationDetailComponent)
  }
];
