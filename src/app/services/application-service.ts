import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  public getAllApplications() {
    return this.http.get<Application[]>(
      'https://localhost:5001/api/v1/Applications'
    );
  }

  public getApplication(id: number) {
    var url = `https://localhost:5001/api/v1/Applications/${id}`;
    console.log(url);
    return this.http.get<Application>(url);
  }
}
