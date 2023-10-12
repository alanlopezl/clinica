import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro/registro.component'; // Ajusta la ruta según tu estructura de archivos



const routes: Routes = [
  { path: '', redirectTo:'/login',pathMatch:'full'},
 // { path: 'login', component: AuthComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: PagesComponent,
    children: [
      {path: 'paciente',
      loadChildren: ()=> import('./paciente/paciente.module').then(m => m.PacienteModule)
    }
    ] 
    
  
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
