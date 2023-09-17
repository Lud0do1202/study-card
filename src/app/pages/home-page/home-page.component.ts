import { Component, OnInit, ViewChild } from '@angular/core';
import { SlidebarComponent } from 'src/app/components/slidebar/slidebar.component';
import { Topic } from 'src/app/interfaces/topic';
import { RemoveAccentsPipe } from 'src/app/pipes/remove-accents.pipe';
import { RouterService } from 'src/app/services/router.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [RemoveAccentsPipe],
})
export class HomePageComponent implements OnInit {
  /* ---------------------------------- Var --------------------------------- */
  topics!: Topic[];
  topicsFiltered!: Topic[];

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $topic$: TopicService, private removeAccent: RemoveAccentsPipe) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Get the topics
    this.$topic$.getAll().subscribe({
      next: (topics: Topic[]) => {
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
    const defaultTopic: Topic = {
      id: 0,
      topic: 'New Topic',
      theme: 'pink-theme',
    };

    this.$topic$.insert(defaultTopic).subscribe({
      next: (topic: Topic) => this.router.navigate('/edit-topic', topic),
      error: () => this.router.error(),
    });
  }
}
