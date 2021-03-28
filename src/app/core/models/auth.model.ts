export interface ILoginData {
  email: string;
  password: string;
}

export interface ISignupData {
  fullName: string;
  email: string;
  password: string;
}

export interface ITokenResponse {
  token: string;
}
