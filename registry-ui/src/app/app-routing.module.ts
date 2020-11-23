import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistryComponent } from "./components/registry/registry.component";
import { ViewDelailsComponent } from "./components/view-delails/view-delails.component";

const routes: Routes = [
  {
    path: '',
    component: RegistryComponent
  },
  {
    path: 'view/:id',
    component: ViewDelailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
