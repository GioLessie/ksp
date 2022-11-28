import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../model/employees.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Employee  
  ) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true)
  }

  cerrar(){
    this.dialogRef.close()
  }

}
