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
  selectedDate!: Date;

  onDateChange(event: Date) {
    this.selectedDate = event
    console.log(this.selectedDate)
  }
}
