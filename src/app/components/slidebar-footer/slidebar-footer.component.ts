import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slidebar-footer',
  templateUrl: './slidebar-footer.component.html',
  styleUrls: ['./slidebar-footer.component.scss'],
})
export class SlidebarFooterComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() cancel: string = 'Cancel';
  @Input() confirm: string = 'Confirm';
  @Output() onCancel = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();
}
