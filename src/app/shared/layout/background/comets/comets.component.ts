import { Component, OnInit } from '@angular/core';
import { CometComponent } from "@shared/layout/background/comets/comet/comet.component";

@Component({
  selector: 'app-comets',
  imports: [CometComponent],
  template: `
    <section class="container">
      @for (comet of comets; track comet) {
        <app-comet-svg
          [speed]="comet.speed"
          [size]="comet.size"
          [positionX]="comet.positionX"
          [positionY]="comet.positionY">
        </app-comet-svg>
      }
    </section>
  `,
  styles: `
    @use "../../../../../../public/theme/inspired/colors" as c;
    @forward "../../../../../../public/theme/inspired/elements";
    @forward "../../../../../../public/theme/inspired/help-classes";
    @forward "../../../../../../public/theme/inspired/measurements";
    @forward "../../../../../../public/theme/inspired/scrollbar";
    @forward "../../../../../../public/theme/inspired/variables";

    .container {
      background: c.$secondary-bg-color;
      background: c.$primary-bg-color-gradiant;
      position: fixed;
      top: 0;
      display: flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      z-index: 0;
      max-height: 100vh;
      min-height: 100vh;
      max-width: 100vw;
      min-width: 100vw;
    }

    // Estos selectores ya no son necesarios porque el componente hijo manejará su propio estilo.
    // .shooting_star_1_container, .shooting_star_2_container, ... {
    //   // ...
    // }
  `,
})
export class CometsComponent implements OnInit {
  comets: any[] = [];

  ngOnInit(): void {
    const numberOfComets = 10;
    for (let i = 0; i < numberOfComets; i++) {
      this.comets.push({
        positionX: this.generateRandom(100, 1),
        positionY: this.generateRandom(100, 1),
        size: this.generateRandom(15, 2),
        speed: this.generateRandom(15, 5),
        delay: this.generateRandom(10, 0)
      });
    }
  }

  private generateRandom(max: number, min: number): number {
    return Math.random() * (max - min) + min;
  }
}
