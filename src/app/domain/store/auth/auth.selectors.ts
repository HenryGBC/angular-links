import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const getAuthFeatureState = createFeatureSelector('auth');

export const selectIsLoadingLogin = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoadingLogin
);
export const selectLoginError = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.loginErrorMessage
);

export const selectIsLoadingSignup = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoadingSignup
);
export const selectSignupError = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.signupErrorMessage
);
