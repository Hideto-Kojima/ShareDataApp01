import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class AppService {
    userid: BehaviorSubject<string>;
    password: BehaviorSubject<string>;

    constructor() {
        this.userid = new BehaviorSubject('');
        this.password = new BehaviorSubject('');
    }

    setUserid(input_userid:string) {
      this.userid = new BehaviorSubject(input_userid);
    }
    setPassword(input_password:string) {
      this.password = new BehaviorSubject(input_password);
    }
}