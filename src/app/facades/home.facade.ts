import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILoginData } from '../core/models/auth.model';
import { ILink } from '../core/models/links.model';
import { IProfile } from '../core/models/user.model';
import {
  getLinksAction,
  getProfileAction,
  createLinkAction,
} from '../domain/store/home/home.actions';
import * as homeSelectors from '../domain/store/home/home.selectors';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  isLoadingProfile$: Observable<boolean>;
  isLoadingLinks$: Observable<boolean>;
  profile$: Observable<IProfile>;
  links$: Observable<ILink[]>;
  loaderAddLink$: Observable<boolean>;
  // loginError$: Observable<string>;
  constructor(private _store: Store) {
    this.isLoadingProfile$ = this._store.select(
      homeSelectors.selectLoadingProfile
    );
    this.isLoadingLinks$ = this._store.select(homeSelectors.selectLoadingLinks);
    this.profile$ = this._store.select(homeSelectors.selectProfile);
    this.links$ = this._store.select(homeSelectors.selectLinks);
    this.loaderAddLink$ = this._store.select(homeSelectors.selectLoaderAddLink);
  }

  getProfile() {
    this._store.dispatch(getProfileAction());
  }
  getLinks() {
    this._store.dispatch(getLinksAction());
  }

  createLink(link: ILink) {
    this._store.dispatch(createLinkAction({ link }));
  }
}
