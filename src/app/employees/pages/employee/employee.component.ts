import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Employee } from '../../model/employees.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee!: Employee;

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.employeesService.getbyId(id) )
      )
      .subscribe( employee => this.employee = employee ) 
  }

}
