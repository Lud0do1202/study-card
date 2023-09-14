import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';
import { ThemeService } from 'src/app/services/theme.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  @Input() topic: Topic = {
    id: 'ID',
    topic: 'TOPIC',
    color: 'var(--normal-color)',
  };
  palette!: string[];
  theme!: Theme;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private $theme$: ThemeService, private $topic$: TopicService, private router: RouterService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Palette
    this.palette = this.$theme$.palette;

    // Theme
    this.theme = this.$theme$.getTheme(this.topic.color);
  }

  /* ------------------------------ Change Color ------------------------------ */
  onChangeColor(color: string): void {
    // Update local topic
    this.topic.color = color;

    // Update the DB
    this.$topic$.update(this.topic).subscribe({
      error: () => this.router.error(),
    });

    // Update the theme of the topic color
    this.theme = this.$theme$.getTheme(this.topic.color);
  }

  /* -------------------------------- Router -------------------------------- */
  goToTopicPage(): void {
    this.router.navigate('/topic', this.topic);
  }
}
