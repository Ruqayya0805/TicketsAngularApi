import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'https://localhost:7107/api/tickets';  

  constructor(private http: HttpClient) {}

  
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }
}