import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {'id': 1, 'name': 'Ramin', 'age': 23},
      {'id': 2, 'name': 'Omid', 'age': 24},
      {'id': 3, 'name': 'Negin', 'age': 18}
    ];
  }
}
