import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-init',
  template: `
    <img
      src="images/icons/logo.svg"
      alt="loading-icon"
      class="relative mx-auto w-full max-w-[15em] h-full max-h-[15em]"
    />
  `,
})
export class LoadingInitComponent {
}
