import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistryComponent} from "./components/registry/registry.component";

const routes: Routes = [
  {
    path: 'registry',
    component: RegistryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
