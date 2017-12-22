import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  @Input() users: User[];

  constructor() {
    console.log('constructor called');

  }

  ngOnInit() {
    console.log('init called');
  }


}
