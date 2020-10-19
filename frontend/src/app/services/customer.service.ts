import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    address: new FormControl(''),
    phone: new FormControl('', Validators.required)
  });

  intializeFormGroup(): void {
    this.form.setValue({
      id: null,
      name: '',
      address: '',
      phone: ''
    });
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}customers`).pipe(
      map(response => response)
    );
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}addCustomer`, customer);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}customerById/${id}`).pipe(
      map(response => response)
    );
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteCustomer/${id}`, {responseType: 'text'});
  }
}
