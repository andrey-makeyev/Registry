import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from "./services/person.service";
import { RegistryComponent } from './components/registry/registry.component';
import { FormsModule } from "@angular/forms";
import { ViewDelailsComponent } from './components/view-delails/view-delails.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    ViewDelailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
