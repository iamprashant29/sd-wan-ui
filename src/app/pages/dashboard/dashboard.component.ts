import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { DashboardOverview } from '../../shared/models';
import { SiteListComponent } from '../sites/site-list/site-list.component';

interface PageState {
  loading: boolean;
  error: string | null;
  data: DashboardOverview | null;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SiteListComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private readonly api = inject(DashboardService);

  protected readonly vm$ = this.api.getOverview().pipe(
    map((data): PageState => ({ loading: false, error: null, data })),
    startWith<PageState>({ loading: true, error: null, data: null }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load overview. Ensure the backend is running on port 8080.', data: null })
    )
  );

  protected sitesGradient(data: DashboardOverview): string {
    const total = data.totalSites || 1;
    const h = (data.healthySites / total) * 100;
    const d = (data.degradedSites / total) * 100;
    return `conic-gradient(#16a34a 0% ${h}%, #d97706 ${h}% ${h + d}%, #dc2626 ${h + d}% 100%)`;
  }

  protected devicesGradient(data: DashboardOverview): string {
    const total = data.totalEdgeDevices || 1;
    const onlinePct = (data.onlineDevices / total) * 100;
    return `conic-gradient(#16a34a 0% ${onlinePct}%, #dc2626 ${onlinePct}% 100%)`;
  }

  protected sitesPct(data: DashboardOverview) {
    const t = data.totalSites || 1;
    return {
      healthy: Math.round((data.healthySites / t) * 100),
      degraded: Math.round((data.degradedSites / t) * 100),
      down: Math.round((data.downSites / t) * 100)
    };
  }

  protected devicesPct(data: DashboardOverview) {
    const t = data.totalEdgeDevices || 1;
    return {
      online: Math.round((data.onlineDevices / t) * 100),
      offline: Math.round((data.offlineDevices / t) * 100)
    };
  }
}
