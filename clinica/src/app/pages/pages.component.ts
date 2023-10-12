import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LoginService } from '../login/login.service'; // Ajusta la ruta según la ubicación de tu servicio de autenticación

interface User {
  nombre: string;
  // Otros campos del usuario aquí
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  loggedInUser: User | undefined; // Aquí debes declarar loggedInUser
  
  constructor(
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // Recupera la información del usuario desde el servicio de autenticación
    this.loginService.getLoggedInUser().subscribe(
      (data) => {
        if (data && data.nombre) { // Asegúrate de que user no sea undefined
          // Asigna los datos del usuario a loggedInUser cuando se complete la solicitud
          this.loggedInUser = data;
        } else {
          // Maneja el caso en el que el usuario es undefined
          console.error('El usuario es undefined');
        }
      },
    
    );
  }
  

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((resp: any) => {
      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cd.detectChanges();
  }
}
