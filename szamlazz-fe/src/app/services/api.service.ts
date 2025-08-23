import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';
import { UserRequest, UserResponse } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Page } from '../models/page.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  getUsers(page: number = 0, size: number = 5): Observable<ApiResponse<Page<UserResponse>>> {
    return this.http.get<ApiResponse<Page<UserResponse>>>(`${this.baseUrl}/users`, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  
  getUserById(id: number): Observable<ApiResponse<UserResponse>> {
    return this.http.get<ApiResponse<UserResponse>>(`${this.baseUrl}/users/${id}`);
  }

   createUser(user: UserRequest): Observable<ApiResponse<UserResponse>> {
    return this.http.post<ApiResponse<UserResponse>>(`${this.baseUrl}/users`, user);
  }

   updateUser(id: number, user: UserRequest): Observable<ApiResponse<UserResponse>> {
    return this.http.put<ApiResponse<UserResponse>>(`${this.baseUrl}/users/${id}`, user);
  }
 
  deleteUser(id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}/users/${id}`);
  }
}