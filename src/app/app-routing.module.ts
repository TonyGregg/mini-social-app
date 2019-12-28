import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarShowComponent } from './car-show/car-show.component';


const routes: Routes = [{
  path: 'car-list',
  component: CarListComponent
},
{
  path: 'car-show/:id',
  component: CarShowComponent
},
{
  path: '', redirectTo: 'car-list', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
