import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../class/User';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { authEmployee } from '../class/authEmployee';


@Injectable({
  providedIn: 'root'
})
export class GetService {

 
  // apiget(): Observable<any>{
  //   return this.httpclient.get("http://localhost:9091/employees");
  // }
  // apipost(auth:authEmployee){
  //   return this.httpclient.post("http://localhost:9091/employee" + auth);
  // }
  // apigetbyId(Id:number): Observable<any>{
  //   return this.httpclient.get("http://localhost:9091/employee/id" +Id);
  // }
  // }



apiURL = 'http://localhost:9091';

  constructor(private http: HttpClient) {}

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  // getEmployees(): Observable<User> {
  //   return this.http
  //     .get<User>(this.apiURL + '/employees',{responseType:'json'})
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // HttpClient API get() method => Fetch employee
  // getEmployee(id: any): Observable<User> {
  //   return this.http
  //     .get<User>(this.apiURL + '/employee/id' + id)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  getEmployee(id:string):Observable<User>{
    return this.http.get<User>("http://localhost:9091/employee/:id"+id,{responseType:'json'});
  }

  getEmployees(): Observable<User> {
    return this.http.get<User>("http://localhost:9091/employees")
  }
 

  addProductToRemote(User: Object):Observable<Object>{
    return this.http.post<object>("http://localhost:9091/employee",User,{responseType:'json'});
  }
  createEmployee(authEmployee: Object):Observable<Object>{
    return this.http.post<object>("http://localhost:9091/login",authEmployee,{responseType:'json'});
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

 
