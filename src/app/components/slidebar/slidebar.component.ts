import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss'],
})
export class SlidebarComponent implements OnInit, AfterViewInit {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('slidebar') slidebarElementRef!: ElementRef;
  @ViewChild('mask') maskElementRef!: ElementRef;
  @Output() onClose = new EventEmitter<void>();
  canClose: boolean = false;
  slidebarElement!: any;
  maskElement!: any;
  keyframesSlidebar!: any[];
  keyframesMask!: any[];
  animationOptions!: any;

  /* --------------------------------- Init --------------------------------- */
  ngOnInit(): void {
    // Keyframes
    this.keyframesSlidebar = [{ bottom: '-100%' }, { bottom: '0%' }];
    this.keyframesMask = [{ bottom: '-100%' }, { bottom: '0%' }];

    // Set animation options
    this.animationOptions = {
      duration: 200,
      fill: 'forwards',
      easing: 'ease-out',
    };
  }

  /* ------------------------------ After Init ------------------------------ */
  ngAfterViewInit(): void {
    // Get native element
    this.slidebarElement = this.slidebarElementRef.nativeElement;
    this.maskElement = this.maskElementRef.nativeElement;
  }

  /* --------------------------------- Show --------------------------------- */
  show(): void {
    // Cannot close while animated
    this.canClose = false;

    // Start the animation
    this.maskElement.animate(this.keyframesMask, this.animationOptions);
    this.slidebarElement.animate(this.keyframesSlidebar, this.animationOptions).addEventListener('finish', () => {
      // Reverse keyframes
      this.keyframesSlidebar.reverse();
      this.keyframesMask.reverse();

      // Can close
      this.canClose = true;
    });
  }

  /* --------------------------------- Close -------------------------------- */
  close(): void {
    // Stop if not end animation
    if (!this.canClose) return;

    // Cannot close again
    this.canClose = false;

    // Start the animation
    this.maskElement.animate(this.keyframesSlidebar, this.animationOptions);
    this.slidebarElement.animate(this.keyframesSlidebar, this.animationOptions).addEventListener('finish', () => {
      // Closed
      this.onClose.emit();

      // Reverse keyframes
      this.keyframesSlidebar.reverse();
      this.keyframesMask.reverse();
    });
  }
}
