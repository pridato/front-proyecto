import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComida } from 'src/app/core/models/comida';
import { RestService } from 'src/app/core/servicios/RestService.service';
import { StorageService } from 'src/app/core/servicios/storage.service';

@Component({
  selector: 'app-detallecomida',
  standalone: true,
  imports: [],
  templateUrl: './detallecomida.component.html',
  styleUrl: './detallecomida.component.css'
})
export class DetallecomidaComponent {

  private id!: string;
  comida!:IComida

  constructor(private activatedRoute: ActivatedRoute, private rest:RestService) {
    this.activatedRoute.params.subscribe(param => this.id = param['id'])

    this.rest.obtenerComida(this.id).subscribe((comida: IComida) => {
      console.log(comida); 
      this.comida = comida
    });
  }
}
