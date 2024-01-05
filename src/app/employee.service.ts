import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Employee } from './employee';




//import { EmployeeListComponent } from './employee-list/employee-list.component';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  private baseURL = "http://localhost:9595/employees/get/all";
  private createmployees = "http://localhost:9595/employees/create";
  //private updateemployee = "http://localhost:9595/employees/update/{id}";
  private getemployeebyId = "http://localhost:9595/employees/get/{id}";
  private deleteemployee = "http://localhost:9595/employees/delete/{id}";
  

  

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.createmployees}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.getemployeebyId}/${id}`);
  }
  
  // updateEmployee(id: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.updateemployee}/${id}`,employee);
  // }
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete<Employee>(`${this.deleteemployee}/${id}`);
  }
  
  

  
}
