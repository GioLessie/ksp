import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { ConfirmComponent } from "../../components/confirm/confirm.component";
import { Employee } from "../../model/employees.model";
import { EmployeesService } from "../../services/employees.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  employee!: Employee;

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.employeesService.getbyId(id)))
      .subscribe((employee) => (this.employee = employee));
  }

  save() {
    this.employeesService.update(this.employee).subscribe((data) => {
      this.showSnack("Registro actualizado");
    });
  }

  delete() {
    this.dialog.open(ConfirmComponent, {
      width: '400px',
      data: {...this.employee}
    }).afterClosed().subscribe((res=>{
      if (res) {
        this.employeesService.delete(this.employee.id!).subscribe((data) => {
          this.showSnack("Registro eliminado");
          this.router.navigate(['/empleados'])
        });
      }
    }))
    
  }

  showSnack(mensaje: string) {
    this.snackbar.open(mensaje, "OK!", {
      duration: 2500,
    });
  }
}
