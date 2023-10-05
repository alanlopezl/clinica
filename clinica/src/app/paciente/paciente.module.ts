import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteDetailsComponent } from './paciente-details/paciente-details.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteRoutingModule } from './paciente-routing.module';



@NgModule({
  declarations: [
    PacienteCreateComponent,
    PacienteListComponent,
    PacienteDetailsComponent,
    PacienteEditComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
