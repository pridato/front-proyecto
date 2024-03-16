import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IComida } from 'src/app/core/models/comida';
import { RestService } from 'src/app/core/servicios/RestService.service';
import { StorageService } from 'src/app/core/servicios/storage.service';

@Component({
  selector: 'app-detallecomida',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detallecomida.component.html',
  styleUrl: './detallecomida.component.css'
})
export class DetallecomidaComponent {

  @Input('id') id!:string;
  comida!:IComida
  elementoComida!:{comida:IComida, cantidad:number}

  ngOnInit(){
    console.log('id', this.id)
    this.rest.obtenerComida(this.id).subscribe((comida: IComida) => {
      this.comida = comida
      this.elementoComida = {comida: this.comida, cantidad : 1}
    });
  }
  constructor(private rest:RestService, private storage:StorageService) {
    console.log('id', this.id)
    
  }

  comprar(){
    this.storage.guardarComidasCompradas(this.elementoComida)
    console.log(this.storage.recuperarComidasCompradas())
  }
}
