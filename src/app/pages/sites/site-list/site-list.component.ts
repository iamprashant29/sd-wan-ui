import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { SiteService } from '../site.service';
import { SiteHealthSnapshot } from '../../../shared/models';

interface ListState {
  loading: boolean;
  error: string | null;
  sites: SiteHealthSnapshot[];
}

@Component({
  selector: 'app-site-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent {
  private readonly api = inject(SiteService);

  protected readonly vm$ = this.api.getSites().pipe(
    map((sites): ListState => ({ loading: false, error: null, sites })),
    startWith<ListState>({ loading: true, error: null, sites: [] }),
    catchError(() =>
      of<ListState>({ loading: false, error: 'Failed to load sites.', sites: [] })
    )
  );
}
