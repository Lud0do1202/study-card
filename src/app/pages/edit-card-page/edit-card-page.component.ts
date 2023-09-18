import { Component, OnInit } from '@angular/core';
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
  constructor(private router: RouterService, private $card$: CardService) {}

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
    this.$card$.update(this.card).subscribe({
      next: () => this.router.editTopicPage(this.topic),
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
      this.$card$.delete(this.card.id).subscribe({
        next: () => this.router.editTopicPage(this.topic),
        error: () => this.router.error(),
      });
    }
  }
}
