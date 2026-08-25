import { Component, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrl: './google-login-button.component.css',
  imports: [TranslateModule],
})
export class GoogleLoginButtonComponent {
  readonly loginClick = output();
}
