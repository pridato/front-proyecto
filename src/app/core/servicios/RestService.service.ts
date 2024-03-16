import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, afterNextRender } from '@angular/core';
import { IRestMessage } from '../models/message';
import { Observable, lastValueFrom } from 'rxjs';
import { ICredenciales } from '../models/credenciales';
import { ICliente } from '../models/cliente';
import { IComida } from '../models/comida';

@Injectable({
  providedIn: 'root',
})
export class RestService {

  base:string = 'http://localhost:8080'

  constructor(private _httpClient:HttpClient) { 
    afterNextRender(() => {
      localStorage.setItem('cliente', 'clienteprueba')
    })
  }

  //#region  ZONA CLIENTE

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
    // by get method
    return lastValueFrom(
      this._httpClient.get<IRestMessage>(
        this.base+`/usuarios/login?email=${credenciales.email}&password=${credenciales.password}`
      )
    )
  }

  //#endregion

  //#region ZONA RESTAURANTE

  public obtenerComidas(): Observable<IComida[]> {
    return (
      this._httpClient.get<IComida[]>(
        this.base+'/restaurantes/comidas'
      )
    )
  }

  public obtenerComida(id: string): Observable<IComida> {
    return this._httpClient.get<IComida>(this.base + `/restaurantes/comidas/${id}`);
  }
  

  //#endregion


}
