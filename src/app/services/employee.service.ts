import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url = '../../assets/data/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || error);
 }

}
