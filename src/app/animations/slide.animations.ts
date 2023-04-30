import { animate, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition(':increment', slideTo()),
    transition(':decrement', slideTo())
  ]);

function slideTo() {
  return [
    query(':enter',
      [
        style({ opacity: 0, position: 'absolute', top: '64px'})
      ],
      { optional: true }
    ),

    query(':leave',
      [
        style({ opacity: 1 }),
        animate('0.300s', style({ opacity: 0 },))
      ],
      { optional: true }
    ),

    query(':enter',
      [
        style({ opacity: 0, position: 'absolute', top: '64px' }),
        animate('0.300s', style({ opacity: 1}))
      ],
      { optional: true }
    ),
  ]
}
