import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styles: []
})
export class TemplatedrivenComponent implements OnInit {
  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      console.log(this.user);
      alert('form is valid!');
    }
  }
}
