import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-sample',
  template: `<input type="text" [value]="firstName">
    <br>{{firstName}}`
})
export class SampleComponent implements OnInit, DoCheck {
  public firstName        = 'Name';
  public firstNameControl = new FormControl();

  ngOnInit() {
    // debounce keystroke events
    this.firstNameControl.valueChanges
      .debounceTime(1000)
      .subscribe(newValue => {
        console.log('new Value', newValue);
        this.firstName = newValue;
      });


    // throttle resize events
    Observable.fromEvent(window, 'resize')
      .throttleTime(2000)
      .subscribe(e => {
        console.log('resize event', e);
        this.firstName += '*';  // change something to show it worked
      });




  }
  ngDoCheck() { console.log('change detection'); }

}
