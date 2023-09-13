import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo-shrinking',
  templateUrl: './logo-shrinking.component.html',
  styleUrls: ['./logo-shrinking.component.scss'],
})
export class LogoShrinkingComponent {
  /* ---------------------------------- Var --------------------------------- */
  @ViewChild('logoShrinking') logoShrinkingElementRef!: ElementRef;
  @Output() shrunk = new EventEmitter();

  /* ------------------------------- Animation ------------------------------ */
  startAnimation(): void {
    const logoShrinkingElement = this.logoShrinkingElementRef.nativeElement;

    // Create a keyframes animation
    const keyframes = [{ width: '100%' }, { width: '70%' }, { width: '0%' }];

    // Set animation options
    const options = {
      duration: 1500,
      iterations: 1,
      fill: 'forwards',
      easing: 'ease-in',
    };

    // Start the animation
    logoShrinkingElement.animate(keyframes, options).addEventListener('finish', () => {
      this.shrunk.emit();
    });
  }
}
