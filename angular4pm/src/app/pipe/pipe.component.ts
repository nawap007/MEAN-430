import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: []
})
export class PipeComponent implements OnInit {
  employees: any[]
  constructor() { }

  ngOnInit() {
    this.employees = [{ name: 'Shailendra', address: 'Noida', salary: 12000, joining: new Date() },
    { name: 'Ankit', address: 'Delhi', salary: 10000, joining: new Date() },
    { name: 'Mohan', address: 'Noida', salary: 15000, joining: new Date() },
    { name: 'Rohan', address: 'Gurgaon', salary: 12000, joining: new Date() }];
  }

}
