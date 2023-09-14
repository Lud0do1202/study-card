import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  /* ----------------------------------- Var ---------------------------------- */
  @Output() onChangeColor = new EventEmitter<string>();
  @Input() theme?: Theme;
  palette!: string[];
  color!: string;

  /* ------------------------------- Constructor ------------------------------ */
  constructor(private $theme$: ThemeService) {}

  /* ---------------------------------- Init ---------------------------------- */
  ngOnInit(): void {
    this.palette = this.$theme$.palette;
    this.theme = this.theme ?? this.$theme$.getTheme(this.$theme$.defaultColor);
    this.color = this.theme.normal;
  }

  /* ------------------------------ Change Color ------------------------------ */
  emitOnChangeColor(): void {
    this.onChangeColor.emit(this.color);
  }
}
