// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http/src/http';

// interface User {
//     public name: string;
// }

// class UserService {
//     private usersSubject: Subject<User>;
//     private usersRequest: Observable<User>;

//     constructor(private http: Http) {
//       this.usersSubject = new ReplaySubject(1);
//     }

//     getUsers(refresh: boolean = false) {
//       if (refresh || !this.usersRequest) {
//         this.usersRequest = this.http.get('jhkjh').map(res => res.json().result);

//         this.usersRequest.subscribe(
//           result => this.usersSubject.next(result),
//           err => this.usersSubject.error(err)
//         );
//       }

//       return this.usersSubject.asObservable();
//     }
//   }