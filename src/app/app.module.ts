import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    PiepaginaComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
