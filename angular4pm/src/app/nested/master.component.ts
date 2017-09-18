import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: []
})
export class MasterComponent implements OnInit {
  company: string;
  constructor() { }

  ngOnInit() {
    this.company = 'Dot Net Tricks';
  }
  SayHello(msg: string) {
    alert(msg);
  }
}
