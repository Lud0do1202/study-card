import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss'],
})
export class PlayPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topic!: Topic;
  cards!: Card[];
  cardIndex: number = 0;
  answerShowed: boolean = false;
  wrongAnswers: Card[] = [];

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topic = this.router.data.topic!;
    this.cards = arrayShuffle(this.router.data.cards!);
    console.log(this.cards);
  }

  /* ------------------------------ Show Answer ----------------------------- */
  showAnswer(): void {
    this.answerShowed = true;
  }

  /* ----------------------------- Next Question ---------------------------- */
  nextQuestion(correctAnswer: boolean): void {
    // Increment Correct/wrong answer
    if (correctAnswer === false) this.wrongAnswers.push(this.cards[this.cardIndex]);

    // No more cards
    if (this.cardIndex + 1 === this.cards.length)
      this.router.resultPage(this.topic, this.wrongAnswers, this.cards.length);

    // Next card
    this.cardIndex++;
    this.answerShowed = false;
  }
}
