import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styles: []
})
export class ModeldrivenComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      'Name': [null, Validators.required],
      'Username': [null, [Validators.required, Validators.minLength(3)]],
      'Email': [null, [Validators.required, Validators.email]],
      'Password': [null, Validators.required],
      'ConfirmPassword': [null, Validators.required],
      'Address': [null],
      'Contact': [null, Validators.pattern('^[789]\\d{9}$')],
      'Terms': [null, Validators.required],
    });
  }

  ngOnInit() {
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      alert('Valid');
    }
  }
}
