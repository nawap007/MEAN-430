import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { log } from 'util';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  id: string;
  name: string;
  label: string='Objections';
  removeChipTxt: string='new text ';
  
  constructor(private route: ActivatedRoute) { 
    console.log('AboutComponent constructor called');
  }

  ngOnInit() {
    console.log('AboutComponent init called');
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.name = params.name;
    });
  }

 
  public removeSticker = (payload, event?: MouseEvent) => {
    console.log(payload);
    console.log(event);
    
    console.log('dummy');
  }

}
