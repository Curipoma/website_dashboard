import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  ngOnInit(): void {
    this.loadStars();
    this.loadShootingStars();
  }

  loadStars(): void {
    const mount = 500;
    const minSize = 0.025;
    const maxSize = 0.2;
    const hiddenStarAt = 0;
    const showStarAt = 10000;
    const max = 100;
    const min = 0;
    const background = document.getElementById('background');
    const star = (
      top: number,
      right: number,
      bottom: number,
      left: number,
      timeShow: number,
      size: number
    ) => {
      const start = document.createElement('img');
      start.src = 'assets/images/icons/start.svg';
      start.alt = 'start';
      start.style.position = 'absolute';
      start.style.animation = 'showStar 10s infinite';
      start.style.top = `${top}%`;
      start.style.right = `${right}%`;
      start.style.bottom = `${bottom}%`;
      start.style.left = `${left}%`;
      start.style.height = `${size}em`;
      start.style.width = `${size}em`;
      setTimeout(
        () => (background !== null ? background.appendChild(start) : null),
        timeShow
      );
    };
    for (let i = 0; i < mount; i++) {
      star(
        Math.floor(Math.random() * (max - min + 1) + min),
        Math.floor(Math.random() * (max - min + 1) + min),
        Math.floor(Math.random() * (max - min + 1) + min),
        Math.floor(Math.random() * (max - min + 1) + min),
        Math.floor(
          Math.random() * (showStarAt - hiddenStarAt + 1) + hiddenStarAt
        ),
        Number((Math.random() * (maxSize - minSize) + minSize).toFixed(3))
      );
    }
  }

  loadShootingStars(): void {
    let shootingStarContainers = [];
    const shootingStar1Container = document.getElementById(
      'shootingStar1Container'
    ) as HTMLOrSVGImageElement;
    const shootingStar2Container = document.getElementById(
      'shootingStar2Container'
    ) as HTMLOrSVGImageElement;
    const shootingStar3Container = document.getElementById(
      'shootingStar3Container'
    ) as HTMLOrSVGImageElement;
    const shootingStar4Container = document.getElementById(
      'shootingStar4Container'
    ) as HTMLOrSVGImageElement;
    const shootingStar5Container = document.getElementById(
      'shootingStar5Container'
    ) as HTMLOrSVGImageElement;

    shootingStarContainers.push(shootingStar1Container);
    shootingStarContainers.push(shootingStar2Container);
    shootingStarContainers.push(shootingStar3Container);
    shootingStarContainers.push(shootingStar4Container);
    shootingStarContainers.push(shootingStar5Container);

    shootingStarContainers.forEach((shootingStarContainer) => {
      const generateNumberRandom = (max = 20, min = 5) =>
        Math.random() * (max - min) + min;
      let speedRandom = generateNumberRandom(5, 15);
      let sizeRandom = generateNumberRandom(2, 15);
      let positionYRandom = generateNumberRandom(1, 100);
      let positionXRandom = generateNumberRandom(1, 100);

      shootingStarContainer.style.transitionDuration = `${speedRandom}s`;
      shootingStarContainer.style.transitionTimingFunction = 'ease-in-out';
      shootingStarContainer.style.transform = 'rotate(135deg)';
      shootingStarContainer.style.top = `-${positionYRandom + 50}vw`;
      shootingStarContainer.style.right = `-${positionXRandom + 50}vw`;
      shootingStarContainer.style.width = `${sizeRandom}em`;

      setTimeout(() => {
        shootingStarContainer.style.top = `${positionYRandom + 200}vw`;
        shootingStarContainer.style.right = `${positionYRandom + 200}vw`;
      }, 100);

      setInterval(() => {
        shootingStarContainer.style.transitionDuration = '0s';
        shootingStarContainer.style.top = `-${positionYRandom + 50}vw`;
        shootingStarContainer.style.right = `-${positionXRandom + 50}vw`;
        shootingStarContainer.style.width = `${sizeRandom}em`;
        setTimeout(() => {
          shootingStarContainer.style.transitionDuration = `${speedRandom}s`;
          shootingStarContainer.style.top = `${positionYRandom + 200}vw`;
          shootingStarContainer.style.right = `${positionYRandom + 200}vw`;
          shootingStarContainer.style.width = `${sizeRandom}em`;
        }, 1000);
        speedRandom = generateNumberRandom(5, 15);
        sizeRandom = generateNumberRandom(2, 15);
        positionYRandom = generateNumberRandom(1, 100);
        positionXRandom = generateNumberRandom(1, 100);
      }, speedRandom * 1000);
    });
  }
}
