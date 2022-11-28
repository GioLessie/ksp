import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from "./employees-routing.module";
import { MaterialModule } from "../material/material.module";
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EditComponent } from './pages/edit/edit.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    EmployeeCardComponent,
    DashboardComponent,
    NoImagePipe,
    EmployeeComponent,
    EditComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class EmployeesModule { }
