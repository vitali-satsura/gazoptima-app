import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {WorkOrder} from '../../models/work-order';
import {TypeOfWork} from '../../models/type-of-work';
import {Customer} from '../../models/customer';
import {WorkOrderService} from '../../services/work-order.service';
import {TypeOfWorkService} from '../../services/type-of-work.service';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-add-work-order',
  templateUrl: './add-work-order.component.html',
  styleUrls: ['./add-work-order.component.scss']
})
export class AddWorkOrderComponent implements OnInit {

  workOrder: WorkOrder = new WorkOrder();
  employees: Employee[];
  typeOfWorks: TypeOfWork[];
  customers: Customer[];

  constructor(
    public service: WorkOrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private typeOfWorkService: TypeOfWorkService,
    private customerService: CustomerService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getWorkOrder(id).subscribe(
        data => this.workOrder = data
      );
    }

    this.employeeService.getEmployees().subscribe(
      data => this.employees = data
    );

    this.customerService.getCustomers().subscribe(
      data => this.customers = data
    );

    this.typeOfWorkService.getTypeOfWorks().subscribe(
      data => this.typeOfWorks = data
    );
  }

  saveWorkOrder(): void {
    this.service.saveWorkOrder(this.workOrder).subscribe(
      data => {
        this.router.navigateByUrl('/workOrders');
        this.notificationService.succes('Запись успешно добавлена');
      }
    );
  }

  onClear(): void {
    this.service.form.reset();
    this.service.intializeFormGroup();
  }

}
