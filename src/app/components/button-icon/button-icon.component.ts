import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() icon: string = 'app';
  @Output() onClick = new EventEmitter<void>();

  /* --------------------------------- Click -------------------------------- */
  emitOnClick(): void {
    this.onClick.emit();
  }
}
