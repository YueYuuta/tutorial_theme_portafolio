import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeServiceService } from 'src/app/theme/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean = false;
  public estadoTheme: string = 'inicial';

  public itemsMenu = [
    {
      nombre: 'Inicio',
      icono: 'fas fa-home',
      ruta: 'inicio',
    },
    {
      nombre: 'Acerca',
      icono: 'fas fa-user',
      ruta: 'app/portafolio/acerca',
    },
    {
      nombre: 'Habilidades',
      icono: 'fas fa-file-alt',
      ruta: 'app/portafolio/habilidades',
    },
    {
      nombre: 'Servicios',
      icono: 'fas fa-briefcase',
      ruta: 'app/portafolio/servicios',
    },
    {
      nombre: 'Experiencia',
      icono: 'fas fa-image',
      ruta: 'app/portafolio/cualificado',
    },
    {
      nombre: 'Contactame',
      icono: 'fas fa-comments',
      ruta: 'app/portafolio/contactame',
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly themeService: ThemeServiceService
  ) {}

  ngOnInit(): void {}

  cambioEstadoNav(ruta?: string): void {
    this.showMenu = !this.showMenu;
    if (ruta) {
      this.router.navigate([ruta]);
    }
  }

  cambioTheme(): void {
    if (this.estadoTheme === 'inicial') {
      this.estadoTheme = 'dark';
      this.themeService.setDarkTheme();
    } else {
      this.estadoTheme = 'inicial';
      this.themeService.setDefaultTheme();
    }
  }
}
