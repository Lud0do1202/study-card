import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  palette!: string[];
  color!: string;
  id!: string | null;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private $theme$: ThemeService, private $user$: UserService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.palette = this.$theme$.palette;
    this.color = this.$theme$.defaultColor;

    this.id = this.$user$.getUserID();
  }

  /* ----------------------------- Update Theme ----------------------------- */
  updateTheme() {
    this.$theme$.setTheme(this.color);
  }
}
