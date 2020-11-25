import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from "./components/administration/administration.component";
import { ViewDelailsComponent } from "./components/view-delails/view-delails.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'administration/viewDetails/:id',
    component: ViewDelailsComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
