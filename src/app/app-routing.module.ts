import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { GraphicCardDetailComponent } from './components/graphic-card-detail/graphic-card-detail.component';

const routes: Routes = [
  {
    path: 'graphics-cards',
    component: HomeComponent,
    data: { animation: 1 }
  },
  {
    path: 'graphics-cards/:id',
    component: GraphicCardDetailComponent,
    data: { animation: 2 }
  },
  {
    path: '',
    redirectTo: 'graphics-cards',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'graphics-cards'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
