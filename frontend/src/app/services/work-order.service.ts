import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {map} from 'rxjs/operators';
import {WorkOrder} from '../models/work-order';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    typeOfWorkId: new FormControl(0, Validators.required),
    employeeId: new FormControl(0, Validators.required),
    customerId: new FormControl(0, Validators.required),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    price: new FormControl('')
  });

  intializeFormGroup():void {
    this.form.setValue({
      id: null,
      typeOfWorkId: 0,
      employeeId: 0,
      customerId: 0,
      startDate: '',
      endDate: '',
      price: ''
    });
  }

  getWorkOrders(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(`${this.baseUrl}workOrders`).pipe(
      map(response => response)
    );
  }

  saveWorkOrder(workOrder: WorkOrder): Observable<WorkOrder> {
    return this.http.post<WorkOrder>(`${this.baseUrl}addWorkOrder`, workOrder);
  }

  getWorkOrder(id: number): Observable<WorkOrder> {
    return this.http.get<WorkOrder>(`${this.baseUrl}workOrderById/${id}`).pipe(
      map(response => response)
    );
  }

  deleteWorkOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteWorkOrder/${id}`, {responseType: 'text'});
  }
}
