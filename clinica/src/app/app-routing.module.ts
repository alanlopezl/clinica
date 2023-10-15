import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro/registro.component'; 
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component'; 
//import { UsuariosComponent } from './auth/auth/usuarios.component'; 




const routes: Routes = [
  { path: '', redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  //{ path: 'registro', component: RegistroComponent },
 
  { path: 'dashboard', component: PagesComponent},
  { path: 'dashboard', component: PagesComponent,
  children: [
    { path: 'usuarios', component: UsuarioListComponent }, // Asocia UsuariosComponent a la ruta 'usuarios'
    // Otras rutas hijas
  ]
}
   
  
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
