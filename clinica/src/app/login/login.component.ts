import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service'; // Ajusta la ruta según la ubicación del archivo 'login.service.ts'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = ''; 
  errorMessage: string = '';

  constructor(
    private router: Router, 
    private loginService: LoginService,
    private http: HttpClient
    ) {}

    login() {
      const requestBody = { username: this.username, password: this.password };
    
      this.http.post<any>('http://localhost:9000/login', requestBody).subscribe(
        (response) => {
          // Verifica si la respuesta del servidor es exitosa
          if (response.message === 'Inicio de sesión exitoso') {
            // Almacena la información del usuario en el servicio de autenticación
            this.loginService.setLoggedInUser(response.user);
            // Redirige al usuario al dashboard
            this.router.navigateByUrl('/dashboard');
          } else {
            // Maneja otros casos si es necesario
            this.errorMessage = 'Usuario o contraseña incorrectos';
          }
        },
        (error) => {        

          console.error('Error en la solicitud:', error);
  if (error.status === 401) {
    this.errorMessage = 'Usuario o contraseña incorrectos';
  } else {
    this.errorMessage = 'Error en la solicitud: ' + error.message;
  }
        }
      );
    } 
    
      
}
