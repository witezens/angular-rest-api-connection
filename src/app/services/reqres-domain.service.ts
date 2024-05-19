import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReqresDomainService {
  constructor(private httpClient: HttpClient) { }

  private BASE_URL: string = 'https://reqres.in/api';

  getUsersList(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/users`)
    .pipe(res => res)
  }

  getUserById(id: string): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/users/${id}`)
    .pipe(res => res)
  }
}
