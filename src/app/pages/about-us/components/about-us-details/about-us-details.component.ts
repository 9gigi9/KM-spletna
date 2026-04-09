import { Component } from '@angular/core';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-about-us-details',
  standalone: true,
  imports: [FeedbackComponent],
  templateUrl: './about-us-details.component.html',
  styleUrl: './about-us-details.component.css',
})
export class AboutUsDetailsComponent {
  public weAreText =
    'Smo mlada ekipa kvizoljubov. V lokalih in na dogodkih po Sloveniji organiziramo pub kvize,' +
    ' od koder izvira tudi naše ime; KVIZ MOJSTER je namreč oseba, ki med kvizom postavlja vprašanja.';
  public f1 =
    '"Zelo radi hodimo na vaše kvize, ker imate kvalitetna vprašanja in super izvedbo."';
  public f2 =
    '"Thank you so much for the birthday quiz, many people told me they truly enjoyed it!"';
  public f3 = '"Za tak večer pa se je splačalo prit iz Maribora! Pridemo še!"';
  public f4 = '"Super ste! <3"';
  public f5 =
    '"Samo povem, to je bil najboljši kviz, na katerem sem bil do sedaj."';
  public a1 = '~ R';
  public a2 = '~ A';
  public a3 = '~ N';
  public a4 = '~ V';
  public a5 = '~ M';
}
