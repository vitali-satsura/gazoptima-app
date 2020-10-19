import { Component, OnInit } from '@angular/core';
import {Position} from '../../models/position';
import {ActivatedRoute, Router} from '@angular/router';
import {PositionService} from '../../services/position.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent implements OnInit {

  positon: Position = new Position();

  constructor(
    public service: PositionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getPosition(id).subscribe(
        data => this.positon = data
      );
    }
  }

  savePosition(): void {
    this.service.savePosition(this.positon).subscribe(
      data => {
        this.router.navigateByUrl('/positions');
        this.notificationService.succes('Запись успешно добавлена');
      }
    );
  }

  onClear(): void {
    this.service.form.reset();
    this.service.intializeFormGroup();
  }

}
