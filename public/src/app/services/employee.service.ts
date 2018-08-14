import { Injectable } from '@angular/core';
import { Employee } from '../enities/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  subscribe(employee:Employee){
    return this.http.post('http://localhost:3000/employee/inscription',employee)
  }
}

