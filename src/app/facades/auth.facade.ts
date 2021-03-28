import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILoginData } from '../core/models/auth.model';
import {
  loginAction,
  loginErrorAction,
} from '../domain/store/auth/auth.actions';
import * as authSelectors from '../domain/store/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  isLoadinLogin$: Observable<boolean>;
  loginError$: Observable<string>;
  constructor(private _store: Store) {
    this.isLoadinLogin$ = this._store.select(
      authSelectors.selectIsLoadingLogin
    );
    this.loginError$ = this._store.select(authSelectors.selectLoginError);
  }

  login(data: ILoginData) {
    this._store.dispatch(loginAction({ data }));
  }

  setErrorLogin(message: string) {
    this._store.dispatch(loginErrorAction({ message }));
  }
}
