import { Component, effect } from '@angular/core';
import { StorageService } from 'src/app/core/servicios/storage.service';

@Component({
  selector: 'app-comidas',
  standalone: true,
  imports: [],
  templateUrl: './comidas.component.html',
  styleUrl: './comidas.component.css'
})
export class ComidasComponent {

  comidas = this.storage.comidas()
  constructor(private storage:StorageService) {
    effect(() => {
      console.log(this.storage.comidas())
      this.comidas = this.storage.comidas()
    })
  }
}
