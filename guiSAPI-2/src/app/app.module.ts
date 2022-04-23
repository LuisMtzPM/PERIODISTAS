import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroPostulanteComponent } from './registro-postulante/registro-postulante.component';
import { AsignacionComiteComponent } from './asignacion-comite/asignacion-comite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroPostulanteComponent,
    AsignacionComiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
