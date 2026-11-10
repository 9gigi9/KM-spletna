import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [TranslateModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly quizService = inject(QuizService);

  readonly quizId = input.required<string>();

  private readonly url = rxResource({
    params: () => this.quizId(),
    stream: ({ params: quizId }) => this.quizService.getQuizUrl(quizId),
  });

  readonly safeUrl = computed(() => {
    const url = this.url.hasValue() ? this.url.value() : null;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });
  // getQuizUrl returns null when the quiz is missing or not bought
  readonly error = computed(
    () => !!this.url.error() || (this.url.hasValue() && !this.url.value()),
  );
  // resets to true when another quiz is selected
  readonly loading = linkedSignal({
    source: this.quizId,
    computation: () => true,
  });
}
