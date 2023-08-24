import { transition, trigger } from '@angular/animations';
import { slideDownAnimation } from './slide-down';
import { slideUpAnimation } from './slide-up';
import { slideLeftAnimation } from './slide-left';
import { slideRightAnimation } from './slide-right';

export const slideInAnimation = trigger('routeAnimations', [
  transition('home => profile', slideDownAnimation),
  transition('profile => home', slideUpAnimation),
  transition('search => home', slideLeftAnimation),
  transition('no-results => home', slideLeftAnimation),
  transition('no-connection => home', slideLeftAnimation),
  transition('home => no-results', slideRightAnimation),
  transition('home => no-connection', slideRightAnimation),
  transition('home => search', slideRightAnimation),
  transition('search => course', slideRightAnimation),
  transition('course => search', slideLeftAnimation)
]);
