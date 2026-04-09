import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-hire-us-card',
  standalone: true,
  templateUrl: './hire-us-card.component.html',
  imports: [
    CardModule,
    NgStyle
  ],
  styleUrls: ['./hire-us-card.component.css']
})
export class HireUsCardComponent {
  @Input() title!: string;
  @Input() imagePath!: string;
  @Input() backtext!: string;
  isHoveredClicked: boolean = false; // Združena spremenljivka za hover in klik

  // Pridobi stil ozadja iz imagePath
  get backgroundImage(): string {
    return `url(${this.imagePath})`;
  }

  // Upravljanje klika ali hoverja
  toggleHoverClick(state: boolean): void {
    this.isHoveredClicked = state;
  }
}
