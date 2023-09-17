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

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $topic$: TopicService, private $card$: CardService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topic = (this.router.data as Topic) ?? this.$topic$.defaultTopic;
    this.$card$.getAll(this.topic.id).subscribe({
      next: (cards) => (this.cards = cards),
      error: () => this.router.error(),
    });
  }
}
