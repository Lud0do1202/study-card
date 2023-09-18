import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SlidebarComponent } from '../slidebar/slidebar.component';

@Component({
  selector: 'app-slidebar-delete',
  templateUrl: './slidebar-delete.component.html',
  styleUrls: ['./slidebar-delete.component.scss'],
})
export class SlidebarDeleteComponent {
  /* ---------------------------------- Var --------------------------------- */
  @Input() type!: string;
  @Input() name!: string;

  @Output() onClose = new EventEmitter<'cancel' | 'confirm'>();

  @ViewChild('deleteSlidebar') deleteSlidebar!: SlidebarComponent;

  /* ------------------------- Show Delete Slidebar ------------------------- */
  show(): void {
    this.deleteSlidebar.show();
  }
}
