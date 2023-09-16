import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';
import { SlidebarComponent } from '../slidebar/slidebar.component';

@Component({
  selector: 'app-slidebar-delete-topic',
  templateUrl: './slidebar-delete-topic.component.html',
  styleUrls: ['./slidebar-delete-topic.component.scss'],
})
export class SlidebarDeleteTopicComponent {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('slidebar') slidebar!: SlidebarComponent;
  @Input() topic!: Topic;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $topic$: TopicService) {}

  /* --------------------------------- Show --------------------------------- */
  show(): void {
    this.slidebar.show();
  }

  /* --------------------------- Update Name Topic -------------------------- */
  confirmRename(): void {
    // Update DB
    this.$topic$.delete(this.topic).subscribe({
      next: () => this.router.navigate('/home'),
      error: () => this.router.error(),
    });
  }

  /* --------------------------- Cancel Name Topic -------------------------- */
  cancelRename(): void {
    this.slidebar.close();
  }
}
