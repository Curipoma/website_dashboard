import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [TopBarComponent, RouterOutlet, FooterComponent],
  template: `
    <app-top-bar/>
    <router-outlet/>
    <app-footer/>
  `,
})
export class MainComponent {
}
