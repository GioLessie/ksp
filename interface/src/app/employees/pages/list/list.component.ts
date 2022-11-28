import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Employee } from '../../model/employees.model';
import { EmployeesService } from '../../services/employees.service';
import * as XLSX from 'xlsx';

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

  download(){
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, `employees-${this.title}.xlsx`);
  }
}
