import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { loadingInterceptor } from './app/shared/loading.interceptor';
import { errorInterceptor } from './app/shared/error.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    provideRouter(routes)
  ]
}).catch((error) => console.error(error));