import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-result',
  template: `
  <p>result works!</p>
<ul>
    <li>ID: {{userid}}</li>
    <li>Password: {{password}}</li>
</ul>
  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  userid = this.appsevice.userid.value;
  password = this.appsevice.password.value;
  
  constructor(private appsevice: AppService) {
    console.log(`ResultComponent received: userid: ${this.appsevice.userid.value}, password: ${this.appsevice.password.value}.`);
  
  }

}
