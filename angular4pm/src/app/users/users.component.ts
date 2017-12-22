import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private router: Router) {
    console.log('constructor called');

  }

  ngOnInit() {
    console.log('init called');
    this.userService.GetUsers().subscribe((res) => {
      this.users = res;
    });
  }
  editUser(id) {
    this.router.navigate(['/edit', id]);
  }

  deleteUser(id) {
    if (confirm('Are you sure to delete?')) {
      this.userService.DeleteUser(id).subscribe((res) => {
        if (res.status === 200) {
          for (let i = 0; i < this.users.length; i++) {
            if (id === this.users[i]._id) {
              this.users.splice(i, 1);
            }
          }
        }
      });
    }
  }
}
