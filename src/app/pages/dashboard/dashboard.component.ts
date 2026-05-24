import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
