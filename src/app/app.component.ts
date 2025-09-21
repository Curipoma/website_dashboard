import { Component } from '@angular/core';
import { BackgroundComponent } from '@shared/layout/background/background.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <router-outlet/>
    </div>
    <app-background/>
  `,
  host: {
    '[animate.enter]': "'enter-component'",
  },
  styles: [
    `
      .content {
        position: relative;
        z-index: 3;
      }
    `,
  ],
  imports: [BackgroundComponent, RouterOutlet],
})
export class AppComponent {
}
