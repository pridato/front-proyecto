import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ICliente } from 'src/app/core/models/cliente';
import { RestServiceService } from 'src/app/core/servicios/RestService.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports : [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers: [RestServiceService],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  cliente:ICliente ={
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: '',
    direccion: '',
    fechaRegistro: new Date()
  }
  
  constructor( private restService:RestServiceService) {}

  registrarUsuario() {

    console.log(this.cliente)
    this.restService.insertCliente(this.cliente).then(
      (data) => {
        console.log(data)
      }
    )

  }
}
