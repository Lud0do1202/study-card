import { Component } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService) {}

  /* ----------------------------- Landing Page ----------------------------- */
  restartApp(): void {
    this.router.landingPage();
  }
}
