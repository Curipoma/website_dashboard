import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  template: `
    <svg
      [style.width.em]="size"
      [style.height.em]="size"
      [style.top.px]="top"
      [style.left.px]="left"
      [style.animation]="delay"
      [style.color]="hostColor"
      width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="svg-start">
        <path id="Vector"
              d="M6.50738 7.62918C2.64538 10.2024 -1.30735 4.07794 2.6289 1.619C6.49068 -0.954039 10.4434 5.1704 6.50738 7.62918Z"
              fill="white"/>
      </g>
    </svg>
  `,
  styles: `
    :host {
      position: absolute;
      // La propiedad \`color\` se establece en el componente TypeScript
      // para que currentColor funcione.
    }

    svg path {
      fill: currentColor; // Usa la propiedad \`color\` del elemento host
    }

    @keyframes showStar {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      95% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `,
})
export class StarComponent implements OnInit, OnDestroy {
  @Input() top!: number;
  @Input() left!: number;
  @Input() size!: number;
  @Input() delay!: number;
  private mediaQuery!: MediaQueryList;
  private isDark = false;

  @HostBinding('style.top') get topStyle() {
    return `${ this.top }%`;
  }

  @HostBinding('style.left') get leftStyle() {
    return `${ this.left }%`;
  }

  @HostBinding('style.width') get widthStyle() {
    return `${ this.size }em`;
  }

  @HostBinding('style.height') get heightStyle() {
    return `${ this.size }em`;
  }

  @HostBinding('style.animation') get animationStyle() {
    return `showStar 10s infinite ${ this.delay }s`;
  }

  @HostBinding('style.color') get hostColor() {
    return `var(${ this.isDarkMode() || this.isDark ? '--color-slate-100' : '--color-slate-900' })`;
  }

  ngOnInit() {
    // 1. Detecta el tema inicial
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark = this.mediaQuery.matches;

    // 2. Escucha los cambios
    this.mediaQuery.addEventListener('change', (e) => {
      this.isDark = e.matches;
    });
  }

  ngOnDestroy() {
    // Limpia el evento cuando el componente se destruye
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', (e) => {
      });
    }
  }

  private isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
  }
}
