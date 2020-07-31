import {Component, OnInit} from '@angular/core';
import '../../../../../assets/js/registrainforme';
import {FormArray, FormBuilder} from '@angular/forms';
import * as moment from'moment';
import * as dateFormat from 'dateformat';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {ReportModel} from '../../../../shared/models/reportModel';
import {ActividadModel} from '../../../../shared/models/actividadModel';
import {ReportService} from '../../../../core/services/report/report.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-crear-informe',
  templateUrl: './crear-informe.component.html',
  styleUrls: ['./crear-informe.component.css']
})

export class CrearInformeComponent implements OnInit {
  nombre;
  texto;

  tiempo;
  constructor(private formBuilder: FormBuilder,private axis:ReportService,private router:Router) {
  }

  form = this.formBuilder.group({
    rubro:['Investigación'],
    tareas: this.formBuilder.array([]),
    adds:['']

  });
  inicio;
  fin;

  get tareas() {
    return this.form.get('tareas') as FormArray;
  }

  ngOnInit(): void {
    this.nombre=localStorage.getItem("datos");
    const startOfWeek = moment().startOf('week').toDate();
    startOfWeek.setDate(startOfWeek.getDate()+1);
    const endOfWeek = moment().endOf('week').toDate();
    endOfWeek.setDate(endOfWeek.getDate()+1);

    const fecha=dateFormat(startOfWeek,"yyyy-mm-dd");
    const fecha2=dateFormat(endOfWeek,"yyyy-mm-dd");
    this.tiempo=String(fecha);
    this.inicio=fecha;
    this.fin=fecha2;

    if(Number(localStorage.getItem('rol'))==3){
      this.texto='Enviar  a RRHH';
    }else{
      this.texto='Enviar informe a Jefatura'
    }

  }

  agregarTarea() {
    const tarea = this.formBuilder.group({
      actividad: '',
      descripcion: '',
      horas: ''
    });

    this.tareas.push(tarea);
    console.log(this.form.value.tareas);
  }
  enviar(){

    const datos:ActividadModel[]=this.form.value.tareas;

    const reporte:ReportModel={
        actividad:datos,
        rubro:this.form.controls.rubro.value,
        add:this.form.controls.adds.value

    };
    this.axis.enviarReporte(reporte).subscribe(value => {
      alert(value.message);
      this.router.navigate(['/inicio']);
    },error => {
      console.log(error);
    })

  }
  enviar2(){

    const datos:ActividadModel[]=this.form.value.tareas;

    const reporte:ReportModel={
      actividad:datos,
      rubro:this.form.controls.rubro.value,
      add:this.form.controls.adds.value

    };
    this.axis.enviarReporte(reporte).subscribe(value => {
      alert('informe archivado');
      this.router.navigate(['/inicio']);
    },error => {
      console.log(error);
    })

  }

  eliminarTarea(i: number) {
    this.tareas.removeAt(i);
  }



}
