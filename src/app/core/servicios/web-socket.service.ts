import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { springUrl } from 'src/app/shared/globales/globales';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('wss://localhost:8080/websocket');
  }

  public connect(): Observable<any> {
    return new Observable(observer => {
      this.socket.onmessage = (event) => observer.next(event.data);
      this.socket.onerror = (event) => observer.error(event);
      this.socket.onclose = () => observer.complete();
    });
  }

  public sendMessage(message: string): void {
    this.socket.send(message);
  }

}
