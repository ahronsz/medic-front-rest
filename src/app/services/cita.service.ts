import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cita } from '../entidades/Cita';
import { Dia } from '../entidades/Dia';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HoraRequest } from '../entidades/HoraRequest';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  URL: string = 'http://localhost:8080/api/cita/disponible';
  URL_COLA: string = 'http://localhost:8081/queue/cita';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getHoras(horaRequest: HoraRequest): Observable<Dia> {
    return this.http.post<Dia>(this.URL, horaRequest, {headers: this.httpHeaders});
  }

  saveCita(cita: Cita): Observable<string> {
    return this.http.post<string>(this.URL_COLA, cita, {headers: this.httpHeaders});
  }
}