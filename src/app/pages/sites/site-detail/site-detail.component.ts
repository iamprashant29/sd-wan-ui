import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { SdwanApiService } from '../../../core/sdwan-api.service';
import { SiteDetail } from '../../../core/models';
import { EdgeDeviceListComponent } from '../../edge-devices/edge-device-list/edge-device-list.component';

interface PageState {
  loading: boolean;
  error: string | null;
  data: SiteDetail | null;
}

@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, EdgeDeviceListComponent],
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent {
  private readonly api = inject(SdwanApiService);
  private readonly route = inject(ActivatedRoute);

  protected readonly vm$ = this.route.paramMap.pipe(
    switchMap(params => {
      const siteId = params.get('siteId') ?? '';
      return this.api.getSiteDetail(siteId).pipe(
        map((data): PageState => ({ loading: false, error: null, data })),
        startWith<PageState>({ loading: true, error: null, data: null }),
        catchError(() =>
          of<PageState>({ loading: false, error: 'Failed to load site details. Ensure the backend is running on port 8080.', data: null })
        )
      );
    })
  );
}
