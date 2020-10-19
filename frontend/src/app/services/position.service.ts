import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Position} from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });

  intializeFormGroup(): void {
    this.form.setValue({
      id: null,
      name: '',
      salary: ''
    });
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}positions`).pipe(
      map(response => response)
    );
  }

  savePosition(position: Position): Observable<Position> {
    return this.http.post<Position>(`${this.baseUrl}addPosition`, position);
  }

  getPosition(id: number): Observable<Position> {
    return this.http.get<Position>(`${this.baseUrl}positionById/${id}`).pipe(
      map(response => response)
    );
  }

  deletePosition(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deletePosition/${id}`, {responseType: 'text'});
  }
}
