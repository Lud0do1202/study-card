import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent {
  @Input() topic!: Topic;
  @Input() card!: Card;

  constructor(private router: RouterService) {}

  editCard(): void {
    this.router.navigate('/edit-card', { topic: this.topic, card: this.card });
  }
}
