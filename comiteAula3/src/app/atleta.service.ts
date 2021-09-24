import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Atleta } from './entity/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  urlGetList = 'http://localhost:8080/atleta/listar';

  constructor(private http: HttpClient) { }

  listarAtleta()
  {
    return this.http.get<Atleta[]>(this.urlGetList);
  }
}
