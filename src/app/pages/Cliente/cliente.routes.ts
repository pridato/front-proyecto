import { Routes } from "@angular/router";
import { RegistroComponent } from "./Registro/registro.component";
import { LoginComponent } from "./Login/login.component";


export const CLIENTE_ROUTES: Routes = [
  {
    path: 'Registro',
    component: RegistroComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  }
]