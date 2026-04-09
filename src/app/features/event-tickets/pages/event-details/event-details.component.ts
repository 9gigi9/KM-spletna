import {
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    inject,
    NO_ERRORS_SCHEMA,
    OnInit,
    PLATFORM_ID,
} from '@angular/core';
import { Event } from '../../../../models/event.model';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class EventDetailsComponent implements OnInit {
  private readonly eventService = inject(EventService);
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  event: Event | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.events$.pipe(take(1)).subscribe((data) => {
        const found = data.find((e) => e.id === id);
        if (found) {
          this.event = found;
        } else {
          console.error('Event not found with id:', id);
        }
      });
    }
  }

  openStripeLink() {
    if (!isPlatformBrowser(this.platformId) || this.event === undefined) {
      return;
    }
    window.open(this.event.stripeLink, '_blank');
  }
}
