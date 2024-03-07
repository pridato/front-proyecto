import { ICredenciales } from "./credenciales";

export interface ICliente {
  id?: string;
  nombre: string;
  apellido: string;
  credenciales: ICredenciales
  telefono: string;
  direccion: string;
  fechaRegistro: Date;
}