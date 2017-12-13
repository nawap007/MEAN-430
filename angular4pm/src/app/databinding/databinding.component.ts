import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  company: string;
  url: string;
  constructor() { 
   
  }

  ngOnInit() {
  
    this.company = 'Dot Net Tricks';
    this.url = 'http://www.dotnettricks.com';
  }
  greet() {
    window.open("hooks","_blank",
      "toolbar=0, scrollbars=yes, menubar=0, resizable=0, top=200, left=1500, width=300, height=500");
    alert('Hi, Welcome to Angular! ');
  }
}
