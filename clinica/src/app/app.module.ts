/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';
import { PacienteModule } from './paciente/paciente.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './login/registro/registro.component'; // Importa RegistroComponent si es necesario
import { UsuarioListModule} from './usuarios/usuario-list/usuario-list.module';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule,
    PacienteModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    UsuarioListModule,
    UsuarioListComponent,
    MatTableModule,     
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';
import { PacienteModule } from './paciente/paciente.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './login/registro/registro.component';
import { UsuarioListModule } from './usuarios/usuario-list/usuario-list.module';

@NgModule({
  declarations: [AppComponent, RegistroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule,
    PacienteModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    UsuarioListModule, // Solo importa el módulo
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
