import { createAction, props } from '@ngrx/store';
import { ILink } from 'src/app/core/models/links.model';
import { IProfile } from 'src/app/core/models/user.model';

// export const loginAction = createAction(
//   '[Auth] LoginAction',
//   props<{ data: ILoginData }>()
// );

export const getProfileAction = createAction('[Home] GetProfileAction');
export const successProfileAction = createAction(
  '[Home] SuccessProfileAction',
  props<{ profile: IProfile }>()
);

export const getLinksAction = createAction('[Home] GetLinksAction');
export const successLinksAction = createAction(
  '[Home] SuccessLinksAction',
  props<{ links: ILink[] }>()
);
export const createLinkAction = createAction(
  '[Home] CreateLinkAction',
  props<{ link: ILink }>()
);

export const successLinkAction = createAction(
  '[Home] SuccessLinkAction',
  props<{ link: ILink }>()
);
export const errorLinkAction = createAction(
  '[Home] ErrorLinkAction',
  props<{ message: string }>()
);
export const clearFormAction = createAction('[Home] ClearFormAction');
