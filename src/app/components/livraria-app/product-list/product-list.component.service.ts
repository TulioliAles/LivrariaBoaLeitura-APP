import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livro } from './model/Livro';

@Injectable({
  providedIn: 'root'
})
export class ProductListComponentService {

  private url = 'https://localhost:44382/api/livraria';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getLivro(){
    return this.http.get(this.url);
  }
}
