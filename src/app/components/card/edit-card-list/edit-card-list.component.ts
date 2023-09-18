import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-edit-card-list',
  templateUrl: './edit-card-list.component.html',
  styleUrls: ['./edit-card-list.component.scss'],
})
export class EditCardListComponent {
  @Input() topic!: Topic;
  @Input() cards!: Card[];
}
