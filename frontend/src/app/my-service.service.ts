import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://api.example.com/data');
  }

  postData(data: any): Observable<any> {
    return this.http.post('https://api.example.com/data', data);
  }
}
