import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionComiteComponent } from './asignacion-comite/asignacion-comite.component';
import { RegistroPostulanteComponent } from './registro-postulante/registro-postulante.component';

const routes: Routes = [
 {path:'registro-postulante', component:RegistroPostulanteComponent},
 {path:'asignacion-comite', component:AsignacionComiteComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
