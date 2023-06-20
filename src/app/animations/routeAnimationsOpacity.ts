import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";

export const routeAnimationsOpacity = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter', stagger('300ms', [
      animate('0.3s ease-in', keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ]))
    ]), {optional: true}),
    query(':leave', stagger('300ms', [
      animate('0.3s ease-in', keyframes([
        style({opacity: 1, position: 'absolute',}),
        style({opacity: 0})
      ]))
    ]), {optional: true}),
  ]),
]);
