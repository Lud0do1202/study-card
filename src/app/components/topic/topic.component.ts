import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { Topic } from 'src/app/interfaces/topic';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  @Input() topic: Topic = {
    id: 'ID',
    topic: 'TOPIC',
    color: 'var(--normal-color)',
  };

  palette!: string[];
  theme!: Theme;
  color!: string;

  constructor(private $theme$: ThemeService) {}

  ngOnInit(): void {
    // Palette
    this.palette = this.$theme$.palette;

    // Theme
    this.theme = this.$theme$.getTheme(this.topic.color);

    // Default color
    this.color = this.theme.normal;
  }

  onChange(): void {
    // TODO: Save the color into the DB

    this.theme = this.$theme$.getTheme(this.color);
  }
}
