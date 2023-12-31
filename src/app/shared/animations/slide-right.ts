import { query, style, group, animate } from '@angular/animations';

export const slideRightAnimation = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', width: '100%', height: '100%', zIndex: 2 }),
    { optional: true }
  ),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
      ],
      { optional: true }
    ),
  ]),
];
