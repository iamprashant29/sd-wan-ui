import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { SiteService } from '../site.service';
import { SiteHealthSnapshot } from '../../../shared/models';

interface PageState {
  loading: boolean;
  error: string | null;
  sites: SiteHealthSnapshot[];
}

@Component({
  selector: 'app-sites-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  templateUrl: './sites-page.component.html',
  styleUrls: ['./sites-page.component.css']
})
export class SitesPageComponent {
  private readonly api = inject(SiteService);

  protected readonly vm$ = this.api.getSites().pipe(
    map((sites): PageState => ({ loading: false, error: null, sites })),
    startWith<PageState>({ loading: true, error: null, sites: [] }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load sites. Ensure the backend is running on port 8080.', sites: [] })
    )
  );
}
