import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-hooks',
  templateUrl: './parent-hooks.component.html',
  styles: []
})
export class ParentHooksComponent implements OnInit {
  company: string;
  IsCreated: boolean;
  constructor() {
    console.log('parent : constructor');
  }

  ngOnInit() {
    this.IsCreated = true;
    this.company = 'Dot Net Tricks';
    console.log('parent : ngOnInit');
  }
  CreateDestroy() {
    this.IsCreated = !this.IsCreated;
  }
}
