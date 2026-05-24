import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private activeRequests = 0;
  private readonly loading$ = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.loading$.asObservable();

  start(): void {
    if (++this.activeRequests === 1) this.loading$.next(true);
  }

  stop(): void {
    if (--this.activeRequests <= 0) {
      this.activeRequests = 0;
      this.loading$.next(false);
    }
  }
}
