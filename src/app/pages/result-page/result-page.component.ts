import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  topic!: Topic;
  wrongAnswers!: Card[];
  correctAnswers!: Card[];

  constructor(private router: RouterService) {}

  ngOnInit(): void {
    this.topic = this.router.data.topic!;
    this.wrongAnswers = this.router.data.wrongAnswers!;
    this.correctAnswers = this.router.data.correctAnswers!;
  }

  /* ------------------------------ Topics Page ----------------------------- */
  goToTopicsPage(): void {
    this.router.topicsPage();
  }

  /* -------------------------------- Restart ------------------------------- */
  restart(): void {
    this.router.playPage(this.topic, this.correctAnswers.concat(this.wrongAnswers));
  }

  /* ------------------------- Restart Wrong Answer ------------------------- */
  restartWrongAnswers(): void {
    this.router.playPage(this.topic, this.wrongAnswers);
  }
}
