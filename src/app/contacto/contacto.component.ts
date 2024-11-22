import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {
  VariableFormulario: string = "Formulario de contacto";
  Email: string = "Email";
  Nombre: string = "Nombre";
  Peticion: string = "Peticion";
  preguntaPublicidad: string ="¿Desea recibir publicidad?";
  enviar: string ="Enviar";
  localizacion: string ="Localizacion";
  miranos: string ="Buscanos en el mapa";
  sitioLocalizacion: string ="Estamos en Mairena, junto a Ciudad Expo";
}
