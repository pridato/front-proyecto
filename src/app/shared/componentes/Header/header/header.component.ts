import { Component, EventEmitter, Input, Output, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StorageService } from 'src/app/core/servicios/storage.service';

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
  @Input()pedido:boolean = false
  @Output() togglePedido: EventEmitter<boolean> = new EventEmitter<boolean>();

  cantidad: number = 0;

  constructor(private storage: StorageService){
    effect(()=>{
      console.log('comidasCompradas', this.storage.comidasCompradas())
      this.cantidad = this.storage.comidasCompradas().length
    })
  }

  toggleBusqueda() {
    this.hacerBusqueda = !this.hacerBusqueda;
  }

  abrirMenu() {
    this.toggleMenu.emit(!this.menu);
  }

  abrirPedido() {
    this.togglePedido.emit(!this.pedido);
  }
}
