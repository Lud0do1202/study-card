import { Component, Input, ViewChild } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { CardService } from 'src/app/services/card.service';
import { RouterService } from 'src/app/services/router.service';
import { SlidebarComponent } from '../slidebar/slidebar.component';

@Component({
  selector: 'app-slidebar-delete-card',
  templateUrl: './slidebar-delete-card.component.html',
  styleUrls: ['./slidebar-delete-card.component.scss'],
})
export class SlidebarDeleteCardComponent {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('slidebar') slidebar!: SlidebarComponent;
  @Input() topic!: Topic;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService, private $card$: CardService) {}

  /* --------------------------------- Show --------------------------------- */
  show(): void {
    this.slidebar.show();
  }

  /* ----------------------------- Delete Topoic ---------------------------- */
  confirm(): void {
    // Update DB
    // this.$card$.delete(this.topic).subscribe({
    //   next: () => this.router.navigate('/home'),
    //   error: () => this.router.error(),
    // });

    this.router.navigate('/edit-topic', this.topic);
  }

  /* ----------------------------- Delete Cancel ---------------------------- */
  cancel(): void {
    this.slidebar.close();
  }
}
