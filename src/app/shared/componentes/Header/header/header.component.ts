import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styles: `
    nav {
      background-color: #2f695C;
    }
  `,
})
export class HeaderComponent { 
  hacerBusqueda: boolean = false;
  @Input()menu:boolean = false
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleBusqueda() {
    this.hacerBusqueda = !this.hacerBusqueda;
  }

  abrirMenu() {
    this.toggleMenu.emit(!this.menu);
  }
}
