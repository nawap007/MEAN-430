import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from "@angular/forms";
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: []
})
export class CreateComponent implements OnInit {
  user: User;
  id: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.userService.GetUser(this.id).subscribe((res) => {
        this.user = res;
      });
    });
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      if (this.user._id != undefined) {
        this.userService.UpdateUser(this.user).subscribe((res) => {
          if (res.status == 200) {
            this.router.navigate(['/']);
          }
        });
      }
      else {
        this.userService.AddUser(this.user).subscribe((res) => {
          if (res.status == 201) {
            this.router.navigate(['/']);
          }
        });
      }
    }
  }
}
