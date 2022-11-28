import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employees/model/employees.model';
import { EmployeesService } from '../../employees/services/employees.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  stringSearch: string = ""
  employees!: Employee[]

  constructor( 
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searching(){
    this.employeesService.getByQuery(this.stringSearch).subscribe((data)=>{
      this.employees = data
    })
  }

  optionSelected(event: any){
    this.router.navigate(['/empleados', event.option.value.id])
    this.stringSearch = event.option.value.title
  }
}
