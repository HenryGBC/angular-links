import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData, ITokenResponse } from '../core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(data: ILoginData): Observable<ITokenResponse> {
    return this._http.post<ITokenResponse>('login', data);
  }
}
