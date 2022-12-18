// import { Dispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { AuthUser } from 'src/interfaces';
// import { FirebaseUserType } from 'src/lib/firebase';

export interface IAuthAction {
  type: string;
  payload: IAuthState;
}


export interface SignInData {
  usernameOrEmail: string;
  password: string;
}

export type formProps = {
  email?: string;
  password: string;
  username?: string;
  fullName?: string;
  userType?: string;
};

export interface IAuthState {
  user: AuthUser | null;
  firebaseUser: IFirebaseUser | null;
  authenticated: boolean;
  loading: boolean;
  // error?: string;
}

export interface IFirebaseUser {
  uid: string;
  // accessToken: string;
}

export type returnType = {
  success?: string;
  error?: string;
};

export interface IAuthContext {
  registerNewUser: ({ ..._user }: formProps) => Promise<returnType | null>;
  loginUser: (
    _usernameOrEmail: string,
    _password: string
  ) => Promise<returnType | null>;
  loginWithProvider: (
    _access_token: string,
    _provider: string
  ) => Promise<returnType | null>;
  // state: IAuthState;
  // mState: IAuthState;
  dispatch: Dispatch<IAuthAction>;
  signOutFirebaseUser: () => void;
  logUserOutFirebase: () => void;
  firebaseUser: IFirebaseUser | null;
  user: AuthUser | null;
}