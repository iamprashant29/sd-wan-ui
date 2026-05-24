import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../shared/error.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ''
})
export class NotFoundComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly errorService = inject(ErrorService);

  ngOnInit(): void {
    this.errorService.handle(
      new HttpErrorResponse({ status: 404, statusText: 'Not Found' })
    );
    this.router.navigate(['/dashboard']);
  }
}
