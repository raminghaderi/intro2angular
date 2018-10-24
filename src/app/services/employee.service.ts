import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url = '../../assets/data/employees1.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
                    .pipe(
                      catchError(error => of(error.message))
                    );
  }
}
