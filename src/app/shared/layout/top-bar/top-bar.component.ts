import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

interface Language {
  label: string;
  value: string;
}

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  template: `
    <nav class="relative w-full z-10">

      <!-- Hamburger Menu for small screens -->
      <div class="fixed flex justify-between items-center w-full p-1 z-50 md:hidden">
        <a [routerLink]="'/'" class="h-20 w-20">
          <img alt="logo" src="images/icons/logo.svg" class="h-full w-full"/>
        </a>
        <span
          id="hamburgerElement"
          class="text-center p-1.5 rounded-full transform rotate-90 cursor-pointer"
        >
        |||
      </span>
      </div>

      <!-- Overlay Background -->
      <span
        id="navBackgroundShow"
        class="fixed inset-0 backdrop-blur-sm bg-black/20 opacity-0 invisible transition-all duration-300"
      ></span>

      <!-- Hamburger Content -->
      <div
        id="navHamburgerContent"
        class="fixed right-[-20rem] bottom-0 h-[calc(100vh-6.5rem)] max-w-[20rem] w-full bg-gray-800 flex flex-col justify-between p-4 gap-0 transition-all duration-300 z-40"
      >
        <div class="flex flex-col gap-4">
          <!-- Language Selector -->
          <ul class="relative flex flex-col items-start p-1.5 mx-auto max-w-[5rem] w-full group">
            {{ currentLanguage.label }}
            <div class="absolute top-6 left-0 hidden group-hover:block w-full max-w-[5rem] z-20">
              @for (language of languages; track language) {
                <li (click)="useLanguage(language)">
                <span class="block w-full px-2 py-1 hover:bg-gray-700 cursor-pointer">
                  {{ language.label }}
                </span>
                </li>
              }
            </div>
          </ul>
        </div>

        <!-- Footer Icons -->
        <div class="flex gap-2">
          <a href="https://github.com/Curipoma/" class="relative">
            <img src="images/icons/github-64.svg" alt="github" class="h-8 w-8"/>
          </a>
          <a href="https://www.linkedin.com/in/alvaro-curipoma-713353229/" class="relative">
            <img src="images/icons/linkedin-96.svg" alt="linkedin" class="h-8 w-8"/>
          </a>
        </div>
      </div>

      <!-- Top Navigation for large screens -->
      <div class="hidden md:flex fixed justify-between items-center w-full px-10 z-40">
        <a [routerLink]="'/'" class="h-20 w-20">
          <img alt="logo" src="images/icons/logo.svg" class="h-full w-full"/>
        </a>

        <ul class="relative flex flex-col items-start p-2 max-w-[6rem] w-full group">
          {{ currentLanguage.label }}
          <div class="absolute top-6 left-0 hidden group-hover:block w-full max-w-[6rem] z-20">
            @for (language of languages; track language) {
              <li (click)="useLanguage(language)">
              <span class="block w-full px-2 py-1 hover:bg-gray-700 cursor-pointer">
                {{ language.label }}
              </span>
              </li>
            }
          </div>
        </ul>
      </div>

      <!-- Right Side Contact (small screen) -->
      <div class="hidden md:flex fixed flex-col justify-end right-1 top-0 max-h-screen h-full w-10 z-30 items-center">
        <small
          class="[-webkit-writing-mode:vertical-rl] [writing-mode:vertical-rl] rotate-180 tracking-widest text-gray-900 dark:text-gray-100">+593
          993582075</small>
        <span class="h-0.5 w-full bg-white my-2"></span>
        <a href="https://github.com/Curipoma/">
          <img src="images/icons/github-64.svg" class="h-6 w-6 rotate-[-90deg]" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/alvaro-curipoma-713353229/">
          <img src="images/icons/linkedin-96.svg" class="h-6 w-6 rotate-[-90deg]" alt="linkedin"/>
        </a>
      </div>

      <!-- Left Side Email -->
      <div class="hidden md:flex fixed flex-col justify-end left-1 top-0 max-h-screen h-full w-10 z-30 items-center">
        <a
          href="mailto:alvarocuripoma@gmail.com"
          class="[-webkit-writing-mode:vertical-rl] [writing-mode:vertical-rl] rotate-180 tracking-widest text-gray-900 dark:text-gray-100"
        >
          alvarocuripoma&#64;gmail.com
        </a>
        <span class="h-0.5 w-full bg-white my-2"></span>
      </div>
    </nav>
  `,
})
export class TopBarComponent implements OnInit {
  languages: Language[] = [];
  currentLanguage: Language = {label: '', value: ''};
  private translate = inject(TranslateService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.languages = [
      {label: 'Inglés', value: 'en'},
      {label: 'Español', value: 'es'},
    ];
  }

  ngOnInit(): void {
    const lang =
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
