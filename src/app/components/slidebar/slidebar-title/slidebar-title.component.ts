import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slidebar-title',
  templateUrl: './slidebar-title.component.html',
  styleUrls: ['./slidebar-title.component.scss'],
})
export class SlidebarTitleComponent {
  @Input() title?: string;
}
