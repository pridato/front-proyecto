import { Component, effect } from '@angular/core';
import { StorageService } from 'src/app/core/servicios/storage.service';
import { TiposcomidaComponent } from './tiposComidas/tiposcomida.component';
import { IComida } from 'src/app/core/models/comida';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comidas',
  standalone: true,
  imports: [TiposcomidaComponent, RouterLink],
  templateUrl: './comidas.component.html',
  styleUrl: './comidas.component.css'
})
export class ComidasComponent {
  

  comidas:IComida[] = []
  constructor(private toastr:ToastrService, private storage:StorageService) {
    effect(() => {
      this.comidas = this.storage.comidas().filter(comida => !comida.tipo.match(/^b-/));
    })
  }

  comprar(comida:IComida){
    this.toastr.success(`Su ${comida.nombre} ya está en proceso`, `Item Agregado `, {
      timeOut: 1500,
    })
  }
}
