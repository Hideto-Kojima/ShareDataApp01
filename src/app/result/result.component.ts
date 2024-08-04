import { Component, inject } from '@angular/core';
import { AuthDataService } from '../auth-data.service';
import { AuthData } from '../auth-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  template: `
  <p>result works!</p>
  <tr *ngfor="let authdata of authdatas$ | async">
    <td>ID: {{authdata.userid}}</td>
    <td>Password: {{authdata.password}}</td>
  </tr>
  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  authdatas$!: Observable<AuthData[]>;

  constructor(private authdataService: AuthDataService) {
    // console.log(`ResultComponent received: userid: ${this.appsevice.userid.value}, password: ${this.appsevice.password.value}.`);
    this.authdatas$ = authdataService.entities$;
  }

}
