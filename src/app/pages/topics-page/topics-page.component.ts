import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { RemoveAccentsPipe } from 'src/app/pipes/remove-accents.pipe';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss'],
  providers: [RemoveAccentsPipe],
})
export class TopicsPageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topics!: Topic[];
  topicsFiltered!: Topic[];

  /* ------------------------------ Constructor ----------------------------- */
  constructor(
    private router: RouterService,
    private $user$: UserService,
    private $topic$: TopicService,
    private removeAccent: RemoveAccentsPipe,
    private loader: NgxSpinnerService
  ) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Loader
    this.loader.show();

    // Get the topics
    this.$topic$.getAll().subscribe({
      next: (topics: Topic[]) => {
        // Loader
        this.loader.hide();

        // Topics
        this.topics = topics;
        this.topicsFiltered = topics;
      },
      error: () => this.router.error(),
    });
  }

  /* ----------------------------- Filter Topics ---------------------------- */
  filterTopics(search: string): void {
    // Set the search as pure (no accent, lowercase)
    const pureSearch = this.removeAccent.transform(search).toLocaleLowerCase();

    // Filter the items
    this.topicsFiltered = this.topics.filter((item: Topic) => {
      // Set the prop as pure
      const pureProp = this.removeAccent.transform(item.topic).toLocaleLowerCase();

      // Filter it
      return pureProp.includes(pureSearch);
    });
  }

  /* ------------------------------- New Topic ------------------------------ */
  newTopic(): void {
    // Loader
    this.loader.show();

    // Topic
    const defaultTopic: Topic = {
      id: 0,
      topic: 'New Topic',
      theme: 'pink-theme',
    };

    this.$topic$.insert(defaultTopic).subscribe({
      next: (topic: Topic) => {
        // Loader
        this.loader.hide();

        this.router.editTopicPage(topic);
      },
      error: () => this.router.error(),
    });
  }

  /* ------------------------- Close Delete Slidebar ------------------------ */
  onCloseDeleteSlidebar(state: 'cancel' | 'confirm'): void {
    // NO
    if (state === 'cancel') {
      return;
    }

    // YES
    else {
      // Loader
      this.loader.show();

      // Delete
      this.$user$.deleteAccount().subscribe({
        next: () => App.exitApp(), // Quit app
        error: () => this.router.error(),
      });
    }
  }
}
