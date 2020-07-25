import { Component, OnInit } from '@angular/core';
import { WebApiService, Tareas } from '../../Servicios/web-api.service';
import {Observable} from 'rxjs/internal/Observable' ;
import { JsonPipe } from '@angular/common';


export class Producto {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
}

@Component({
  selector: 'app-cingreso',
  templateUrl: './cingreso.component.html',
  styleUrls: ['./cingreso.component.css']
})
export class CIngresoComponent implements OnInit {
  public listado: Producto[] = []; 


  constructor(private  webApi : WebApiService) { }
  public productos : Observable<Producto[]>;
  public tareas : Observable<Tareas[]>;
  public listadoTareas: Tareas[] = []; 
  ngOnInit() {
    this.devolverProductos();
    this.devolverTareas();
  }
  public devolverProductos(){
  
  const url = 'http://localhost:48990/api/Products';
  this.productos = this.webApi.getProducts(url);
      this.productos.subscribe((studentsData: Producto[]) => {
        this.listado = studentsData;    });

        
  }

  public devolverTareas(){
  
    const url = 'http://localhost:26951/api/Tareas';
    this.tareas = this.webApi.getTareas(url);
        this.tareas.subscribe((studentsData: Tareas[]) => {
          this.listadoTareas = studentsData;    });
  
       

    } 


  public  devolverTarea( id: string )    {
alert(id);
  }


  
}
