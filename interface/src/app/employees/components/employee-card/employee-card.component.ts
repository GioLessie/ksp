import { Component, Input, OnInit } from "@angular/core";
import { Employee } from "../../model/employees.model";

@Component({
  selector: "app-employee-card",
  templateUrl: "./employee-card.component.html",
  styleUrls: ["./employee-card.component.scss"],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee = {
    photo: "",
    completeName: "",
    department: "",
    salary: "",
    status: "",
    admission: new Date(),
    beneficiary: {
      name: "",
      relationship: "",
      birthdate: new Date(),
    },
  };
  @Input() editable!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
