import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRestMessage } from '../models/message';
import { lastValueFrom } from 'rxjs';
import { ICredenciales } from '../models/credenciales';
import { ICliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class RestService {

  base:string = 'http://localhost:8080'

  constructor(private _httpClient:HttpClient) { }

  insertCliente(cliente:ICliente): Promise<IRestMessage> {
    console.log(this.base+'/usuarios/add')
    return lastValueFrom(
      this._httpClient.post<IRestMessage>(
        this.base+'/usuarios/add',
        cliente,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
      )
    )
  }

  login(credenciales:ICredenciales): Promise<IRestMessage> {
    return lastValueFrom(
      this._httpClient.post<IRestMessage>(
        this.base+'/usuarios/login',
        credenciales,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
      )
    )
  }

}
