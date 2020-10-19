import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {TypeOfWork} from '../../models/type-of-work';
import {TypeOfWorkService} from '../../services/type-of-work.service';

@Component({
  selector: 'app-add-type-of-work',
  templateUrl: './add-type-of-work.component.html',
  styleUrls: ['./add-type-of-work.component.scss']
})
export class AddTypeOfWorkComponent implements OnInit {

  typeOfWork: TypeOfWork = new TypeOfWork();

  constructor(
    public service: TypeOfWorkService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getTypeOfWork(id).subscribe(
        data => this.typeOfWork = data
      );
    }
  }

  saveTypeOfWork(): void {
    this.service.saveTypeOfWork(this.typeOfWork).subscribe(
      data => {
        this.router.navigateByUrl('/typeOfWorks');
        this.notificationService.succes('Запись успешно добавлена');
      }
    );
  }

  onClear(): void {
    this.service.form.reset();
    this.service.intializeFormGroup();
  }

}
