import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css',
})
export class TicketCardComponent {
  @Input() title!: string;
  @Input() date!: string;
  @Input() time!: string;
  @Input() imgUrl!: string;
}
