import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path, options?) {
    return this.http.get(path, options);
  }

  getEvents() {
    return this.get('events');
  }

}
