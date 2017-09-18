import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  company: string;
  url: string;
  constructor() { }

  ngOnInit() {
    this.company = 'Dot Net Tricks';
    this.url = 'http://www.dotnettricks.com';
  }
  greet() {
    alert('Hi, Welcome to Angular! ');
  }
}
