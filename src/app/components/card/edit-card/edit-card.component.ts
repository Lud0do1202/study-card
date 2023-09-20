import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  @ViewChild('cardRef') cardRef!: ElementRef;
  @ViewChild('questionRef') questionRef!: ElementRef;
  @ViewChild('answerRef') answerRef!: ElementRef;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: RouterService) {}

  /* ---------------------------- After View Init --------------------------- */
  ngAfterViewInit(): void {
    // Question
    const questionHeight = this._setHeightTextarea(this.questionRef);

    // Answer
    const answerHeight = this._setHeightTextarea(this.answerRef);
    this.answerRef.nativeElement.style.top = questionHeight + 'px';

    // Card
    this.cardRef.nativeElement.style.height = questionHeight + answerHeight + 'px';
  }

  /* -------------------------- Set Height Textarea ------------------------- */
  private _setHeightTextarea(ref: ElementRef): number {
    // Get element
    const element = ref.nativeElement as HTMLTextAreaElement;

    // Set height and set it
    element.style.height = 'auto';
    const height = element.scrollHeight;
    element.style.height = height + 'px';

    return height;
  }

  /* --------------------------------- Edit --------------------------------- */
  editCard(): void {
    this.router.editCardPage(this.topic, this.card);
  }
}
