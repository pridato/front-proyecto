import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeaderComponent { 
  hacerBusqueda: boolean = false;

  toggleBusqueda() {
    this.hacerBusqueda = !this.hacerBusqueda;
  }

}
