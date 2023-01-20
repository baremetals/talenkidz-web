import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from './authSpec';



export const initialState: IAuthState = {
  user: null,
  firebaseUser: null,
  authenticated: false,
  loading: false,
  // error: '',
  // success: '',
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    },
    setFirebaseUser: (state, action) => {
      return {
        ...state,
        firebaseUser: action.payload,
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    signOutUser: (state) => {
      return {
        ...state,
        user: null,
        firebaseUser: null,
        authenticated: false,
        loading: false,
      };
    },
  },
});

export const { setUser, setFirebaseUser, setLoading, signOutUser } = authSlice.actions;

export default authSlice.reducer;
