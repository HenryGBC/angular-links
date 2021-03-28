import { createAction, props } from '@ngrx/store';
import { ILoginData, ISignupData } from 'src/app/core/models/auth.model';

export const loginAction = createAction(
  '[Auth] LoginAction',
  props<{ data: ILoginData }>()
);
export const loginSuccesAction = createAction('[Auth] LoginSuccesAction');
export const logoutAction = createAction('[Auth] LogoutAction');

export const loginErrorAction = createAction(
  '[Auth] LoginErrorAction',
  props<{ message: string }>()
);

export const singupAction = createAction(
  '[Auth] SingupAction',
  props<{ data: ISignupData }>()
);
export const signupSuccesAction = createAction('[Auth] SignupSuccesAction');
export const signupErrorAction = createAction(
  '[Auth] SignupErrorAction',
  props<{ message: string }>()
);
