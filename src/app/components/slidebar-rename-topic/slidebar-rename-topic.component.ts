import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-slidebar-rename-topic',
  templateUrl: './slidebar-rename-topic.component.html',
  styleUrls: ['./slidebar-rename-topic.component.scss'],
})
export class SlidebarRenameTopicComponent {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('slidebar') slidebar!: SlidebarComponent;
  @Input() topic!: Topic;
  @Output() onRenamed = new EventEmitter<string | undefined>();
  newTopicName!: string;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $topic$: TopicService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.newTopicName = this.topic.topic;
  }

  /* --------------------------------- Show --------------------------------- */
  show(): void {
    this.slidebar.show();
  }

  /* --------------------------- Update Name Topic -------------------------- */
  confirmRename(): void {
    // Update local topic
    this.topic.topic = this.newTopicName;

    // Update DB
    this.$topic$.update(this.topic).subscribe({
      next: () => {
        this.slidebar.close();
        this.onRenamed.emit(this.newTopicName);
      },
      error: () => this.router.error(),
    });
  }

  /* --------------------------- Cancel Name Topic -------------------------- */
  cancelRename(): void {
    this.slidebar.close();
    this.onRenamed.emit();
  }
}
