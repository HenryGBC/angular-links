import { ILoginData, ISignupData } from 'src/app/core/models/auth.model';

export interface AuthState {
  isLogged: boolean;
  loginData: ILoginData | null;
  isLoadingLogin: boolean | null;
  loginErrorMessage: string | null;
  signupData: ISignupData | null;
  isLoadingSignup: boolean | null;
  signupErrorMessage: string | null;
}
