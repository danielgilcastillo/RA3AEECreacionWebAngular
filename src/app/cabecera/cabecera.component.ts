import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.sass']
})
export class CabeceraComponent {
  title: string = 'mi-web-angular';
  titulocabecera: string = 'LA WEB DE ANGULAR DE DANIEL GIL'; 
}
