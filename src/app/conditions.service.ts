import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConditionsService {

  constructor(
    private http: HttpClient
  ) { }

  getConditions() {
    return this.http.get('/assets/conditions.json');
  }
}