import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private translate = inject(TranslateService);
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  readonly currentLang = signal<'sl' | 'en'>('sl');

  readonly menuValue = signal(false);
  readonly menuIcon = computed(() =>
    this.menuValue() ? 'bi bi-x' : 'bi bi-list',
  );

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');
      const browserLang = navigator.language;
      const langToUse =
        savedLang || (browserLang.startsWith('sl') ? 'sl' : 'en');

      this.currentLang.set(langToUse as 'sl' | 'en');
      this.translate.setDefaultLang('sl');
      this.translate.use(this.currentLang());
    } else {
      this.translate.setDefaultLang('sl');
      this.translate.use('sl');
    }
  }

  setLanguage(lang: 'sl' | 'en') {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  openMenu() {
    this.menuValue.update((prev) => !prev);
  }

  closeMenu() {
    this.menuValue.set(false);
  }
}
