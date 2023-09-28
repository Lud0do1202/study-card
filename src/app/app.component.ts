import { Component, OnInit } from '@angular/core';
import { AdMob } from '@capacitor-community/admob';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.initAdsMob();
  }

  /* ------------------------------ Init AdMob ------------------------------ */
  async initAdsMob(): Promise<void> {
    AdMob.initialize({ requestTrackingAuthorization: true });
  }
}
