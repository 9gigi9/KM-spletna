import { Component, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { GoogleLoginButtonComponent } from '../google-login-button/google-login-button.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
  imports: [TranslateModule, GoogleLoginButtonComponent, RouterLink],
})
export class UserMenuComponent {
  private breakpointService = inject(BreakpointService);
  readonly authService = inject(AuthService);

  readonly navigate = output();

  readonly isMobile = this.breakpointService.isMobile;

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signOut() {
    this.authService.signOut();
  }
}
