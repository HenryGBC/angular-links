import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { AuthService } from 'src/app/data/auth.service';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private _authService: AuthService,
    private actions$: Actions,
    private _router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAction),
      exhaustMap((action) =>
        this._authService.login(action.data).pipe(
          map((response) => {
            localStorage.setItem('links.token', response.token);
            return authActions.loginSuccesAction();
          }),
          catchError((error) =>
            of(authActions.loginErrorAction({ message: 'sda' }))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccesAction),
        tap((_) => {
          this._router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logoutAction),
        tap((_) => {
          localStorage.removeItem('links.token');
          this._router.navigateByUrl('auth/login');
        })
      ),
    { dispatch: false }
  );
}
