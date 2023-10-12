import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  usuario: string = '';
  nombre: string = '';
  contrasena: string = '';

  onSubmit() {
    // Aquí puedes enviar los datos del formulario al servidor para el registro
    console.log('Datos del formulario enviados:', this.usuario, this.nombre, this.contrasena);
    // Agrega la lógica para enviar los datos al servidor y manejar la respuesta
  }
}
