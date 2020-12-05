import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../../services/especialidades.service';
import { Especialidad } from '../../entidades/Especialidad';
import { Cita } from '../../entidades/Cita';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  isSelect: boolean = true;
  especialidades: Especialidad[];
  cita: Cita = new Cita();

  constructor(private especialidadService: EspecialidadesService) { }

  ngOnInit(): void {
    this.especialidadService.getEspecialidades().subscribe(
        res => this.especialidades = res
    );
  }

  getEspecialidad(codEspecialidad): void {
    this.cita.cod_esp = codEspecialidad;
    this.cita.cod_pac = 'pac_1';
    localStorage.setItem('cita', JSON.stringify(this.cita));
    console.log(codEspecialidad);
  }

  onFocus(e) {
    this.isSelect = false;
    console.log('estoy fuqueado');
  }

  onBlur(e) {
  }

}
