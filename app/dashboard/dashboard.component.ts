import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/User';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private getservice:GetService,private route:Router) { }
  ngOnInit():void{
   
    
    
  }
  getEmployee(){
    this.getservice.getEmployees().subscribe((data: {}) => {
   this.route.navigate([`userlist`])
      console.warn(data)
      });
  }
 
  User=new User();



  Logout() {
    this.route.navigate([`login`]);
  }
  usrlist(){
    this.route.navigate([`userlist`]);
  }
}


