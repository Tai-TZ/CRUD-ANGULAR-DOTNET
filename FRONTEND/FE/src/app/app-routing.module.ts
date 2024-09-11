import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/ListEmployee', pathMatch: 'full' },
  { path: 'ListEmployee', component: ListEmployeeComponent },
  { path: 'DetailEmployee/:id', component: DetailEmployeeComponent },
  { path: 'CreateEmployee', component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
