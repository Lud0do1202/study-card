import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RemoveAccentsPipe } from 'src/app/pipes/remove-accents.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent<T> {
  /* ---------------------------------- Var --------------------------------- */
  @Output() onChange = new EventEmitter<string>();
  search: string = '';

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private removeAccent: RemoveAccentsPipe) {}

  /* ----------------------------- Filter Items ----------------------------- */
  onChangeDispatch(): void {
    // Emit the filtered items
    this.onChange.emit(this.search);
  }
}
