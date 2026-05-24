import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, combineLatest, map, of, startWith, switchMap } from 'rxjs';
import { SiteService } from '../site.service';
import { SiteDetail } from '../../../shared/models';
import { EdgeDeviceListComponent } from '../../edge-devices/edge-device-list/edge-device-list.component';

interface PageState {
  loading: boolean;
  error: string | null;
  data: SiteDetail | null;
  orgId: string | null;
  orgName: string | null;
}

@Component({
    selector: 'app-site-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterLink, EdgeDeviceListComponent],
    templateUrl: './site-detail.component.html',
    styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent {
  private readonly api = inject(SiteService);
  private readonly route = inject(ActivatedRoute);

  protected readonly vm$ = combineLatest([
    this.route.paramMap,
    this.route.queryParamMap
  ]).pipe(
    switchMap(([params, queryParams]) => {
      const siteId = params.get('siteId') ?? '';
      const orgId = queryParams.get('orgId');
      const orgName = queryParams.get('orgName');
      return this.api.getSiteDetail(siteId).pipe(
        map((data): PageState => ({ loading: false, error: null, data, orgId, orgName })),
        startWith<PageState>({ loading: true, error: null, data: null, orgId, orgName }),
        catchError(() =>
          of<PageState>({ loading: false, error: 'Failed to load site details. Ensure the backend is running on port 8080.', data: null, orgId, orgName })
        )
      );
    })
  );
}
