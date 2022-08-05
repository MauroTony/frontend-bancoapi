import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { Conta } from '../models';

@Injectable()
export class LoginService {

  private readonly PATH: string = 'verifica_cliente';

  constructor(private http: HttpClient) { }

  logar(conta: Conta): Observable<any> {
    return this.http.post(env.ApiUrl + this.PATH, conta);
  }

}