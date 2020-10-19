import {Component, OnInit, ViewChild} from '@angular/core';
import {Position} from '../../models/position';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {EmployeeService} from '../../services/employee.service';
import {PositionService} from '../../services/position.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  positions: Position[] = [];
  positon: Position;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'salary', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private  service: PositionService,
    private router: Router,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.getPositions().subscribe(
      data => {
        this.positions = data;
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

  deletePosition(id: number): void {
    if(confirm('Вы уверены что хотите удалить запись?')) {
      this.service.deletePosition(id).subscribe(
        data => {
          console.log('deleted response', data);
          this.router.navigateByUrl('/positons');
          this.notificationService.warn('Запись успешно удалена');
          this.dataSource.data = this.dataSource.data.filter((el) => el.id !== id);
        }
      );
    }
  }

}
