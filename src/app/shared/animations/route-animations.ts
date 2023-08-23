import { transition, trigger } from '@angular/animations';
import { slideDownAnimation } from './slide-down';
import { slideUpAnimation } from './slide-up';
import { slideRightAnimation } from './slide-right';
import { slideLeftAnimation } from './slide-left';

export const slideInAnimation = trigger('routeAnimations', [
  transition('home => profile', slideDownAnimation),
  transition('profile => home', slideUpAnimation),
  transition('home => search', slideRightAnimation),
  transition('home => no-results', slideRightAnimation),
  transition('search => home', slideLeftAnimation),
  transition('no-results => home', slideLeftAnimation)
]);
