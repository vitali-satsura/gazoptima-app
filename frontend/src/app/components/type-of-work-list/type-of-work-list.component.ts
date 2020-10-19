import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {TypeOfWork} from '../../models/type-of-work';
import {TypeOfWorkService} from '../../services/type-of-work.service';

@Component({
  selector: 'app-type-of-work-list',
  templateUrl: './type-of-work-list.component.html',
  styleUrls: ['./type-of-work-list.component.scss']
})
export class TypeOfWorkListComponent implements OnInit {

  typeOfWorks: TypeOfWork[] = [];
  typeOfWork: TypeOfWork;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private  service: TypeOfWorkService,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.service.getTypeOfWorks().subscribe(
      data => {
        this.typeOfWorks = data;
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

  deleteTypeOfWork(id: number): void {
    if(confirm('Вы уверены что хотите удалить запись?')) {
      this.service.deleteTypeOfWork(id).subscribe(
        data => {
          console.log('deleted response', data);
          this.router.navigateByUrl('/typeOfWorks');
          this.notificationService.warn('Запись успешно удалена');
          this.dataSource.data = this.dataSource.data.filter((el) => el.id !== id);
        }
      );
    }
  }

}
