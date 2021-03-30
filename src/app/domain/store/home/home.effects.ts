import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as homeActions from './home.actions';

import { AuthService } from 'src/app/data/auth.service';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/data/user.service';
import { LinksService } from 'src/app/data/links.service';

@Injectable()
export class HomeEffects {
  constructor(
    private _userService: UserService,
    private _linksService: LinksService,
    private actions$: Actions,
    private _router: Router
  ) {}

  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.getProfileAction),
      switchMap((action) =>
        this._userService.getUser().pipe(
          map((profile) => {
            return homeActions.successProfileAction({ profile });
          })
        )
      )
    )
  );
  getLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.getLinksAction),
      switchMap((action) =>
        this._linksService.getLinks().pipe(
          map((links) => {
            return homeActions.successLinksAction({ links });
          })
        )
      )
    )
  );
  createLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.createLinkAction),
      switchMap((action) =>
        this._linksService.addLink(action.link).pipe(
          map((response) => {
            console.log(response);
            return homeActions.successLinkAction({ link: action.link });
          })
        )
      )
    )
  );
  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(authActions.loginAction),
  //     exhaustMap((action) =>
  //       this._authService.login(action.data).pipe(
  //         map((response) => {
  //           localStorage.setItem('links.token', response.token);
  //           return authActions.loginSuccesAction();
  //         }),
  //         catchError((error) =>
  //           of(authActions.loginErrorAction({ message: 'sda' }))
  //         )
  //       )
  //     )
  //   )
  // );

  // loginSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(authActions.loginSuccesAction),
  //       tap((_) => {
  //         this._router.navigateByUrl('home');
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
