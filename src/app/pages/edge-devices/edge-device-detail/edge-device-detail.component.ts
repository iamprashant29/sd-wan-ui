import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { EdgeDeviceService } from '../edge-device.service';
import { BandwidthPoint, EdgeDeviceDetail } from '../../../shared/models';

interface PageState {
  loading: boolean;
  error: string | null;
  data: EdgeDeviceDetail | null;
}

const CHART_W = 340;
const CHART_H = 100;
const PAD = 8;

@Component({
    selector: 'app-edge-device-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './edge-device-detail.component.html',
    styleUrls: ['./edge-device-detail.component.css']
})
export class EdgeDeviceDetailComponent {
  private readonly api = inject(EdgeDeviceService);
  private readonly route = inject(ActivatedRoute);

  protected readonly timeRanges = ['Last 6 hours', 'Last 24 hours', 'Last 7 days'];
  protected selectedRange = this.timeRanges[0];

  protected readonly vm$ = this.route.paramMap.pipe(
    switchMap(params => {
      const deviceName = params.get('deviceName') ?? '';
      return this.api.getEdgeDeviceDetail(deviceName).pipe(
        map((data): PageState => ({ loading: false, error: null, data })),
        startWith<PageState>({ loading: true, error: null, data: null }),
        catchError(() =>
          of<PageState>({ loading: false, error: 'Failed to load device details. Ensure the backend is running on port 8080.', data: null })
        )
      );
    })
  );

  protected chartPoints(history: BandwidthPoint[], key: 'wan1Mbps' | 'wan2Mbps'): string {
    if (!history.length) return '';
    const maxVal = Math.max(1, ...history.map(d => Math.max(d.wan1Mbps, d.wan2Mbps)));
    const step = history.length > 1 ? CHART_W / (history.length - 1) : CHART_W;
    return history.map((d, i) => {
      const x = +(i * step).toFixed(1);
      const y = +(CHART_H - PAD - (d[key] / maxVal) * (CHART_H - PAD * 2)).toFixed(1);
      return `${x},${y}`;
    }).join(' ');
  }

  protected chartLabels(history: BandwidthPoint[]): { x: number; label: string }[] {
    if (!history.length) return [];
    const step = history.length > 1 ? CHART_W / (history.length - 1) : CHART_W;
    const count = Math.min(history.length, 5);
    const indices = Array.from({ length: count }, (_, i) =>
      Math.round((i / (count - 1)) * (history.length - 1))
    );
    return [...new Set(indices)].map(i => ({
      x: +(i * step).toFixed(1),
      label: history[i].timestamp
    }));
  }

  protected wanStats(history: BandwidthPoint[], key: 'wan1Mbps' | 'wan2Mbps') {
    if (!history.length) return { avg: 0, peak: 0 };
    const values = history.map(d => d[key]);
    const avg = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
    const peak = Math.max(...values);
    return { avg, peak };
  }

  protected readonly chartW = CHART_W;
  protected readonly chartH = CHART_H;
}
