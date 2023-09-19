import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RemoveAccentsPipe } from 'src/app/pipes/remove-accents.pipe';
import { CardService } from 'src/app/services/card.service';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-edit-topic-page',
  templateUrl: './edit-topic-page.component.html',
  styleUrls: ['./edit-topic-page.component.scss'],
  providers: [RemoveAccentsPipe],
})
export class EditTopicPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topic!: Topic;
  cards!: Card[];
  cardsFiltered!: Card[];

  newTopicName!: string;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(
    private router: RouterService,
    private $topic$: TopicService,
    private $card$: CardService,
    private removeAccent: RemoveAccentsPipe,
    private loader: NgxSpinnerService
  ) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Loader
    this.loader.show();

    // Get topic
    this.topic = this.router.data.topic!;

    // Set the input renameSlidebar
    this.newTopicName = this.topic.topic;

    // Get the cards
    this.$card$.getAll(this.topic.id).subscribe({
      next: (cards) => {
        // Loader
        this.loader.hide();

        // Cards
        this.cards = cards;
        this.cardsFiltered = cards;
      },
      error: () => this.router.error(),
    });
  }

  /* ----------------------------- Filter Cards ---------------------------- */
  filterCards(search: string): void {
    // Set the search as pure (no accent, lowercase)
    const pureSearch = this.removeAccent.transform(search).toLocaleLowerCase();

    // Filter the items
    this.cardsFiltered = this.cards.filter((card: Card) => {
      // Set the prop as pure
      const pureQuestion = this.removeAccent.transform(card.question).toLocaleLowerCase();
      const pureAnswer = this.removeAccent.transform(card.answer).toLocaleLowerCase();

      // Filter it
      return pureQuestion.includes(pureSearch) || pureAnswer.includes(pureSearch);
    });
  }

  /* -------------------------------- Rename -------------------------------- */
  onCloseRenameSlidebar(state: 'cancel' | 'confirm'): void {
    // Cancel
    if (state === 'cancel') {
      this.newTopicName = this.topic.topic;
      return;
    }

    // Confirm
    else {
      // Update local topic
      this.topic.topic = this.newTopicName;

      // Update DB
      this.$topic$.update(this.topic).subscribe({
        error: () => this.router.error(),
      });
    }
  }

  /* -------------------------------- Delete -------------------------------- */
  onCloseDeleteSlidebar(state: 'cancel' | 'confirm'): void {
    // NO
    if (state === 'cancel') {
      return;
    }

    // YES
    else {
      // Show
      this.loader.show();

      // Delete
      this.$topic$.delete(this.topic.id).subscribe({
        next: () => {
          this.loader.hide();
          this.router.topicsPage();
        },
        error: () => this.router.error(),
      });
    }
  }

  /* ------------------------------- New Card ------------------------------- */
  newCard(): void {
    const newCard: Card = {
      id: 0,
      id_topic: this.topic.id,
      question: 'Question ?',
      answer: 'Answer',
    };

    this.$card$.insert(newCard).subscribe({
      next: (card) => this.router.editCardPage(this.topic, card),
      error: () => this.router.error(),
    });
  }
}
