import { Component, OnInit, OnDestroy, DoCheck, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child-hooks',
  templateUrl: './child-hooks.component.html',
  styles: []
})
export class ChildHooksComponent implements OnInit, OnDestroy, DoCheck, OnChanges {
 
  @Input() companyName;
 
  constructor() {
    console.log('ChildHooksComponent : constructor');
  }

  ngOnInit() {
    console.log('ChildHooksComponent : ngOnInit');
  }
  ngDoCheck() {
    console.log('ChildHooksComponent : ngDoCheck');
  }
  ngOnChanges() {
    console.log('ChildHooksComponent : ngOnChanges');
  }
  ngOnDestroy() {
    console.log('ChildHooksComponent : ngOnDestroy');
  }
}
