import { Component, OnInit, TemplateRef } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../entidades/Medico';
import { Cita } from '../../entidades/Cita';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  medicos: Medico[];
  cita: Cita = new Cita();

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.cita = JSON.parse(localStorage.getItem('cita'));
    this.medicoService.getMedicos(this.cita.cod_esp).subscribe(
      res => this.medicos = res
    );
  }

  setMedico(medico): void{
    this.cita.cod_med = medico;
    localStorage.setItem('cita', JSON.stringify(this.cita));
    console.log(this.cita);
  }

}
