import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/Ejemplo01/personas';

  getPersonas(){
    return this.http.get<Usuario[]>(this.Url);
  }

}
