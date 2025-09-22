import { Component, OnInit } from '@angular/core';
import { StarComponent } from './star.component';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [StarComponent],
  template: `
    <section class="container">
      @for (star of stars; track star) {
        <app-star
          [top]="star.top"
          [left]="star.left"
          [size]="star.size"
          [delay]="star.delay"
        />
      }
    </section>
  `,
  styles: `
    .container {
      position: fixed;
      top: -50vh;
      display: flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      z-index: 0;
      max-height: 100vw;
      min-height: 100vw;
      max-width: 100vw;
      min-width: 100vw;

      animation: rotateBackground 1000s linear infinite;
    }

    @keyframes rotateBackground {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  `,
})
export class StarsComponent implements OnInit {
  stars: any[] = [];

  ngOnInit(): void {
    this.loadStars();
  }

  private loadStars(): void {
    const mount = 500;
    const minSize = 0.15;
    const maxSize = 0.05;
    const maxDelay = 10; // Max delay in seconds
    const maxPosition = 100;
    const minPosition = 0;

    for (let i = 0; i < mount; i++) {
      this.stars.push({
        top: Math.floor(Math.random() * (maxPosition - minPosition + 1) + minPosition),
        left: Math.floor(Math.random() * (maxPosition - minPosition + 1) + minPosition),
        size: Number((Math.random() * (maxSize - minSize) + minSize).toFixed(3)),
        delay: Number((Math.random() * maxDelay).toFixed(2))
      });
    }
  }
}
