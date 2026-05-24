import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AppError {
  status: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private readonly error$ = new BehaviorSubject<AppError | null>(null);
  readonly currentError$ = this.error$.asObservable();

  handle(err: HttpErrorResponse): void {
    if (!environment.production) {
      console.error('[ErrorService]', err);
    }
    this.error$.next({ status: err.status, message: this.toMessage(err) });
  }

  clear(): void {
    this.error$.next(null);
  }

  private toMessage(err: HttpErrorResponse): string {
    switch (err.status) {
      case 400: return 'Bad request. Please check the submitted data.';
      case 401: return 'Unauthorized. Please log in and try again.';
      case 403: return 'Forbidden. You do not have permission to perform this action.';
      case 404: return 'The requested resource was not found.';
      case 500: return 'An internal server error occurred. Please try again later.';
      default:  return 'An unexpected error occurred. Please try again.';
    }
  }
}
