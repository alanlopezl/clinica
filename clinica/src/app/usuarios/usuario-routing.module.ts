import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';



const routes: Routes = [
     {path: 'usuario', component: UsuarioListComponent},
     
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
