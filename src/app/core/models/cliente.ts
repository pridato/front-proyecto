export interface ICliente {
  id?: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  direccion: string;
  fechaRegistro: Date;
}