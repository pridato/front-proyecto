import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/componentes/Footer/Footer.component';
import { HeaderComponent } from './shared/componentes/Header/header/header.component';
import { IconComponent } from './shared/componentes/themeIcon/icon.component';
import { RestService } from './core/servicios/RestService.service';
import { IComida } from './core/models/comida';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, IconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';

  constructor(private rest:RestService) {
    const $_comidas = this.rest.obtenerComidas()
    $_comidas.subscribe(
      (response:IComida) => console.log(response)
    ),
    (error: any) => console.log(error)
  }
}
