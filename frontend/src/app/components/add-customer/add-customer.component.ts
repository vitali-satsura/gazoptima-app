import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(
    public service: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getCustomer(id).subscribe(
        data => this.customer = data
      );
    }
  }

  saveCustomer(): void {
    this.service.saveCustomer(this.customer).subscribe(
      data => {
        this.router.navigateByUrl('/customers');
        this.notificationService.succes('Запись успешно добавлена');
      }
    );
  }

  onClear(): void {
    this.service.form.reset();
    this.service.intializeFormGroup();
  }

}
