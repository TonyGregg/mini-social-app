import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { OktaAuthGuard } from '@okta/okta-angular';
import { CarShowComponent } from './car-show/car-show.component';


const routes: Routes = [
  {
    path: 'car-list',
    component: CarListComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'car-show/:id',
    component: CarShowComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: '', redirectTo: 'car-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
