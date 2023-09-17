import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-edit-card-list',
  templateUrl: './edit-card-list.component.html',
  styleUrls: ['./edit-card-list.component.scss'],
})
export class EditCardListComponent {
  @Input() cards!: Card[];
}
