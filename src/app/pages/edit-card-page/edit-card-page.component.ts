import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { CardService } from 'src/app/services/card.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-edit-card-page',
  templateUrl: './edit-card-page.component.html',
  styleUrls: ['./edit-card-page.component.scss'],
})
export class EditCardPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topic!: Topic;
  card!: Card;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $card$: CardService, private loader: NgxSpinnerService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topic = this.router.data.topic!;
    this.card = this.router.data.card!;
  }

  /* ---------------------------- Back Edit Topic --------------------------- */
  back(): void {
    this.router.editTopicPage(this.topic);
  }

  /* ---------------------------- Confirm Changes --------------------------- */
  confirm(): void {
    // Loader
    this.loader.show();

    // Update card
    this.$card$.update(this.card).subscribe({
      next: () => {
        // Loader
        this.loader.hide();

        // Route
        this.router.editTopicPage(this.topic);
      },
      error: () => this.router.error(),
    });
  }

  /* -------------------------------- Delete -------------------------------- */
  onCloseDeleteSlidebar(state: 'cancel' | 'confirm'): void {
    // NO
    if (state === 'cancel') {
      return;
    }

    // YES
    else {
      // Loader
      this.loader.show();

      // Delete
      this.$card$.delete(this.card.id).subscribe({
        next: () => {
          // Loader
          this.loader.hide();

          // Route
          this.router.editTopicPage(this.topic);
        },
        error: () => this.router.error(),
      });
    }
  }
}
