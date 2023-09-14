import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/interfaces/topic';
import { RemoveAccentsPipe } from 'src/app/pipes/remove-accents.pipe';
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
  constructor(private router: Router, private $topic$: TopicService, private removeAccent: RemoveAccentsPipe) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Get the topics
    this.$topic$.getAll().subscribe({
      next: (topics: Topic[]) => {
        this.topics = topics;
        this.topicsFiltered = topics;
      },
      error: () => this.router.navigateByUrl('/error'),
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
}
