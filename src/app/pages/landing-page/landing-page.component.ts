import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { LogoShrinkingComponent } from 'src/app/components/page/logo-shrinking/logo-shrinking.component';
import { RouterService } from 'src/app/services/router.service';
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
  constructor(private $user$: UserService, private router: RouterService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Auth
    this.$user$.auth().then((authObservable: Observable<void>) => {
      authObservable.subscribe({
        next: () => this.logoShrinkingComponent.startAnimation(), // Start animation
        error: () => this.router.error(), // ERROR
      });
    });
  }

  /* ---------------------------- Go To Home Page --------------------------- */
  goToTopicsPage(): void {
    this.router.topicsPage(false);
  }
}
