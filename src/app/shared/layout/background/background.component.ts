import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs";
import { NebulaeComponent } from "@shared/layout/background/nebulae/nebulae.component";
import { StarsComponent } from "@shared/layout/background/stars/stars.component";
import { CometsComponent } from "@shared/layout/background/comets/comets.component";

@Component({
  selector: 'app-background',
  template: `
    <div
      [attr.view-transition-name]="'background-transition-' + routeName + transitionId"
      animate.enter="background-transition"
      class="background-transition"
    >
      <app-comets/>
      <app-stars/>
      <app-nebulae/>
    </div>
  `,
  imports: [
    NebulaeComponent,
    StarsComponent,
    CometsComponent,
  ]
})
export class BackgroundComponent {
  protected routeName = 'default';
  protected transitionId = Date.now();
  protected readonly router = inject(Router);

  constructor(private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data['animation'] ?? 'default';
        })
      )
      .subscribe((name) => {
        this.routeName = name;
        this.transitionId = Date.now();
      });
  }
}
