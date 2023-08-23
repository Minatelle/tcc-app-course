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
  transition('home => search', slideRightAnimation),
  transition('home => no-results', slideRightAnimation),
  transition('* => no-connection', slideRightAnimation)
]);
