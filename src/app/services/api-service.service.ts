import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { IUserLogin } from '../interfaces/IUserLogin';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private http =inject(HttpClient);
  private url = environment.apiUrl;

  public createUser$(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}/user`, { user });
  }
  
  public loginUser$(user: IUserLogin): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}/user/login`, { user });
  }
}
