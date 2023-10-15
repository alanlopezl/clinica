import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list.component';
import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule desde Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [CommonModule, MatTableModule,MatSidenavModule],
  exports: [UsuarioListComponent, MatTableModule,MatSidenavModule]
})
export class UsuarioListModule {
  // Contenido del módulo
}
