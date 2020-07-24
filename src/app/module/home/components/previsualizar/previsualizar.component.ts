import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-previsualizar',
  templateUrl: './previsualizar.component.html',
  styleUrls: ['./previsualizar.component.css']
})
export class PrevisualizarComponent implements OnInit {

  tareas;
  constructor(private axis:AuthService) {


  }

  ngOnInit(): void {
    const numeros=localStorage.getItem('idreport');
    const numero:{numero:number}={
      numero:Number(numeros)
    }
    this.axis.getReporte(numero).subscribe(value => {
      console.log(value);
      this.tareas=value;
    },error => {
      console.log(error);
    })
  }


  aceptar(){

  }
}
