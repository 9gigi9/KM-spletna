import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TicketCardComponent } from '../../components/ticket-card/ticket-card.component';
import { EventService } from '../../services/event.service';

@Component({
    selector: 'app-tickets-store',
    imports: [CommonModule, TicketCardComponent],
    templateUrl: './tickets-store.component.html',
    styleUrl: './tickets-store.component.css'
})
export class TicketsStoreComponent {
  readonly eventService = inject(EventService);
  private readonly router = inject(Router);

  goToEventDetails(id: string): void {
    this.router.navigate(['/tickets-store', id]);
  }
}
