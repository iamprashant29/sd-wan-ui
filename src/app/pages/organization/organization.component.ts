import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { SdwanApiService } from '../../core/sdwan-api.service';
import { OrganizationOverview } from '../../core/models';

interface PageState {
  loading: boolean;
  error: string | null;
  data: OrganizationOverview | null;
}

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  private readonly api = inject(SdwanApiService);

  protected readonly vm$ = this.api.getOrganization().pipe(
    map((data): PageState => ({ loading: false, error: null, data })),
    startWith<PageState>({ loading: true, error: null, data: null }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load organization data. Ensure the backend is running on port 8080.', data: null })
    )
  );
}
