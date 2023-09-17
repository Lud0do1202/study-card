import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent {
  @Input() card!: Card;
}
