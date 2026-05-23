import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { SdwanApiService } from '../../../core/sdwan-api.service';
import { EdgeDeviceSummary } from '../../../core/models';

interface PageState {
  loading: boolean;
  error: string | null;
  devices: EdgeDeviceSummary[];
}

@Component({
  selector: 'app-edge-devices-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './edge-devices-page.component.html',
  styleUrls: ['./edge-devices-page.component.css']
})
export class EdgeDevicesPageComponent {
  private readonly api = inject(SdwanApiService);

  protected readonly vm$ = this.api.getEdgeDevices().pipe(
    map((devices): PageState => ({ loading: false, error: null, devices })),
    startWith<PageState>({ loading: true, error: null, devices: [] }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load edge devices. Ensure the backend is running on port 8080.', devices: [] })
    )
  );
}
