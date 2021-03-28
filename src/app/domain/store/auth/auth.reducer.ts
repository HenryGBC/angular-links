import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialAuthState: AuthState = {
  isLogged: false,
  loginData: null,
  isLoadingLogin: null,
  loginErrorMessage: null,
  signupData: null,
  isLoadingSignup: null,
  signupErrorMessage: null,
};

const authReducerInternal = createReducer(
  initialAuthState,
  on(authActions.loginAction, (state, { data }) => {
    return {
      ...state,
      loginData: data,
      isLoadingLogin: true,
    };
  }),
  on(authActions.loginSuccesAction, (state) => {
    return {
      ...state,
      loginData: null,
      isLogged: true,
      isLoadingLogin: false,
    };
  }),
  on(authActions.loginErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoadingLogin: false,
      loginErrorMessage: message,
    };
  }),
  on(authActions.logoutAction, (state) => {
    return {
      ...state,
      loginData: null,
      isLogged: false,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
