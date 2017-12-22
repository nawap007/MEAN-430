import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/user';

@Injectable()
export class UserService {
    private url: string;
    private headers: Headers;


    constructor(private http: Http) {
        this.url = 'http://localhost:1300/api';
        this.headers = new Headers({'Content-Type': 'application/json'});
    }
    GetUsers(): Observable<User[]> {
        return this.http.get(this.url + '/user').map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err));
    }
    GetUser(id): Observable<User> {
        return this.http.get(this.url + '/user/' + id).map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err));
    }
    AddUser(user: User): Observable<Response> {
        return this.http.post(this.url + '/user', JSON.stringify(user),{headers: this.headers}).catch((err) => Observable.throw(err));
    }
    UpdateUser(user: User): Observable<Response> {
        return this.http.put(this.url + '/user/' + user._id, JSON.stringify(user),
        {headers: this.headers}).catch((err) => Observable.throw(err));
    }
    DeleteUser(id): Observable<Response> {
        return this.http.delete(this.url + '/user/' + id).catch((err) => Observable.throw(err));
    }
}