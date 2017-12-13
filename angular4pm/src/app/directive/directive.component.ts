import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: []
})
export class DirectiveComponent implements OnInit {

  num: number;
  alphabet:string;
  colors: any[]
  constructor() { }
  ngOnInit() {
    this.num = 1;
    this.colors = ["red", "blue", "green"];
  }

}
