import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { EdgeDeviceService } from '../edge-device.service';
import { EdgeDeviceSummary } from '../../../shared/models';

interface PageState {
  loading: boolean;
  error: string | null;
  devices: EdgeDeviceSummary[];
}

@Component({
    selector: 'app-edge-devices-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterLink],
    templateUrl: './edge-devices-page.component.html',
    styleUrls: ['./edge-devices-page.component.css']
})
export class EdgeDevicesPageComponent {
  private readonly api = inject(EdgeDeviceService);

  protected readonly vm$ = this.api.getEdgeDevices().pipe(
    map((devices): PageState => ({ loading: false, error: null, devices })),
    startWith<PageState>({ loading: true, error: null, devices: [] }),
    catchError(() =>
      of<PageState>({ loading: false, error: 'Failed to load edge devices. Ensure the backend is running on port 8080.', devices: [] })
    )
  );
}
