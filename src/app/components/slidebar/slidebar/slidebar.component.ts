import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss'],
})
export class SlidebarComponent implements AfterViewInit {
  /* ---------------------------------- Var --------------------------------- */
  @Input() title?: string;
  @Input() showButtons: boolean = true;
  @Input() cancelLabel?: string;
  @Input() confirmLabel?: string;

  @Output() onClose = new EventEmitter<'cancel' | 'confirm'>();

  @ViewChild('slidebar') private _slidebarElementRef!: ElementRef;
  @ViewChild('mask') private _maskElementRef!: ElementRef;
  private _slidebarElement: any;
  private _maskElement: any;

  private _keyframesSlidebar = [{ bottom: '-100%' }, { bottom: '0%' }];
  private _keyframesMask = [{ bottom: '-100%' }, { bottom: '0%' }];
  private _animationOptions = {
    duration: 200,
    fill: 'forwards',
    easing: 'ease-out',
  };
  private _canClose: boolean = false;

  /* ---------------------------- After View Init --------------------------- */
  ngAfterViewInit(): void {
    this._slidebarElement = this._slidebarElementRef.nativeElement;
    this._maskElement = this._maskElementRef.nativeElement;
  }

  /* ----------------------------- Show Slidebar ---------------------------- */
  show(): void {
    // Cannot close while animated
    this._canClose = false;

    // Start the animation
    this._maskElement.animate(this._keyframesMask, this._animationOptions);
    this._slidebarElement.animate(this._keyframesSlidebar, this._animationOptions).addEventListener('finish', () => {
      // Reverse keyframes
      this._keyframesSlidebar.reverse();
      this._keyframesMask.reverse();

      // Can close
      this._canClose = true;
    });
  }

  /* ---------------------------- Close Slidebar ---------------------------- */
  close(state: 'cancel' | 'confirm'): void {
    // Stop if not end animation
    if (!this._canClose) return;

    // Cannot close again
    this._canClose = false;

    // Start the animation
    this._maskElement.animate(this._keyframesSlidebar, this._animationOptions);
    this._slidebarElement.animate(this._keyframesSlidebar, this._animationOptions).addEventListener('finish', () => {
      // Emit closed
      this.onClose.emit(state);

      // Reverse keyframes
      this._keyframesSlidebar.reverse();
      this._keyframesMask.reverse();
    });
  }
}
