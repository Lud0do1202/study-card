import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-edit-card-page',
  templateUrl: './edit-card-page.component.html',
  styleUrls: ['./edit-card-page.component.scss'],
})
export class EditCardPageComponent implements OnInit {
  topic!: Topic;
  card!: Card;

  constructor(private router: RouterService) {}

  ngOnInit(): void {
    this.topic = this.router.data.topic;
    this.card = this.router.data.card;
  }

  back(): void {
    this.router.navigate('/edit-topic', this.topic);
  }

  confirm(): void {
    console.log('CONFIRM CARD CHANGES');
  }
}
