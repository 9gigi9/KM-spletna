import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-after-purchase-hunt',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './after-purchase-hunt.component.html',
  styleUrl: './after-purchase-hunt.component.css',
})
export class AfterPurchaseHuntComponent {}
