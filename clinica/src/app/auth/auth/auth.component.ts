import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  username: string = '';
  password: string = ''; 

  constructor( private router: Router){}

  login(){
    this.router.navigateByUrl('/dashboard');
  }

}

/*
import { AuthService } from './auth.service'; // Importa tu servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  login() {
    // Llama al método de inicio de sesión del servicio de autenticación
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Maneja la respuesta del servidor (por ejemplo, redirige al usuario a otra página)
      },
      (error) => {
        // Maneja errores (por ejemplo, muestra un mensaje de error)
      }
    );
  }
}
*/