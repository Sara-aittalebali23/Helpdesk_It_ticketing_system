import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCall {
  private baseURL="http://localhost:8082/api/admin";

  constructor(private http: HttpClient) {}
  
  getTickets() {
    return this.http.get( `${this.baseURL}/active-tickets`);
  }
  getStatusCount() {
    return this.http.get( `${this.baseURL}/tickets-by-status`);
  }
  getPriorityCount() {
    return this.http.get( `${this.baseURL}/tickets-by-priority`);
  }
}
