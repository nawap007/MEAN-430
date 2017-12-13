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
    console.log('ParentHooksComponent constructor called');
  }

  ngOnInit() {
    this.IsCreated = true;
    this.company = 'Dot Net Tricks';
    console.log('parent : ngOnInit');
  }
  CreateDestroy() {
    console.log('ParentHooksComponent CreateDestroy called');
    this.IsCreated = !this.IsCreated;
  }
}
