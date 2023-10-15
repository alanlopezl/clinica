
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


  export interface Usuario {
    Id_Usuario: number;
    Usuario: string;
    Nombre_Usuario: string;
    Contraseña: string;
    Estado: number;
    Id_Rol: number;
    Fecha_Ultima_Conexion: string;
  }


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioListComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['Id_usuario', 'Usuario', 'Nombre_Usuario', 'Contraseña','Estado','Id_Rol','Fecha_Ultima_Conexion'];
 
   // dataSource: MatTableDataSource<any>; // Declara la propiedad dataSource con el tipo correcto
  
    constructor(private usuarioService: UsuarioService) {
      this.dataSource = new MatTableDataSource<any>();
    }
  
    ngOnInit(): void {
      this.usuarioService.getUsuarios().subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        const usuarios = data.users;
        console.log('Datos de usuarios:', data);

        this.dataSource = new MatTableDataSource(usuarios);
      });
    }
    
  }

