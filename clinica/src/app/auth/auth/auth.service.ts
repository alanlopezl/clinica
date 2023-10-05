import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/login'; // Reemplaza con la URL real de tu backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const requestBody = { username, password };
    return this.http.post(`${this.apiUrl}/login`, requestBody);
  }

  logout(): void {
    // Implementa la lógica de cierre de sesión aquí
  }
}
