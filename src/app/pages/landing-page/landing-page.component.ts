import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogoShrinkingComponent } from 'src/app/components/logo-shrinking/logo-shrinking.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('logoShrinking') logoShrinkingComponent!: LogoShrinkingComponent;
  showGoogleButton: boolean = true;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private $user$: UserService, private router: Router) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Auth
    this.$user$.auth().then((authObservable: Observable<void>) => {
      authObservable.subscribe({
        next: () => this.logoShrinkingComponent.startAnimation(), // Start animation
        error: (e) => {
          console.log(e);
          this.router.navigateByUrl('/error');
        }, // ERROR
      });
    });
  }

  /* ---------------------------- Go To Home Page --------------------------- */
  goToHomePage(): void {
    this.router.navigateByUrl('/home');
  }
}
