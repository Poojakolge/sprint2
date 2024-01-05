import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = 0
  employee !: Employee;
  constructor(private router: ActivatedRoute, private employeeServices: EmployeeService) {
    
   }

  ngOnInit(): void {
      this.id = this.router.snapshot.params['id'];

      this.employee = new Employee();
      this.employeeServices.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      });
  }

}
