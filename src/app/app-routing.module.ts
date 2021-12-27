import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"user",component:EmployeeComponent},
  {path:"create",component:CreateEmployeeComponent},
  {path:"update/:id",component:CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
