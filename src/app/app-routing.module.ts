import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegodadosComponent} from './juegodados/juegodados.component' //<--- Agregado
import { AcercadeComponent } from './acercade/acercade.component' //<--- Agregado

const routes: Routes = [
  {
    path: 'juegodados', //<--- Agregado
    component: JuegodadosComponent //<--- Agregado
  },
  {
    path:'acercade', //<--- Agregado
    component: AcercadeComponent //<--- Agregado
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }