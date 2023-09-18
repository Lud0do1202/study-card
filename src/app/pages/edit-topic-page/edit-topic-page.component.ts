import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { CardService } from 'src/app/services/card.service';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-edit-topic-page',
  templateUrl: './edit-topic-page.component.html',
  styleUrls: ['./edit-topic-page.component.scss'],
})
export class EditTopicPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topic!: Topic;
  cards!: Card[];

  newTopicName!: string;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $topic$: TopicService, private $card$: CardService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Get topic
    this.topic = this.router.data as Topic;

    // Set the input renameSlidebar
    this.newTopicName = this.topic.topic;

    // Get the cards
    this.$card$.getAll(this.topic.id).subscribe({
      next: (cards) => (this.cards = cards),
      error: () => this.router.error(),
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
      this.$topic$.delete(this.topic).subscribe({
        next: () => this.router.navigate('/topics'),
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
      next: (card) => this.router.navigate('/edit-card', { topic: this.topic, card }),
      error: () => this.router.error(),
    });
  }
}
