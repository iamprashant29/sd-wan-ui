import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { OrganizationService } from './organization.service';
import { OrganizationSummary } from '../../shared/models';

interface PageState {
  loading: boolean;
  error: string | null;
  data: OrganizationSummary[] | null;
}

@Component({
    selector: 'app-organization',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterLink],
    templateUrl: './organization.component.html',
    styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  private readonly api = inject(OrganizationService);

  protected readonly vm$ = this.api.getOrganizations().pipe(
    map((data): PageState => ({ loading: false, error: null, data })),
    startWith<PageState>({ loading: true, error: null, data: null }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load organizations. Ensure the backend is running on port 8080.', data: null })
    )
  );
}
