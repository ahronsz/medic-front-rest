import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConfirmacionService } from '../../services/confirmacion.service';
import { CitaService } from '../../services/cita.service';
import { Confirmacion } from '../../entidades/Confirmacion';
import { Cita } from '../../entidades/Cita';


@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  confirmacion: Confirmacion;
  cita: Cita = new Cita();
  mensaje: string;

  constructor(private confirmacionService: ConfirmacionService, private citaService: CitaService) { }

  ngOnInit(): void {
    this.cita = JSON.parse(localStorage.getItem('cita'));
    this.confirmacionService.getDetalle(this.cita).subscribe(
      res => this.confirmacion = res
    );
  }

  registrarCita(): void {
    console.log(this.cita);
    this.citaService.saveCita(this.cita).subscribe(
      res => this.mensaje = res
    );
  }
}
