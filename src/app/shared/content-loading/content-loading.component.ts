import { Component } from '@angular/core';

@Component({
  selector: 'app-content-loading',
  template: `
    <div class="absolute top-0 left-[100vw] w-0 h-full flex justify-center items-center z-20">
      <div
        class="relative bg-[url('/images/icons/logo.svg')] bg-contain bg-no-repeat bg-center max-w-[20em] w-full max-h-[20em] h-full before:absolute before:content-[''] before:right-0 before:left-0 before:bottom-0 before:h-4 before:w-full before:rounded-full before:blur-[1em]"></div>
    </div>

    <div class="absolute top-0 left-[100vw] w-0 h-full z-19"></div>
  `,
})
export class ContentLoadingComponent {
}
