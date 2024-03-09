import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input()menu:boolean = false
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleBusqueda() {
    this.hacerBusqueda = !this.hacerBusqueda;
  }

  abrirMenu() {
    this.toggleMenu.emit(!this.menu);
  }
}
