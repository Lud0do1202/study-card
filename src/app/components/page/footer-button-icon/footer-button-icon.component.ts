import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer-button-icon',
  templateUrl: './footer-button-icon.component.html',
  styleUrls: ['./footer-button-icon.component.scss'],
})
export class FooterButtonIconComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() icon: string = 'app';
  @Output() onClick = new EventEmitter<void>();

  /* --------------------------------- Click -------------------------------- */
  emitOnClick(): void {
    this.onClick.emit();
  }
}
