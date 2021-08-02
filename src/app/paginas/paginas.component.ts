import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme/theme-service.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
})
export class PaginasComponent implements OnInit {
  constructor(private readonly themeService: ThemeServiceService) {}

  ngOnInit(): void {}

  colorPurple(): void {
    this.themeService.setPurple();
  }

  colorGreen(): void {
    this.themeService.setGreen();
  }

  colorPink(): void {
    this.themeService.setPink();
  }
}
