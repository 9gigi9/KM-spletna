import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @Input() feedback!: string;
  @Input() author!: string;
}
