import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank',
  imports: [RouterOutlet],
  template: `
    <div class="h-screen w-full max-w-full relative">
      <div class="absolute inset-0 overflow-y-scroll h-screen w-full max-w-full">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class BlankComponent {
}
