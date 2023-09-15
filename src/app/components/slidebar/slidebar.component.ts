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
    this.keyframesSlidebar = [{ top: '100%' }, { top: '50%' }];
    this.keyframesMask = [{ top: '100%' }, { top: '0%' }];

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
    // Start the animation
    this.slidebarElement.animate(this.keyframesSlidebar, this.animationOptions).addEventListener('finish', () => {
      // Can close
      this.canClose = true;

      // Reverse keyframes
      this.keyframesSlidebar.reverse();
      this.keyframesMask.reverse();
    });
    this.maskElement.animate(this.keyframesMask, this.animationOptions);
  }

  /* --------------------------------- Close -------------------------------- */
  close(): void {
    // Start the animation
    this.slidebarElement.animate(this.keyframesSlidebar, this.animationOptions).addEventListener('finish', () => {
      // Cannot close
      this.canClose = false;

      // Closed
      this.onClose.emit();

      // Reverse keyframes
      this.keyframesSlidebar.reverse();
      this.keyframesMask.reverse();
    });
    this.maskElement.animate(this.keyframesSlidebar, this.animationOptions);
  }
}
