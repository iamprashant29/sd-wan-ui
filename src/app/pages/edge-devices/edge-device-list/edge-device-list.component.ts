import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EdgeDeviceSummary } from '../../../core/models';

@Component({
  selector: 'app-edge-device-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './edge-device-list.component.html',
  styleUrls: ['./edge-device-list.component.css']
})
export class EdgeDeviceListComponent {
  @Input() devices: EdgeDeviceSummary[] = [];
}
