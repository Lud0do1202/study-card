import { Component, OnInit, ViewChild } from '@angular/core';
import { SlidebarComponent } from 'src/app/components/slidebar/slidebar.component';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-edit-topic-page',
  templateUrl: './edit-topic-page.component.html',
  styleUrls: ['./edit-topic-page.component.scss'],
})
export class EditTopicPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('renameSlidebar') renameSlidebar!: SlidebarComponent;
  topic!: Topic;
  newTopicName!: string;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $topic$: TopicService) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topic = (this.router.data as Topic) ?? this.$topic$.defaultTopic;
    this.newTopicName = this.topic.topic;
  }

  /* ---------------------- Show Rename Topic Slidebar ---------------------- */
  showRenameTopicSlidebar(): void {
    this.renameSlidebar.show();
    this.newTopicName = this.topic.topic;
  }

  /* --------------------------- Update Name Topic -------------------------- */
  submitRename(): void {
    // Update local topic
    this.topic.topic = this.newTopicName;

    // Update DB
    this.$topic$.update(this.topic).subscribe({
      error: () => this.router.error(),
    });

    // Close slidebar
    this.renameSlidebar.close();
  }

  /* --------------------------- Cancel Name Topic -------------------------- */
  cancelRename(): void {
    this.renameSlidebar.close();
  }

  
}
