import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRestMessage } from '../models/message';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {

  base:string = 'http://localhost:8080'

  constructor(private _httpClient:HttpClient) { }

  insertCliente(cliente:any): Promise<IRestMessage> {
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

}
