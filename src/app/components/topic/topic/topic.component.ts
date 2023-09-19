import { Component, Input } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { CardService } from 'src/app/services/card.service';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() topic!: Topic;
  theme!: Theme;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private $topic$: TopicService, private router: RouterService, private $card$: CardService) {}

  /* ------------------------------ Change Color ------------------------------ */
  onChangeColor(theme: Theme): void {
    // Update local topic object
    this.topic.theme = theme;

    // Update the DB
    this.$topic$.update(this.topic).subscribe({
      error: () => this.router.error(),
    });
  }

  /* -------------------------------- Router -------------------------------- */
  // Play
  play(): void {
    this.$card$.getAll(this.topic.id).subscribe({
      next: (cards) => {
        // Cancel if no cards
        if(cards.length === 0) return;

        // Play page
        this.router.playPage(this.topic, cards);
      },
      error: () => this.router.error(),
    });
  }

  // Edit
  edit(): void {
    this.router.editTopicPage(this.topic);
  }
}
