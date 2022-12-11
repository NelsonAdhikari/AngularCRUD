

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrlEndPoint: string = '/user';
  baseUrl: string = environment.baseUrl;

  constructor(
    private httpClient : HttpClient,
    private router: Router
  ) { }

  onAddUser(user:any):Observable<any>{
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiUrlEndPoint),user
    );
  }

  listAllUsers():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl.concat(this.apiUrlEndPoint))
  }

  deleteUserById(id: any): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/user/' + `${id}`);
  }

  getUserDetailsByUserId(id: number) : Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/user/' + `${id}`);
  }

  editUserDetailsByUserId(id: number, user: any) : Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/user/' + `${id}`, user);
  }
  
}