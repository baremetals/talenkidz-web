import { AuthState, User } from 'src/interfaces';
import { FirebaseUserType } from 'src/lib/firebase';

export interface IAuthAction {
  type: string;
  //   payload: any;
  payload: {
    firebaseUser: FirebaseUserType;
    user: User;
    authenticated: boolean;
    loading: boolean;
  };
}

export const initialState = {
  user: null,
  firebaseUser: null,
  authenticated: false,
  loading: false,
//   error: ''
};

export const authReducer = (
  state: typeof initialState,
  action: { type: string; payload: AuthState }
) => {
  switch (action.type) {
    case 'SET_FIREBASE_USER':
      return {
        ...state,
        firebaseUser: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    // case 'SEND_ERROR':
    //   return {
    //     ...state,
    //     error: action.payload.error as string,
    //   };
    default:
      return {
        ...state,
      };
  }
};
