import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Atleta } from './entities/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  urlGetList = 'http://localhost:8080/atleta/listar';
  urlPost = 'http://localhost:8080/atleta/incluir';

  constructor(private http: HttpClient) { }

  listarAtleta()
  {
    return this.http.get<Atleta[]>(this.urlGetList);
  }

  inserirAtleta(novoAtleta: any)
  {
    return this.http.post(this.urlPost, novoAtleta);
  }
}
