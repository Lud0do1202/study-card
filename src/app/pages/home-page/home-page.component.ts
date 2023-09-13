import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { RemoveAccentsPipe } from 'src/app/pipes/remove-accents.pipe';

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
  constructor(private removeAccent: RemoveAccentsPipe) {}

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    this.topics = [
      {
        id: '1',
        topic: 'Angular',
        color: '#f00',
        mastered: true,
      },
      {
        id: '2',
        topic: 'Réseaux',
        color: '#0f0',
        mastered: false,
      },
      {
        id: '3',
        topic: 'Droit',
        color: '#00f',
        mastered: false,
      },
    ];
    this.topicsFiltered = this.topics;
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
