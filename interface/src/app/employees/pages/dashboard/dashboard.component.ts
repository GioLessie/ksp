import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employees.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  employeesTech!: Employee[]
  employeesRrhh!: Employee[]
  employeesMngm!: Employee[]

  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit(): void {
    this.employeesService.getByCategory('tech', 3)
      .subscribe( employees => {
        this.employeesTech = employees
      } ) 
    this.employeesService.getByCategory('rrhh', 3)
      .subscribe( employees => {
        this.employeesRrhh = employees
    } ) 
    this.employeesService.getByCategory('management', 3)
      .subscribe( employees => {
        this.employeesMngm = employees
    } ) 
  }

}
