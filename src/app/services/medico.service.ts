import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../entidades/Medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  URL: string = 'http://localhost:8080/api/medico/especialidad/';

  constructor(private http: HttpClient) { }

  getMedicos(id: string): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.URL + id);
  }
}
