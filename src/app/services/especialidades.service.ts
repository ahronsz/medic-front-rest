import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialidad} from '../entidades/Especialidad';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EspecialidadesService {
  URL: string = 'http://localhost:8080/api/especialidad/listar';

  constructor(private http: HttpClient) { }

  getEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(this.URL);
  }
}
