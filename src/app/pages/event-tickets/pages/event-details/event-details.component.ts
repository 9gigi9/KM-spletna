import { isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, PLATFORM_ID } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css',
})
export class EventDetailsComponent {
  private readonly eventService = inject(EventService);
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly id = this.route.snapshot.paramMap.get('id');
  private readonly events = toSignal(this.eventService.events$, {
    initialValue: [] as Event[],
  });
  readonly event = computed(() => this.events().find((e) => e.id === this.id));

  openStripeLink() {
    const event = this.event();
    if (!isPlatformBrowser(this.platformId) || event === undefined) {
      return;
    }
    window.open(event.stripeLink, '_blank');
  }
}
