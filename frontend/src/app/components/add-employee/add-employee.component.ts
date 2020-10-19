import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PositionService} from '../../services/position.service';
import {NotificationService} from '../../services/notification.service';
import {Position} from '../../models/position';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  positions: Position[];

  constructor(
    public service: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private positionService: PositionService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getEmployee(id).subscribe(
        data => this.employee = data
      );
    }

    this.positionService.getPositions().subscribe(
      data => this.positions = data
    );
  }

  saveEmployee(): void {
    this.service.saveEmployee(this.employee).subscribe(
      data => {
        this.router.navigateByUrl('/employees');
        this.notificationService.succes('Запись успешно добавлена');
      }
    );
  }

  onClear(): void {
    this.service.form.reset();
    this.service.intializeFormGroup();
  }
}
