import { Injectable, signal } from '@angular/core';
import { ICliente } from '../models/cliente';
import { IComida } from '../models/comida';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //#region VARIABLES GLOBALES APLICACIÓN
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

  public comidas = signal<IComida[]>([])

  //#endregion

  //#region METODOS DE ALMACENAMIENTO

  guardarCliente(cliente:ICliente) {
    this.cliente.update(() => cliente)
  }

  recuperarCliente():ICliente {
    return this.cliente()
  }

  guardarComidas(comidas:IComida[]) {
    this.comidas.update(() => comidas)
  }

  recuperarComidas():IComida[] {
    return this.comidas()
  }

  //#endregion
}
