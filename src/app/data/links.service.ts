import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData, ITokenResponse } from '../core/models/auth.model';
import { ILink } from '../core/models/links.model';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor(private _http: HttpClient) {}

  login(data: ILoginData): Observable<ITokenResponse> {
    return this._http.post<ITokenResponse>('login', data);
  }

  getLinks(): Observable<ILink[]> {
    return this._http.get<ILink[]>('links');
  }

  addLink(link: ILink) {
    return this._http.post('links', link);
  }
}
