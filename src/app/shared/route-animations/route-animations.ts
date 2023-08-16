import { transition, trigger } from '@angular/animations';
import { slideDownAnimation } from './slide-down';
import { slideUpAnimation } from './slide-up';
import { slideRightAnimation } from './slide-right';
import { slideLeftAnimation } from './slide-left';

export const slideInAnimation = trigger('routeAnimations', [
  transition('home => profile', slideDownAnimation),
  transition('profile => home', slideUpAnimation ),
]);
