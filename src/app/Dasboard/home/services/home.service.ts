import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly PATH: string = 'verifica_cliente';

  constructor(private http: HttpClient) { }

  home(): Observable<any> {

    return this.http.post(env.ApiUrl + this.PATH, { conta: localStorage['conta'] });
  }
}

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  private readonly PATH: string = 'extrato';

  constructor(private http: HttpClient) { }

  extrato(): Observable<any> {
    return this.http.post(env.ApiUrl + this.PATH, { conta: localStorage['conta'] });
  }
}