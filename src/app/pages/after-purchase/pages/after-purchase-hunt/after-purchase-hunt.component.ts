import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-after-purchase-hunt',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './after-purchase-hunt.component.html',
  styleUrl: './after-purchase-hunt.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class AfterPurchaseHuntComponent implements OnInit  {
  isMobile: boolean = false;

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        const browserLang = navigator.language;
        this.translate.setDefaultLang('sl');
        this.translate.use(browserLang.startsWith('sl') ? 'sl' : 'en');
      } else {
        // Fallback jezik na strežni strani
        this.translate.setDefaultLang('sl');
        this.translate.use('sl');
      }

      if (isPlatformBrowser(this.platformId)) {
        this.isMobile = window.innerWidth <= 768;

        window.addEventListener('resize', () => {
          this.isMobile = window.innerWidth <= 768;
        });
      }
    }

}
