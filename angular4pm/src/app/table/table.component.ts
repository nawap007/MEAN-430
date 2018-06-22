import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { log } from 'util';
import { Observable } from 'rxjs/Observable';
import { Subject, ReplaySubject } from 'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  @Input() tag: string;
  // @Input() userStream: Observable<User[]>;
  @Input() userStreamSubject: ReplaySubject<User[]>;

  public users: User[];

  @Output() edit: EventEmitter<number> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('constructor called');
    if (this.userStreamSubject) {
      this.userStreamSubject.subscribe(users => {
        this.users = users;
      });
    }
  }

  ngOnInit() {
    console.log('init called');
    this.userStreamSubject.subscribe(users => {
      this.users = users;
  });
  }

  editUser(id) {
    const w: any = window;
    w.lib = {};
    w.lib.stream = this.userStreamSubject.asObservable();
    this.edit.emit(id);
  }

  deleteUser(id) {
    this.delete.emit(id);
  }


}
