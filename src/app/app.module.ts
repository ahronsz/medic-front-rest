import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';

// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { ModalModule } from 'ngx-bootstrap/modal';
defineLocale('es', deLocale);


import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FechaComponent } from './components/fecha/fecha.component';
import { RouterModule, Routes } from '@angular/router';
import { TipoComponent } from './components/tipo/tipo.component';
import { MedicoComponent } from './components/medico/medico.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path : '', component: EspecialidadComponent },
  { path : 'tipo', component: TipoComponent },
  { path : 'medico', component: MedicoComponent },
  { path : 'paso2', component: FechaComponent },
  { path : 'confirmacion', component: ConfirmacionComponent },
  { path : 'modal', component: ModalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadComponent,
    NavegacionComponent,
    FechaComponent,
    TipoComponent,
    MedicoComponent,
    ConfirmacionComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
