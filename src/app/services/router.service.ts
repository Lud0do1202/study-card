import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterData } from '../interfaces/router-data';
import { Topic } from '../interfaces/topic';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  /* --------------------------------- Data --------------------------------- */
  data: RouterData = {};

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: Router) {}

  /* ----------------------------- Landing Page ----------------------------- */
  landingPage(): void {
    this.router.navigateByUrl('/landing');
  }

  /* ------------------------------ Topics Page ----------------------------- */
  topicsPage(): void {
    this.router.navigateByUrl('/topics');
  }

  /* ---------------------------- Edit Topic Page --------------------------- */
  editTopicPage(topic: Topic): void {
    this.data.topic = topic;
    this.router.navigateByUrl('/edit-topic');
  }

  /* ---------------------------- Edit Card Page ---------------------------- */
  editCardPage(topic: Topic, card: Card): void {
    this.data.topic = topic;
    this.data.card = card;
    this.router.navigateByUrl('/edit-card');
  }

  /* ------------------------------- Play Page ------------------------------ */
  playPage(topic: Topic, cards: Card[]): void {
    this.data.topic = topic;
    this.data.cards = cards;
    this.router.navigateByUrl('/play');
  }

  /* ------------------------------ Result Page ----------------------------- */
  resultPage(topic: Topic, wrongCards: Card[], nbCards: number): void {
    this.data.topic = topic;
    this.data.cards = wrongCards;
    this.data.nbCards = nbCards;
    this.router.navigateByUrl('/result');
  }

  /* --------------------------------- Error -------------------------------- */
  error(): void {
    this.router.navigateByUrl('/error');
  }
}
