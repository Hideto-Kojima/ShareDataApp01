import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthData } from '../auth-data';
import { Observable } from 'rxjs';
import { AuthDataService } from '../auth-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  applyForm = new FormGroup({
    userid: new FormControl(''),
    password: new FormControl('')
  });
  inputData: AuthData = {
    'userid': '',
    'password': ''
  };

  authdatas$!: Observable<AuthData[]>;

  constructor(private router: Router,private authdataService: AuthDataService) {
    this.authdatas$ = authdataService.entities$;
  }
  ngOnInit(): void {
    this.getAuthData();
  }

  getAuthData() {
    this.authdataService.getAll();
  }
  add(authdata: AuthData) {
    this.authdataService.add(authdata);
  }

  submitApplication() {

   // this.appsevice.setUserid(this.applyForm.value.userid?? '');
    //this.appsevice.setPassword(this.applyForm.value.password?? '');
    this.inputData.userid = this.applyForm.value.userid?? '';
    this.inputData.password = this.applyForm.value.password?? ''
    this.add(this.inputData);
    

    //console.log(`InputComponent received: userid: ${this.appsevice.userid.value}, password: ${this.appsevice.password.value}.`);
    this.router.navigateByUrl('/result');

  }

}
