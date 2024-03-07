import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeaderComponent { }
