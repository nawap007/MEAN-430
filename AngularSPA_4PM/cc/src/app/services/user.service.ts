import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/user';

@Injectable()
export class UserService {
    private url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:1300/api';
    }
    GetUsers(): Observable<User[]> {
        return this.http.get(this.url + "/user").map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err));
    }
}