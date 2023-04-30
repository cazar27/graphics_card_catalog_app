import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { GraphicCardService } from 'src/app/services/graphic-card.service';
import { loadGraphicCards, loadGraphicCardsFailure, loadGraphicCardsSuccess } from '../actions/graphic-card.actions';

@Injectable()
export class GraphicCardsEffects {
  constructor(
    private actions$: Actions,
    private graphicCardsService: GraphicCardService
  ) { }

  loadGraphicCards$ = createEffect(() => this.actions$.pipe(
    ofType(loadGraphicCards),
    switchMap(() =>
      this.graphicCardsService.getGraphicCards()
      .pipe(
        map(graphicCards => loadGraphicCardsSuccess({ graphicCards })),
        catchError(error => of(loadGraphicCardsFailure({ error })))
    ))
  ));

}
