import { Component, Input } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() topic!: Topic;
  theme!: Theme;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private $topic$: TopicService, private router: RouterService) {}

  /* ------------------------------ Change Color ------------------------------ */
  onChangeColor(theme: Theme): void {
    // Update local topic object
    this.topic.theme = theme;

    // Update the DB
    this.$topic$.update(this.topic).subscribe({
      error: () => this.router.error(),
    });
  }

  /* -------------------------------- Router -------------------------------- */
  // Play
  play(): void {
    this.router.navigate('/play', this.topic);
  }

  // Edit
  edit(): void {
    this.router.navigate('/edit-topic', this.topic);
  }
}
