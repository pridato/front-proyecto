import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/componentes/Footer/Footer.component';
import { HeaderComponent } from './shared/componentes/Header/header/header.component';
import { IconComponent } from './shared/componentes/themeIcon/icon.component';
import { RestService } from './core/servicios/RestService.service';
import { IComida } from './core/models/comida';
import { StorageService } from './core/servicios/storage.service';
import { ComidasComponent } from './pages/Restaurante/Comidas/comidas.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, IconComponent, ComidasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';

  constructor(private rest:RestService, private storage:StorageService) {
    const $_comidas = this.rest.obtenerComidas()
    $_comidas.subscribe(
      (comidas:IComida[]) => this.storage.guardarComidas(comidas),
    ),
    (error: any) => console.log(error)
  }
}
