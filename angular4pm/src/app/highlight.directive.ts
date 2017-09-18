import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight],.highlight,highlight' // ACE
})
export class HighlightDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseover') mouseover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
