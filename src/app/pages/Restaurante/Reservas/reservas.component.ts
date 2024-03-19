import { Component } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [ CalendarModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  days:string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  actualDate: string = new Date().toLocaleString('es-ES', { day: 'numeric' });
  actualMonth: string = new Date().toLocaleString('es-ES', { month: 'long' });
  actualYear: string = new Date().toLocaleString('es-ES', { year: 'numeric' });
  monthDays: number = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

  ngOnInit() {
    console.log(this.actualDate);
    console.log(this.actualMonth);
    console.log(this.monthDays);
  }
}
