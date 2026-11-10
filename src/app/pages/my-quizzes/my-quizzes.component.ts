import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { GoogleLoginButtonComponent } from '../../components/google-login-button/google-login-button.component';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../products/services/product.service';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-my-quizzes',
  imports: [
    GoogleLoginButtonComponent,
    QuizComponent,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './my-quizzes.component.html',
  styleUrl: './my-quizzes.component.css',})
export class MyQuizzesComponent {
  private readonly quizService = inject(QuizService);
  private readonly products = toSignal(inject(ProductService).products$);
  readonly authService = inject(AuthService);

  readonly quizIds = rxResource({
    params: () => this.authService.currentUser(),
    stream: ({ params: user }) =>
      user ? this.quizService.getPurchasedQuizIds(user.uid) : of([]),
  });

  // first quiz is selected once the list loads
  // value() throws in the error state, so check hasValue() first
  readonly selectedQuizId = linkedSignal(() =>
    this.quizIds.hasValue() ? this.quizIds.value()[0] : undefined,
  );

  // imgUrl of the store product that sells that quiz alone
  cover(quizId: string): string | undefined {
    return this.products()?.find((product) => product.quizId === quizId)
      ?.imgUrl;
  }
}
