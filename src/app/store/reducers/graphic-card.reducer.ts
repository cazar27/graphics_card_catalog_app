import { createReducer, on } from '@ngrx/store';

import { loadGraphicCards, loadGraphicCardsFailure, loadGraphicCardsSuccess } from '../actions/graphic-card.actions';

import { GraphicCard } from '../../interfaces/graphic-card.interface';

export interface GraphicCardState {
  graphicCards: GraphicCard[];
}

export const initialState: GraphicCardState = {
  graphicCards: []
};

export const graphicCardReducer = createReducer(
  initialState,
  on(loadGraphicCards, state => state),
  on(loadGraphicCardsSuccess, (state, { graphicCards }) => ({ ...state, graphicCards })),
  on(loadGraphicCardsFailure, (state, { error }) => ({ ...state, error }))
);
