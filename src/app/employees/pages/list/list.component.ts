import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Employee } from '../../model/employees.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title!: string;
  employees: Employee[] = []

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => {
          this.title = id
          return this.employeesService.getByCategory(id,9)
        } )
      )
      .subscribe( employees => {
        this.employees = employees
      } ) 
  }
}
