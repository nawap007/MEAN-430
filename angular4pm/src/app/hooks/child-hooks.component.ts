import { Component, OnInit, OnDestroy, DoCheck, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child-hooks',
  templateUrl: './child-hooks.component.html',
  styles: []
})
export class ChildHooksComponent implements OnInit, OnDestroy, DoCheck, OnChanges {
  @Input() companyName;
  constructor() {
    console.log('child : constructor');
  }

  ngOnInit() {
    console.log('child : ngOnInit');
  }
  ngDoCheck() {
    console.log('child : ngDoCheck');
  }
  ngOnChanges() {
    console.log('child : ngOnChanges');
  }
  ngOnDestroy() {
    console.log('child : ngOnDestroy');
  }
}
