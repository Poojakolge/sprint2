import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{


//   id: number = 0; 
//   employee: Employee | undefined;
//   router: any;

//   constructor(private employeeService: EmployeeService
//     private route: ActivatedRoute,
        // private router : Router) { }
  
//   ngOnInit(): void {
//     this.employee = new Employee();
//     this.id= this.route.snapshot.params['id'];

//     this.employeeService.getEmployeeById(this.id).subscribe((data: any) => {
//       console.log(data)
//       this.employee = data;
//     }, (error: any) => {
//       console.log(error);
//     });

//   }
// }

//     onSubmit() {
//     this.employeeService.updateEmployee(this.id, this.employee).subscribe( () =>{
//       this.goToEmlpoyeeList();
      
//     }
//     ,(error: any) => console.log(error));
    
      
//   }

//   goToEmployeeList() {
//     this.router.navigate(['/employees']);

//   }


// }
//  

constructor() { }

ngOnInit(): void {
    
}

}
