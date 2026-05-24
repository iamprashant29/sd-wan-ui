import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  template: `<div class="loading-bar" [class.loading-bar--active]="loadingService.isLoading$ | async"></div>`,
  styles: [`
    .loading-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.2s ease;
      background: linear-gradient(90deg, #2563eb 0%, #93c5fd 50%, #2563eb 100%);
      background-size: 200% 100%;
    }

    .loading-bar--active {
      opacity: 1;
      animation: loading-sweep 1.4s linear infinite;
    }

    @keyframes loading-sweep {
      0%   { background-position: 200% center; }
      100% { background-position: -200% center; }
    }
  `]
})
export class LoadingBarComponent {
  protected readonly loadingService = inject(LoadingService);
}
