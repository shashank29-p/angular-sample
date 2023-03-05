import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/User';
import { GetService } from '../services/get.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
 @Output() User: any = [];
 id:any;
 username= new FormControl('')
  constructor(public restApi: GetService,public http:Router, public actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getEmployees();

  }

  // Get employees list
  getEmployees() {

    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.User = data;
    });
  }

    view(id:string){
       this.id = this.actRoute.snapshot.paramMap.get('id');
      return this.restApi.getEmployee(id).subscribe(data=>
      {
        console.log(id);
        this.http.navigate([`employee`,id])
       sessionStorage.setItem('username',this.User.username);
       sessionStorage.setItem('userrole',this.User.userRole);
       sessionStorage.setItem('email',this.User.email)
      })
    }
  
}
