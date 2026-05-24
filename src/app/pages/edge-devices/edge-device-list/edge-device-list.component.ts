import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EdgeDeviceSummary } from '../../../shared/models';

@Component({
    selector: 'app-edge-device-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterLink],
    templateUrl: './edge-device-list.component.html',
    styleUrls: ['./edge-device-list.component.css']
})
export class EdgeDeviceListComponent {
  @Input() devices: EdgeDeviceSummary[] = [];
}
