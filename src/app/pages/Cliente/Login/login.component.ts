import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ICredenciales } from 'src/app/core/models/credenciales';
import { RestService } from 'src/app/core/servicios/RestService.service';

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

  constructor (private restService:RestService) {}

  login() {
    this.restService.login(this.credenciales).then(
      (data) => {
        console.log(data)
      }
    )
  }
}
