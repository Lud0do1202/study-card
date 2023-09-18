import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent<T> {
  /* ---------------------------------- Var --------------------------------- */
  @Output() onChange = new EventEmitter<string>();
  search: string = '';

  /* ----------------------------- Filter Items ----------------------------- */
  emitOnChange(): void {
    this.onChange.emit(this.search);
  }
}
