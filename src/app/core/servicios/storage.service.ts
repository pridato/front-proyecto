import { Injectable, signal } from '@angular/core';
import { ICliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public cliente = signal<ICliente>(
    {
      id: '',
      apellido: '',
      credenciales: {
        email: '',
        password: '',
      },
      nombre: '',
      direccion: '',
      fechaRegistro: new Date(),
      telefono: 0
    }
  )

  guardarCliente(cliente:ICliente) {
    this.cliente.update(() => cliente)
  }

  recuperarCliente():ICliente {
    return this.cliente()
  }
}
