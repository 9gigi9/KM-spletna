import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  @Input() feedback!: string;
  @Input() author!: string;
}
