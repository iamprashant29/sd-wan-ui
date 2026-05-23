import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DashboardOverview, HealthResponse, OrganizationOverview } from './models';

@Injectable({ providedIn: 'root' })
export class SdwanApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api';

  getHealth() {
    return this.http.get<HealthResponse>(`${this.baseUrl}/health`);
  }

  getOverview() {
    return this.http.get<DashboardOverview>(`${this.baseUrl}/dashboard`);
  }

  getOrganization() {
    return this.http.get<OrganizationOverview>(`${this.baseUrl}/organizations`);
  }
}