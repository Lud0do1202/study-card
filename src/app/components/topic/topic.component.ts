import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/interfaces/theme';
import { Topic } from 'src/app/interfaces/topic';
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
  constructor(private $theme$: ThemeService, private $topic$: TopicService, private router: Router) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Palette
    this.palette = this.$theme$.palette;

    // Theme
    this.theme = this.$theme$.getTheme(this.topic.color);
  }

  /* ------------------------------ Change Color ------------------------------ */
  onChangeColor(): void {
    // Update the DB
    this.$topic$.update(this.topic).subscribe({
      error: () => this.router.navigateByUrl('/error'),
    });

    // Update the theme of the topic color
    this.theme = this.$theme$.getTheme(this.topic.color);
  }
}
