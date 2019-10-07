import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CONCERTSComponent } from './concerts/concerts.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
   {
      path     : 'home',
      component: HomeComponent
   },
   {
      path     : 'concert',
      component: CONCERTSComponent
   },
   {
      path     : 'sports',
      component: SportsComponent
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
