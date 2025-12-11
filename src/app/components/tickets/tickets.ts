import { CommonModule, DatePipe } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket-service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets implements OnInit {
  tickets = signal<Ticket[]>([]);
  loading = signal<boolean>(true);
  error = signal<string>('');

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    // Subscribe to the Observable to receive data
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        // Update signal with fetched data
        this.tickets.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching tickets:', err);
        this.error.set('Failed to load tickets. Please ensure API is running.');
        this.loading.set(false);
      }
    });
  }

  getSeverityClass(severity: string): string {
    switch(severity.toLowerCase()) {
      case 'high': return 'severity-high';
      case 'medium': return 'severity-medium';
      case 'low': return 'severity-low';
      default: return '';
    }
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'open' ? 'status-open' : 'status-closed';
  }
}