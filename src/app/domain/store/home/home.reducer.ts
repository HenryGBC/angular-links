import { createReducer, on, Action } from '@ngrx/store';
import * as homeActions from './home.actions';
import { HomeState } from './home.state';

export const initialHomeState: HomeState = {
  profile: null,
  loadingProfile: true,
  linkData: null,
  loadingAddLogin: null,
  links: null,
  loadingLinks: true,
  linkErrorMessage: null,
  loadingAddLink: null,
};

const homeReducerInternal = createReducer(
  initialHomeState,
  on(homeActions.successProfileAction, (state, { profile }) => {
    return {
      ...state,
      profile,
      loadingProfile: false,
    };
  }),
  on(homeActions.successLinksAction, (state, { links }) => {
    return {
      ...state,
      links,
      loadingLinks: false,
    };
  }),
  on(homeActions.createLinkAction, (state, { link }) => {
    return {
      ...state,
      loadingAddLink: true,
    };
  }),
  on(homeActions.successLinkAction, (state, { link }) => {
    return {
      ...state,
      links: [link, ...state.links],
      loadingAddLink: false,
    };
  })
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return homeReducerInternal(state, action);
}
