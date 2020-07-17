import { Component, OnInit } from '@angular/core';
import '../../../../../assets/js/searchListadoActividades';
import {Router} from '@angular/router';
@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   cerrarSession() {
    localStorage.removeItem("token");
     this.router.navigate(['/login']);
  }

   crearInforme() {
     //this.router.navigate(['/informes/registrar'])
  }

  inicio() {
    this.router.navigate(['/inicio'])
  }
  estado(){

    if(String(localStorage.getItem('rol'))=="1"){
      return true;
    }else{return false;}
  }
}
