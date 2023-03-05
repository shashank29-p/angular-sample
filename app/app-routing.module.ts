import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
 { path:"",component: LoginComponent },
 {path:"login", component: LoginComponent
},
{path:"dashboard",component: DashboardComponent},
{path:"employee/:id",component: UserlistComponent},
{path:"employee",component: EmployeeCreateComponent},
{path:"employees",component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents=[
  LoginComponent
]