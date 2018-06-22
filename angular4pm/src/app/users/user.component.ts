import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject, ReplaySubject } from 'rxjs/Rx';
import {  } from '@angula/core';
import { log } from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit {
  user: User;
  toggle = true;
  public users: User[];
  public userStream: Observable<User[]>;
  public userStreamSubject = new ReplaySubject<User[]>();
  public list: string[] = ['car','dog'];

  id: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
        this.route.params.subscribe((params) => {
          this.id = params.id;
          if (this.id !== undefined) {
              this.userService.GetUser(this.id).repeat(10).subscribe((res) => {
                this.user = res;
              });
        }
        });
    this.userService.GetUsers().repeat(10).subscribe((user: User[]) => {
      this.userStreamSubject.next(user);
    });


//     const pollData = this.userService.GetUsers()
//       .map(res => {
//         console.log(res);

//       });

// pollData.expand(
// () => Observable.timer(4000).concatMap(() => pollData)
// ).subscribe();



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
          this.userService.GetUsers().subscribe((user: User[]) => {
            this.userStreamSubject.next(user);
          });
        }
      });
    }
  }

  toggleVal() {
    const w: any = window;
    w.shared = {};
    w.shared.userStream = this.userStreamSubject;

    window.open('/detached', '_blank',
      'toolbar=no, titlebar=no, scrollbars=yes, menubar=no, location=no,status=no, menubar=0, resizable=0, top=200, left=1500, width=300, height=500');
    // this.toggle = !this.toggle;
  }

  hello() {
    console.log('hello');

  }
}
