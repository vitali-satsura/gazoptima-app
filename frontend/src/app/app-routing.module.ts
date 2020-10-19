import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {PositionListComponent} from './components/position-list/position-list.component';
import {AddPositionComponent} from './components/add-position/add-position.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';
import {AddCustomerComponent} from './components/add-customer/add-customer.component';
import {TypeOfWorkListComponent} from './components/type-of-work-list/type-of-work-list.component';
import {AddTypeOfWorkComponent} from './components/add-type-of-work/add-type-of-work.component';
import {WorkOrderListComponent} from './components/work-order-list/work-order-list.component';
import {AddWorkOrderComponent} from './components/add-work-order/add-work-order.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'editEmployee/:id', component: AddEmployeeComponent},
  {path: 'positions', component: PositionListComponent},
  {path: 'addPosition', component: AddPositionComponent},
  {path: 'editPosition/:id', component: AddPositionComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'addCustomer', component: AddCustomerComponent},
  {path: 'editCustomer/:id', component: AddCustomerComponent},
  {path: 'typeOfWorks', component: TypeOfWorkListComponent},
  {path: 'addTypeOfWork', component: AddTypeOfWorkComponent},
  {path: 'editTypeOfWork/:id', component: AddTypeOfWorkComponent},
  {path: 'workOrders', component: WorkOrderListComponent},
  {path: 'addWorkOrder', component: AddWorkOrderComponent},
  {path: 'editWorkOrder/:id', component: AddWorkOrderComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
