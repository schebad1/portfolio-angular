import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  currentLang: string;
  resizeSubscription!: Subscription;
  private storageKey = 'setLanguage';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem(this.storageKey);
    const browserLang = this.translate.getBrowserLang();
    const initialLang = savedLang || (browserLang?.match(/de/) ? browserLang : 'en');

    this.translate.use(initialLang);
    this.currentLang = initialLang;

    if (!savedLang) {
      localStorage.setItem(this.storageKey, initialLang);
    }
  }

  switchMenuState(): void {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }

  ngOnInit(): void {
    this.onResizeCheck();
    this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => this.onResizeCheck());
  }

  scrollToTopAction(): void {
    window.scrollTo({ top: 0 });
  }

  onResizeCheck(): void {
    const width = window.innerWidth;

    if (width >= 1000 && this.isOpen) {
      this.isOpen = false;
      document.body.style.overflow = '';
    }

    if (width < 1000 && !this.isOpen) {
      document.body.style.overflow = '';
    }
  }

  setLanguageAction(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
    this.currentLang = lang;
  }
}