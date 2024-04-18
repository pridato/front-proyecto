import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  user!: SocialUser;
  loggedIn!: boolean;
  
  constructor (private restService:RestService, 
               private storage:StorageService, 
               private router:Router
              ) {

  }

  async login() {
    try {
      const _res = await this.restService.login(this.credenciales)
      console.log(_res)
      if (_res.codigo == 0){
        // si la respuesta de spring ha sido positiva guardamos tanto el cliente como el jwt
        this.storage.guardarCliente(_res.datosCliente!)
        this.storage.guardarJwt(_res.token!)
        this.router.navigateByUrl('/Restaurante/Comidas')

      } else {
       throw new Error('Error en el login')
      }
    } catch (error) {
      console.log(error)
      this.error = true
    }
    
  }

  loginGoogle() {
  }
}
