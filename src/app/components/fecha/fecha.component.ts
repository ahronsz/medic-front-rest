import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Dia } from 'src/app/entidades/Dia';
import { Cita } from 'src/app/entidades/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { HoraRequest } from '../../entidades/HoraRequest';

import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {

  dia: Dia = new Dia();
  cita: Cita = new Cita();
  horaRequest: HoraRequest = new HoraRequest();


  isSelect: boolean = true;
  datepickerModel: Date;
  fechaConvertida: string;
  minDate: Date;
  maxDate: Date;
  locale = 'es';
  values = '';

  constructor(private router: Router, private citaService: CitaService, private localeService: BsLocaleService) {
    this.localeService.use(this.locale);
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 0);
    this.maxDate.setDate(this.maxDate.getDate() + 365);
  }

  ngOnInit(): void {
  }

  setHora(hora): void{
    this.cita.hora = hora;
    this.cita.fecha = this.fechaConvertida;
    localStorage.setItem('cita', JSON.stringify(this.cita));
    console.log(this.cita);
  }

  convertDate(fecha: Date): void {
    while ( this.fechaConvertida !== moment(this.datepickerModel).format('L')) {
      this.cita = JSON.parse(localStorage.getItem('cita'));
      this.fechaConvertida = moment(fecha).format('L');
      this.horaRequest.cod_esp = this.cita.cod_esp;
      this.horaRequest.cod_med = this.cita.cod_med;
      this.horaRequest.fecha = this.fechaConvertida;
      console.log(this.horaRequest);
      this.citaService.getHoras(this.horaRequest).subscribe(
        res => this.dia = res
      );
    }
  }

  onFocus(e) {
    this.isSelect = false;
    console.log('estoy fuqueado');
  }

  onBlur(e) {
  }
}
