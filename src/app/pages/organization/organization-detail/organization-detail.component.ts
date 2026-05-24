import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { OrganizationService } from '../organization.service';
import { OrganizationDetail } from '../../../shared/models';

interface PageState {
  loading: boolean;
  error: string | null;
  data: OrganizationDetail | null;
}

@Component({
  selector: 'app-organization-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent {
  private readonly api = inject(OrganizationService);
  private readonly route = inject(ActivatedRoute);

  protected readonly vm$ = this.route.paramMap.pipe(
    switchMap(params => {
      const orgId = params.get('orgId') ?? '';
      return this.api.getOrganizationDetail(orgId).pipe(
        map((data): PageState => ({ loading: false, error: null, data })),
        startWith<PageState>({ loading: true, error: null, data: null }),
        catchError(() =>
          of<PageState>({ loading: false, error: 'Failed to load organization details. Ensure the backend is running on port 8080.', data: null })
        )
      );
    })
  );
}
