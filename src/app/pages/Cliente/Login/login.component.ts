import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ICredenciales } from 'src/app/core/models/credenciales';
import { RestService } from 'src/app/core/servicios/RestService.service';
import { StorageService } from 'src/app/core/servicios/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credenciales:ICredenciales = {
    email: '',
    password: ''
  }

  error = false

  constructor (private restService:RestService, private storage:StorageService) {}

  async login() {
    try {
      const _cliente = await this.restService.login(this.credenciales)
      if (_cliente.codigo == 200){
        this.storage.guardarCliente(_cliente.datoscliente!)
        console.log('Login correcto')
      } else {
       throw new Error('Error en el login')
      }
    } catch (error) {
      this.error = true
    }
    
  }
}
