import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeService} from './services/employee.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {PositionService} from './services/position.service';
import {NotificationService} from './services/notification.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PositionListComponent } from './components/position-list/position-list.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddTypeOfWorkComponent } from './components/add-type-of-work/add-type-of-work.component';
import { TypeOfWorkListComponent } from './components/type-of-work-list/type-of-work-list.component';
import { WorkOrderListComponent } from './components/work-order-list/work-order-list.component';
import { AddWorkOrderComponent } from './components/add-work-order/add-work-order.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    NavbarComponent,
    PositionListComponent,
    AddPositionComponent,
    CustomerListComponent,
    AddCustomerComponent,
    AddTypeOfWorkComponent,
    TypeOfWorkListComponent,
    WorkOrderListComponent,
    AddWorkOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmployeeService,
    PositionService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
