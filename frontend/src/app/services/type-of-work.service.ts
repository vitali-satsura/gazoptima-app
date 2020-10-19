import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TypeOfWork} from '../models/type-of-work';

@Injectable({
  providedIn: 'root'
})
export class TypeOfWorkService {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required)
  });

  intializeFormGroup(): void {
    this.form.setValue({
      id: null,
      fullName: ''
    });
  }

  getTypeOfWorks(): Observable<TypeOfWork[]> {
    return this.http.get<TypeOfWork[]>(`${this.baseUrl}typeOfWorks`).pipe(
      map(response => response)
    );
  }

  saveTypeOfWork(typeOfWork: TypeOfWork): Observable<TypeOfWork> {
    return this.http.post<TypeOfWork>(`${this.baseUrl}addTypeOfWork`, typeOfWork);
  }

  getTypeOfWork(id: number): Observable<TypeOfWork> {
    return this.http.get<TypeOfWork>(`${this.baseUrl}typeOfWorkById/${id}`).pipe(
      map(response => response)
    );
  }

  deleteTypeOfWork(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteTypeOfWork/${id}`, {responseType: 'text'});
  }
}
