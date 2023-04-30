import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { graphicCardReducer } from '../store/reducers/graphic-card.reducer';
import { GraphicCardsEffects } from '../store/effects/graphic-cards.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ graphicCards: graphicCardReducer }),
    EffectsModule.forRoot([GraphicCardsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  exports: [StoreModule,EffectsModule,StoreDevtoolsModule]
})

export class AppStoreModule {}
