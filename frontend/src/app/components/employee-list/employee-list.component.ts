import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee';
import {Position} from '../../models/position';
import {PositionService} from '../../services/position.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;
  positions: Position[] = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'fullName', 'address', 'phone', 'dateOfBirth', 'position', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private  service: EmployeeService,
    private positionService: PositionService,
    private router: Router,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      data => {
        // setTimeout(() => {
        //   this.employees = data;
        //   this.dataSource = new MatTableDataSource(this.employees);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //
        // }, 1000);
        this.employees = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    this.positionService.getPositions().subscribe(
      (data) => {
        this.positions = data;
        console.log(this.positions);
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

  getPositon(id: number): string {
    const pos = this.positions.find((p) => p.id === id);
    return pos ? pos.name : '';
  }

  deleteEmployee(id: number): void {
    if(confirm('Вы уверены что хотите удалить запись?')) {
      this.service.deleteEmployee(id).subscribe(
        data => {
          console.log('deleted response', data);
          this.router.navigateByUrl('/employees');
          this.notificationService.warn('Запись успешно удалена');
          this.dataSource.data = this.dataSource.data.filter((el) => el.id !== id);
        }
      );
    }
  }
}
