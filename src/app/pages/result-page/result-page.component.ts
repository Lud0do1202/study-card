import { Component, OnInit } from '@angular/core';
import { AdOptions, AdMob, InterstitialAdPluginEvents } from '@capacitor-community/admob';
import { NgxSpinnerService } from 'ngx-spinner';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topic!: Topic;
  wrongAnswers!: Card[];
  correctAnswers!: Card[];
  showResult: boolean = false;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private loader: NgxSpinnerService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topic = this.router.data.topic!;
    this.wrongAnswers = this.router.data.wrongAnswers!;
    this.correctAnswers = this.router.data.correctAnswers!;

    // Show loader
    this.loader.show();

    // Ads showed
    AdMob.addListener(InterstitialAdPluginEvents.Showed, () => this.loader.hide());

    // Dismissed
    AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => (this.showResult = true));

    // Show ads
    this.interstitial();
  }

  /* --------------------------- Ads Interstitial --------------------------- */
  async interstitial(): Promise<void> {
    const options: AdOptions = { adId: 'ca-app-pub-9685712148717806/4216818934' };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }

  /* ------------------------------ Topics Page ----------------------------- */
  goToTopicsPage(): void {
    this.router.topicsPage(true);
  }

  /* -------------------------------- Restart ------------------------------- */
  restart(): void {
    this.router.playPage(this.topic, this.correctAnswers.concat(this.wrongAnswers));
  }

  /* ------------------------- Restart Wrong Answer ------------------------- */
  restartWrongAnswers(): void {
    this.router.playPage(this.topic, this.wrongAnswers);
  }
}
