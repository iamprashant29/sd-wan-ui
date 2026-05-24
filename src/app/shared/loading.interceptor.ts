import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delayWhen, finalize, timer } from 'rxjs';
import { LoadingService } from './loading.service';

const MIN_DISPLAY_MS = 800;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.start();
  const startTime = Date.now();
  return next(req).pipe(
    delayWhen(() => timer(Math.max(0, MIN_DISPLAY_MS - (Date.now() - startTime)))),
    finalize(() => loadingService.stop())
  );
};
