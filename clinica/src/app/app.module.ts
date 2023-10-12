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
    RouterModule
   
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
