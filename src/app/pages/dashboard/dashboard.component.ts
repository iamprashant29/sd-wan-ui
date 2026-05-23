import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';
import { SdwanApiService } from '../../core/sdwan-api.service';
import { DashboardOverview } from '../../core/models';

interface PageState {
  loading: boolean;
  error: string | null;
  data: DashboardOverview | null;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private readonly api = inject(SdwanApiService);

  protected readonly vm$ = this.api.getOverview().pipe(
    map((data): PageState => ({ loading: false, error: null, data })),
    startWith<PageState>({ loading: true, error: null, data: null }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load dashboard data. Ensure the backend is running on port 8080.', data: null })
    )
  );
}
