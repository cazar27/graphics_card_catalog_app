import { createAction, props } from '@ngrx/store';
import { GraphicCard } from '../../interfaces/graphic-card.interface';

export const loadGraphicCards = createAction(
  '[GraphicCard] Load GraphicCards'
);

export const loadGraphicCardsSuccess = createAction(
  '[GraphicCard] Load GraphicCards Success',
  props<{ graphicCards: GraphicCard[] }>()
);

export const loadGraphicCardsFailure = createAction(
  '[Graphic Cards] Load Graphic Cards Failure',
  props<{ error: any }>()
);
