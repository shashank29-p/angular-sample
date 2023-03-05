import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/User';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})

export class EmployeeCreateComponent implements OnInit {
  //  @Input() employeeDetails={id:'',userRole:'',username:'',email:''};

  // employeePost: any[]=[];
  @Input() User=new User();
  constructor(public restApi: GetService, public router: Router) {
  }

  ngOnInit() {
    
  }

  addEmploye(user:any) {
  
    this.restApi.addProductToRemote(this.User).subscribe((data: {}) => {
      localStorage.setItem('user',JSON.stringify(this.User));
    
      console.log(this.User);
     
      JSON.parse('data');
      alert("user added successfully");
   //   this.router.navigate([`employees`]);
    });
  

  }
  
}
