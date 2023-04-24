import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicCardListContainerComponent } from './components/graphic-card-list-container/graphic-card-list-container.component';
import { GraphicCardDetailComponent } from './components/graphic-card-detail/graphic-card-detail.component';

const routes: Routes = [
  { path: 'graphics-cards', component: GraphicCardListContainerComponent },
  { path: 'graphics-cards/:id', component: GraphicCardDetailComponent },
  { path: '', redirectTo: 'graphics-cards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
