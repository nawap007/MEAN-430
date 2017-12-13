import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const IGNORED_ELEMENTS = ["auto-complete-input", "date-input"];
const ACTIVATING_ATTRIBUTES = ["simple-tooltip", "simple-tooltip-overflow", "simple-tooltip-overflow-text",
                               "simple-tooltip-source", "simple-tooltip-active", "simple-tooltip-inactive", "inactive", "simple-tooltip-ellipsis-only"];

                              
@Directive({
  selector: '[highlight]' // ACE
})
export class HighlightDirective {

  public color: String;
  constructor(private el: ElementRef) {
    
  }

  @Input("highlight")
  public set highlight(color: string) {
      this.color = color;
  }


  @HostListener('mouseover') mouseover() {
    const IGNORED_ELEMENTS_SELECTOR = IGNORED_ELEMENTS.map(element => `:not(${element})`).join("");
   // console.log(IGNORED_ELEMENTS_SELECTOR);
    
    const SELECTOR = ACTIVATING_ATTRIBUTES.map(attribute => `${IGNORED_ELEMENTS_SELECTOR}[${attribute}]`).join(",");
    //console.log(SELECTOR);
    this.el.nativeElement.style.backgroundColor =  'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
