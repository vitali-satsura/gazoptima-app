import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../models/employee';
import {Position} from '../../models/position';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {EmployeeService} from '../../services/employee.service';
import {PositionService} from '../../services/position.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {WorkOrder} from '../../models/work-order';
import {TypeOfWork} from '../../models/type-of-work';
import {Customer} from '../../models/customer';
import {WorkOrderService} from '../../services/work-order.service';
import {TypeOfWorkService} from '../../services/type-of-work.service';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit {

  workOrders: WorkOrder[];
  workOrder: WorkOrder;
  employees: Employee[] = [];
  typeOfWorks: TypeOfWork[];
  customers: Customer[];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'typeOfWork', 'employee', 'customer', 'startDate', 'endDate', 'price', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private  service: WorkOrderService,
    private employeeService: EmployeeService,
    private typeOfWorkService: TypeOfWorkService,
    private customerService: CustomerService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.service.getWorkOrders().subscribe(
      data => {
        this.workOrders = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      }
    );

    this.typeOfWorkService.getTypeOfWorks().subscribe(
      (data) => {
        this.typeOfWorks = data;
      }
    );

    this.customerService.getCustomers().subscribe(
      (data) => {
        this.customers = data;
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployee(id: number): string {
    const emp = this.employees.find((e) => e.id === id);
    return emp ? emp.fullName : '';
  }

  getTypeOfWork(id: number): string {
    const tow = this.typeOfWorks.find((t) => t.id === id);
    return tow ? tow.name : '';
  }

  getCustomer(id: number): string {
    const customer = this.customers.find((c) => c.id === id);
    return customer ? customer.name : '';
  }

  deleteWorkOrder(id: number): void {
    if(confirm('Вы уверены что хотите удалить запись?')) {
      this.service.deleteWorkOrder(id).subscribe(
        data => {
          console.log('deleted response', data);
          this.router.navigateByUrl('/workOrders');
          this.notificationService.warn('Запись успешно удалена');
          this.dataSource.data = this.dataSource.data.filter((el) => el.id !== id);
        }
      );
    }
  }

}
