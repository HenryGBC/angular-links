import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.state';

// import { AuthState } from './auth.state';

export const getHomeFeatureState = createFeatureSelector('home');

export const selectLoadingProfile = createSelector(
  getHomeFeatureState,
  (state: HomeState) => state.loadingProfile
);
export const selectProfile = createSelector(
  getHomeFeatureState,
  (state: HomeState) => state.profile
);
export const selectLoadingLinks = createSelector(
  getHomeFeatureState,
  (state: HomeState) => state.loadingLinks
);
export const selectLinks = createSelector(
  getHomeFeatureState,
  (state: HomeState) => state.links
);
export const selectLoaderAddLink = createSelector(
  getHomeFeatureState,
  (state: HomeState) => state.loadingAddLink
);
// export const getAuthFeatureState = createFeatureSelector('auth');

// export const selectIsLoadingLogin = createSelector(
//   getAuthFeatureState,
//   (state: AuthState) => state.isLoadingLogin
// );
