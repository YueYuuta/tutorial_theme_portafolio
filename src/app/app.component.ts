import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from './theme/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor(private themeService: ThemeServiceService) {}
  ngOnInit() {
    this.defaultColor();
    this.defaultTheme();
  }

  defaultTheme() {
    this.themeService.setDefaultTheme();
  }

  defaultColor(): void {
    this.themeService.setPurple();
  }
}
