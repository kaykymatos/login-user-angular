import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { IUserLogin } from '../interfaces/IUserLogin';
import { IToken } from '../interfaces/IToken';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private http = inject(HttpClient);
  private url = environment.apiUrl;
  
  public createUser$(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}/user`, { user });
  }
  public getInfoUser$(token: string): Observable<IUser> {

    return this.http.get<IUser>(`http://localhost:3000/api/v1/user/info`,
      { headers: new HttpHeaders().set('Authorization', `${token}`) });
  }
  public loginUser$(user: IUserLogin): Observable<IToken> {
    return this.http.post<IToken>(`http://localhost:3000/api/v1/user/login`, { user });
  }
}
