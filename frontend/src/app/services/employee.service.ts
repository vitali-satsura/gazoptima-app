import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('', Validators.required),
    positionId: new FormControl(0)
  });

  intializeFormGroup():void {
    this.form.setValue({
      id: null,
      fullName: '',
      dateOfBirth: '',
      address: '',
      phone: '',
      positionId: 0
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}employees`).pipe(
      map(response => response)
    );
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}addEmployee`, employee);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}employeeById/${id}`).pipe(
      map(response => response)
    );
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteEmployee/${id}`, {responseType: 'text'});
  }
}
