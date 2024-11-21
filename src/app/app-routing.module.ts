import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndiceComponent  } from './indice/indice.component';
import { SobreComponent  } from './sobre/sobre.component';
import { ContactoComponent  } from './contacto/contacto.component';
import { ServiciosComponent  } from './servicios/servicios.component';
import { PoliticaComponent  } from './politica/politica.component';

const routes: Routes = [
  
  // { path: '' , redirectTo:'/inicio/', pathMatch: 'full'},
  { path: '' , component: IndiceComponent},
  { path: 'indiceEnlace' , component: IndiceComponent}, 
  { path: 'sobreEnlace' , component: SobreComponent},
  { path: 'contactoEnlace' , component: ContactoComponent},
  { path: 'serviciosEnlace' , component: ServiciosComponent},
  { path: 'politicaEnlace' , component: PoliticaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
