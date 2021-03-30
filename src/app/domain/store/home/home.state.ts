import { ILink } from 'src/app/core/models/links.model';
import { IProfile } from 'src/app/core/models/user.model';

export interface HomeState {
  profile: IProfile | null;
  loadingProfile: boolean | null;
  linkData: ILink | null;
  loadingAddLogin: boolean | null;
  links: ILink[] | null;
  loadingLinks: boolean | null;
  linkErrorMessage: string | null;
  loadingAddLink: boolean | null;
}
