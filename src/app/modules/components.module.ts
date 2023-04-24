import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { GraphicCardDetailComponent } from '../components/graphic-card-detail/graphic-card-detail.component';
import { GraphicCardListContainerComponent } from '../components/graphic-card-list-container/graphic-card-list-container.component';
import { ButtonComponent } from '../components/button/button.component';
import { AlertComponent } from '../components/alert/alert.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    GraphicCardDetailComponent,
    GraphicCardListContainerComponent,
    ButtonComponent,
    AlertComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule
  ],
  exports: [
    ToolbarComponent,
    AlertComponent,
  ]
})

export class ComponentslModule { }
