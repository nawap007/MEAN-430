import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { log } from 'util';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  @Input() tag: string;
  @Input() userStream: Observable<User[]>;
  public users: User[];
  constructor() {
    console.log('constructor called');

  }

  ngOnInit() {
    this.userStream.subscribe(users => {
        this.users = users;
    });
    console.log('init called');
  }


}
