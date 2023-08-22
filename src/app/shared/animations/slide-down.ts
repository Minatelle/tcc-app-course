import { query, style, group, animate } from '@angular/animations';

export const slideDownAnimation = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', width: '100%', height: '100%', zIndex: 2 }),
    { optional: true }
  ),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateY(0%)' })),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-out', style({ transform: 'translateY(100%)' })),
      ],
      { optional: true }
    ),
  ]),
];
