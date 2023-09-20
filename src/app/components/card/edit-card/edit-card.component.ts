import { AfterViewInit, Component, ElementRef, Input, ViewChildren } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Topic } from 'src/app/interfaces/topic';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent implements AfterViewInit {
  /* ---------------------------------- Va ---------------------------------- */
  @Input() topic!: Topic;
  @Input() card!: Card;

  @ViewChildren('cardInfos') cardInfos!: ElementRef[];

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService) {}

  /* ---------------------------- After View Init --------------------------- */
  ngAfterViewInit(): void {
    for (let info of this.cardInfos) {
      const infoElement = info.nativeElement as HTMLTextAreaElement;
      infoElement.style.height = 'auto';
      infoElement.style.height = infoElement.scrollHeight + 'px';
    }
  }

  /* --------------------------------- Edit --------------------------------- */
  editCard(): void {
    this.router.editCardPage(this.topic, this.card);
  }
}
