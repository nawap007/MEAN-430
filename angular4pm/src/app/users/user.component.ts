import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  user: User;
  toggle = true;
  public users: User[];
  public userStream: Observable<User[]>;
  public userStreamSubject = new Subject<User[]>();

  id: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
        this.route.params.subscribe((params) => {
          this.id = params.id;
          if (this.id !== undefined) {
              this.userService.GetUser(this.id).subscribe((res) => {
                this.user = res;
              });
        }
        });
    this.userService.GetUsers().subscribe((user: User[]) => {
      this.userStreamSubject.next(user);
    });
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      if (this.user._id !== undefined) {
        this.userService.UpdateUser(this.user).subscribe((res) => {
          if (res.status === 200) {
            // this.userStream = this.userService.GetUsers();
          }
        });
      } else {
        this.userService.AddUser(this.user).subscribe((res) => {
          if (res.status === 201) {
            this.userService.GetUsers().subscribe((user: User[]) => {
              this.userStreamSubject.next(user);
            });
              // this.userStream = this.userService.GetUsers();
          }
        });
      }
    }
  }

  editUser(id) {
    this.router.navigate(['/edit', id]);
  }

  deleteUser(id) {
    if (confirm('Are you sure to delete?')) {
      this.userService.DeleteUser(id).subscribe((res) => {
        if (res.status === 200) {
          // this.userStream = this.userService.GetUsers();
          for (let i = 0; i < this.users.length; i++) {
            if (id === this.users[i]._id) {
              this.users.splice(i, 1);
            }
          }
        }
      });
    }
  }

  toggleVal() {
    this.toggle = !this.toggle;
  }
}
