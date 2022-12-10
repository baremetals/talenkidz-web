import { AuthUser } from 'src/interfaces';
import { FirebaseUserType } from 'src/lib/firebase';

export interface IAuthAction {
  type: string;
  //   payload: any;
  payload: IAuthState;
}

export interface IAuthState {
  user: AuthUser | null;
  firebaseUser: FirebaseUserType | null;
  authenticated: boolean;
  loading: boolean;
  // error?: string;
}


export const initialState = {
  user: null,
  firebaseUser: null,
  authenticated: false,
  loading: false,
};

export const authReducer = (
  state: IAuthState,
  action: IAuthAction
) => {
  switch (action.type) {
    case 'SET_FIREBASE_USER':
      return {
        ...state,
        firebaseUser: action.payload.firebaseUser,
      };
    case 'SET_USER':
      return {
        ...state,
        authenticated: action.payload.authenticated,
        user: action.payload.user,
      };
    default:
      return {
        ...state,
      };
  }
};
