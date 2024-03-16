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
      telefono: 0,
      id_cocinero: ''
    }
  )

  public comidas = signal<IComida[]>([])
  public comidasCompradas = signal<{comida:IComida, cantidad:number}[]>([])
  //#endregion

  //#region METODOS DE ALMACENAMIENTO

  guardarComidasCompradas(comida:{comida:IComida, cantidad:number}) {
    // 1º comprobar si ese elemento ya está en comidas, si es así aumentar cantidad
    let _index = this.comidasCompradas().findIndex((elemento) => elemento.comida.id === comida.comida.id)
    if(_index !== -1) {
      this.comidasCompradas.update((comidas) => {
        comidas[_index].cantidad += 1
        return comidas
      })
    }else {
      this.comidasCompradas.update((comidas) => [...comidas, comida])
    }
  }

  recuperarComidasCompradas():{comida:IComida, cantidad:number}[] {
    return this.comidasCompradas()
  }

  guardarCliente(cliente:ICliente) {
    this.cliente.update(() => cliente)
  }

  recuperarCliente():ICliente {
    return this.cliente()
  }

  guardarComidas(comida:IComida[]) {
    this.comidas.update(() => comida)
  }

  recuperarComidas():IComida[] {
    return this.comidas()
  }

  //#endregion
}
