import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private $theme$: ThemeService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.$theme$.setTheme(this.$theme$.defaultColor);
  }
}
