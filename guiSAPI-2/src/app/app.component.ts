import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guiSAPI';

  constructor(private router:Router){}

  Validar(){
    this.router.navigate(["asignacion-comite"]);
  }

  Registrar(){
    this.router.navigate(["registro-postulante"]);
  }


}
