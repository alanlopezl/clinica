import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:9000/login'; // Reemplaza con la URL real de tu backend

  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }
  private loggedInUser: User | undefined;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const requestBody = { username, password };
    console.log('Enviando solicitud de inicio de sesión:', requestBody);

    return this.http.post<any>('http://localhost:9000/login', requestBody);
  }

  logout(): void {
    // Implementa la lógica de cierre de sesión aquí
  }

  getLoggedInUser(): Observable<User> {
    // Realiza una solicitud GET para obtener la información del usuario actual
    //return this.http.get<User>('http://localhost:9000/user').pipe(
      return this.http.get<{ nombre: string }>('http://localhost:9000/user'
  
    );
  }
}

// Agrega la palabra clave 'export' para hacer que la interfaz User esté disponible fuera del módulo
export interface User {
  nombre: string;
  // Otros campos del usuario aquí
}
