import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer-button-icon',
  templateUrl: './footer-button-icon.component.html',
  styleUrls: ['./footer-button-icon.component.scss'],
})
export class FooterButtonIconComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() icon!: string | string[];
  @Output() onClick = new EventEmitter<void>();

  getIcons(): string[] {
    return typeof this.icon === 'string' ? [this.icon] : this.icon;
  }

  /* --------------------------------- Click -------------------------------- */
  emitOnClick(): void {
    this.onClick.emit();
  }
}
