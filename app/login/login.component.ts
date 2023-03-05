import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { authEmployee } from '../class/authEmployee';
import { User } from '../class/User';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup[]=[];
 
   submitted = false;
  
 
   @Input() authEmployee=new authEmployee();
constructor( public restApi: GetService, public route: Router) {}
 ngOnInit() {
 
     username: ['', Validators.required];
      password: ['', Validators.required];
     }
 
 get data() { return this.loginForm; }

 onSubmit(){

  this.route.navigate([`dashboard`]);
 
 }

    addEmployee(authEmployee:any) {
     
      this.restApi.createEmployee(this.authEmployee).subscribe((data: {}) => {
      //   localStorage.setItem('user',JSON.stringify(User));
      //  console.warn(data);
      if(this.submitted==true){
        alert("login successful")
      this.route.navigate([`dashboard`]);
      } 
      });
    
  }
    }