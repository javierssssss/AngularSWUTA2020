import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable' ;
import { JsonPipe } from '@angular/common';
import { WebApiService, Usuario } from '../../Servicios/web-api.service';

@Component({  
  selector: 'app-cautenticacion',
  templateUrl: './cautenticacion.component.html',
  styleUrls: ['./cautenticacion.component.css']
})
export class CAutenticacionComponent implements OnInit {

  public usuarios : Observable<Usuario[]>;
  public listadoUsuario: Usuario[] = [];
  public username :string = "";

  constructor(private  webApi : WebApiService) { }
 
  ngOnInit(): void {
  }


public login(){
  alert("Validando: " + this.username);
  const url = 'http://localhost:26951/api/Usuarios/'+this.username;
  this.usuarios = this.webApi.getUsuario(url);
      this.usuarios.subscribe((studentsData: Usuario[]) => {
        this.listadoUsuario = studentsData;    });
}
}
