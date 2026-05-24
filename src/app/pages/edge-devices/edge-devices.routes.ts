import { Routes } from '@angular/router';

export const edgeDevicesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./edge-devices-page/edge-devices-page.component').then(m => m.EdgeDevicesPageComponent)
  },
  {
    path: ':deviceName',
    loadComponent: () =>
      import('./edge-device-detail/edge-device-detail.component').then(m => m.EdgeDeviceDetailComponent)
  }
];
