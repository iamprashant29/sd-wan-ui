import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AppError, ErrorService } from './error.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  template: `
    @if (errorService.currentError$ | async; as err) {
      <div class="toast toast--error" role="alert" aria-live="assertive">
        <span class="toast__icon">!</span>
        <span class="toast__message">{{ err.message }}</span>
        <button class="toast__close" aria-label="Dismiss" (click)="errorService.clear()">&#x2715;</button>
      </div>
    }
  `,
  styles: [`
    .toast {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 320px;
      max-width: 520px;
      padding: 14px 16px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      animation: toast-in 0.25s ease;
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }

    .toast--error {
      background: #fff;
      border-top: 4px solid #ef4444;
    }

    .toast__icon {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #ef4444;
      color: #fff;
      font-weight: 700;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .toast__message {
      flex: 1;
      font-size: 13px;
      color: #1a2035;
      line-height: 1.4;
    }

    .toast__close {
      flex-shrink: 0;
      background: none;
      border: none;
      cursor: pointer;
      color: #94a3b8;
      font-size: 14px;
      padding: 0;
      line-height: 1;
    }

    .toast__close:hover {
      color: #1a2035;
    }
  `]
})
export class ToastComponent implements OnInit, OnDestroy {
  protected readonly errorService = inject(ErrorService);

  private autoDismiss$: Subscription | undefined;

  ngOnInit(): void {
    this.autoDismiss$ = this.errorService.currentError$.pipe(
      filter((err): err is AppError => err !== null),
      switchMap(() => timer(3000))
    ).subscribe(() => this.errorService.clear());
  }

  ngOnDestroy(): void {
    this.autoDismiss$?.unsubscribe();
  }
}
