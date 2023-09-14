import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss'],
})
export class TopicPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topic!: Topic;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topic = this.router.data as Topic;
  }
}
