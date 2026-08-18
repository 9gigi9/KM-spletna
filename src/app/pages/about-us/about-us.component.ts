import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { KmAnimationComponent } from '../../components/km-animation/km-animation.component';
import { AboutUsDetailsComponent } from './components/about-us-details/about-us-details.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    KmAnimationComponent,
    AboutUsDetailsComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
