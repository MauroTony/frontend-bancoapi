import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../../environments/environment';
import { Cadastro } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly PATH: string = 'cliente';

  constructor(private http: HttpClient) { }

  criar(cadastro: Cadastro): Observable<any> {
    return this.http.post(env.ApiUrl + this.PATH, cadastro);
  }
}
