import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  label: string;
  value: string;
}

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    standalone: false
})
export class TopBarComponent implements OnInit {
  languages: Language[] = [];
  currentLanguage: Language = { label: '', value: '' };

  constructor(private translate: TranslateService) {
    this.languages = [
      { label: 'Inglés', value: 'en' },
      { label: 'Español', value: 'es' },
    ];
  }

  ngOnInit(): void {
    const lang: string =
      this.translate.currentLang === undefined
        ? this.translate.defaultLang
        : this.translate.currentLang;
    [this.currentLanguage] = this.languages.filter(
      (language) => language.value !== lang
    );

    document.addEventListener('click', function (event: any) {
      const navBackgroundShow = document.getElementById(
        'navBackgroundShow'
      ) as HTMLSpanElement;
      const navHamburgerContent = document.getElementById(
        'navHamburgerContent'
      ) as HTMLDivElement;
      const hamburgerElement = document.getElementById(
        'hamburgerElement'
      ) as HTMLSpanElement;
      let isShow = navHamburgerContent?.classList.contains(
        'showNavHamburgerContent'
      );

      if (event?.target.id === 'hamburgerElement') {
        if (hamburgerElement.innerText === '×') {
          hamburgerElement.innerText = '|||';
          hamburgerElement.style.transform = 'rotate(90deg)';
          hamburgerElement.style.background = 'transparent';
          navBackgroundShow.style.visibility = 'hidden';
          navBackgroundShow.style.opacity = '0';
        } else {
          hamburgerElement.innerText = '×';
          hamburgerElement.style.transform = 'rotate(450deg)';
          hamburgerElement.style.background = '#b41a36';
          navBackgroundShow.style.visibility = 'visible';
          navBackgroundShow.style.opacity = '1';
        }
        navHamburgerContent?.classList.toggle('showNavHamburgerContent');
      }
      if (
        !navHamburgerContent?.contains(event.target) &&
        event?.target.id !== 'hamburgerElement'
      ) {
        if (isShow) {
          if (hamburgerElement.innerText === '×') {
            hamburgerElement.innerText = '|||';
            hamburgerElement.style.transform = 'rotate(90deg)';
            hamburgerElement.style.background = 'transparent';
            navBackgroundShow.style.visibility = 'hidden';
            navBackgroundShow.style.opacity = '0';
          } else {
            hamburgerElement.innerText = '×';
            hamburgerElement.style.transform = 'rotate(450deg)';
            hamburgerElement.style.background = '#b41a36';
            navBackgroundShow.style.visibility = 'visible';
            navBackgroundShow.style.opacity = '1';
          }
        }
        navHamburgerContent?.classList.remove('showNavHamburgerContent');
      }
    });
  }

  useLanguage(language: Language): void {
    this.currentLanguage = language;
    this.translate.use(language.value);
  }
}
