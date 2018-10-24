import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
  }

}
