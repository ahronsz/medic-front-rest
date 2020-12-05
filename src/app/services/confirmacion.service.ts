import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Confirmacion } from '../entidades/Confirmacion';
import { Observable } from 'rxjs';
import { Cita } from '../entidades/Cita';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacionService {
  URL: string = 'http://localhost:8080/api/cita/detalle';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getDetalle(cita: Cita): Observable<Confirmacion> {
    return this.http.post<Confirmacion>(this.URL, cita, {headers: this.httpHeaders});
  }
}
