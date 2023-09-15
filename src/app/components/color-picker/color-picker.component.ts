import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  /* ----------------------------------- Var ---------------------------------- */
  @Output() onChangeColor = new EventEmitter<Theme>();
  @Input() theme: Theme = 'pink-theme';
  palette!: string[];
  color!: string;

  /* ------------------------------- Constructor ------------------------------ */
  constructor(private $theme$: ThemeService) {}

  /* ---------------------------------- Init ---------------------------------- */
  ngOnInit(): void {
    // Palette
    this.palette = this.$theme$.palette;
    this.color = this.$theme$.getPrimaryColor(this.theme);
  }

  /* ------------------------------ Change Color ------------------------------ */
  emitOnChangeColor(): void {
    // Update the theme of the color picker
    this.theme = this.$theme$.getTheme(this.color)!;

    // Emit the theme
    this.onChangeColor.emit(this.theme);
  }
}
