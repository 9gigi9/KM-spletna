import { Component } from '@angular/core';
import {HireUsCardComponent} from "../hire-us-card/hire-us-card.component";

@Component({
  selector: 'app-hire-us-cards-container',
  standalone: true,
  templateUrl: './hire-us-cards-container.component.html',
  imports: [
    HireUsCardComponent
  ],
  styleUrl: './hire-us-cards-container.component.css'
})
export class HireUsCardsContainerComponent {

}
