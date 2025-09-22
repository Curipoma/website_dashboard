import { Component } from '@angular/core';

@Component({
  selector: 'app-nebulae',
  imports: [],
  host: {
    '[class.dark:opacity-100]': "true",
    '[class.opacity-50]': "true",
  },
  template: `
    <img src="images/icons/nebula-1.svg" alt="nebula-1" class="nebula nebula-1">
    <img src="images/icons/nebula-2.svg" alt="nebula-2" class="nebula nebula-2">
    <img src="images/icons/nebula-3.svg" alt="nebula-3" class="nebula nebula-3">
  `,
  styles: `
    .nebula {
      position: fixed;
      z-index: 1;
      top: 50vh;
      left: 50vw;
      height: 100vh;
      width: auto;
      transform: translate(-50%, -50%) scale(1.75);
      opacity: 0;
      /* solo dejamos blink aquí, spin lo controlamos en cada nebula */
      animation: blink 60s ease-in-out infinite;
    }

    /* Nebula 1 → giro muy lento */
    .nebula-1 {
      transform: translate(-50%, -50%) scale(1.75) rotate(0deg);
      animation: spin-1 800s linear infinite, blink 60s ease-in-out infinite;
      animation-delay: 0s, 0s;
    }

    /* Nebula 2 → giro medio */
    .nebula-2 {
      transform: translate(-50%, -50%) scale(1.75) rotate(120deg);
      animation: spin-2 600s linear infinite, blink 60s ease-in-out infinite;
      animation-delay: 0s, 20s;
    }

    /* Nebula 3 → giro rápido */
    .nebula-3 {
      transform: translate(-50%, -50%) scale(1.75) rotate(240deg);
      animation: spin-3 400s linear infinite, blink 60s ease-in-out infinite;
      animation-delay: 0s, 40s;
    }

    /* Keyframes de spin (reutilizables) */
    @keyframes spin-1 {
      from {
        transform: translate(-50%, -50%) scale(1.75) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) scale(1.75) rotate(360deg);
      }
    }

    @keyframes spin-2 {
      from {
        transform: translate(-50%, -50%) scale(1.75) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) scale(1.75) rotate(360deg);
      }
    }

    @keyframes spin-3 {
      from {
        transform: translate(-50%, -50%) scale(1.75) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) scale(1.75) rotate(360deg);
      }
    }

    /* Aparición y desaparición */
    @keyframes blink {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      30% {
        opacity: 1;
      }
      40% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `,
})
export class NebulaeComponent {
}
