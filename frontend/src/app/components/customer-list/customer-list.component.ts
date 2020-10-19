import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  customer: Customer;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private  service: CustomerService,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.service.getCustomers().subscribe(
      data => {
        this.customers = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  deleteCustomer(id: number): void {
    if(confirm('Вы уверены что хотите удалить запись?')) {
      this.service.deleteCustomer(id).subscribe(
        data => {
          console.log('deleted response', data);
          this.router.navigateByUrl('/customers');
          this.notificationService.warn('Запись успешно удалена');
          this.dataSource.data = this.dataSource.data.filter((el) => el.id !== id);
        }
      );
    }
  }

}
