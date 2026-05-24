import { Routes } from '@angular/router';

export const sitesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sites-page/sites-page.component').then(m => m.SitesPageComponent)
  },
  {
    path: ':siteId',
    loadComponent: () =>
      import('./site-detail/site-detail.component').then(m => m.SiteDetailComponent)
  }
];
