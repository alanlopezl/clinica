import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteDetailsComponent } from './paciente-details/paciente-details.component';

const routes: Routes = [
  { path: 'pacientes', component: PacienteListComponent},
  { path: 'pacienteCreate', component: PacienteCreateComponent},
  { path: 'pacienteEdit/id', component: PacienteEditComponent},
  { path: 'pacienteDetails/id', component: PacienteDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
