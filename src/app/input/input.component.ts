import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  applyForm = new FormGroup({
    userid: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router,private appsevice: AppService) {

  }

  submitApplication() {

    this.appsevice.setUserid(this.applyForm.value.userid?? '');
    this.appsevice.setPassword(this.applyForm.value.password?? '');

    console.log(`InputComponent received: userid: ${this.appsevice.userid.value}, password: ${this.appsevice.password.value}.`);
    this.router.navigateByUrl('/result');

  }

}
