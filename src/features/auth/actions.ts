import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { AppDispatch } from 'src/app/store';
import { SignInData } from './authSpec';
import { setUser, setLoading } from './reducers';


// export const logIn = createAsyncThunk(
//   'users/signIn',
//   async (data: SignInData, store) => {
//     try {
//       const res = await signInWithEmailAndPassword(
//         firebaseAuth,
//         data.usernameOrEmail,
//         data.password
//       );
//       // console.log(res.user.uid);
//       // store.dispatch(getAllUserNotifications(res.user.uid));
//     } catch (err) {
//       console.log(err);
//       store.dispatch(setError(err.message));
//     }
//   }
// );

// const fetchUserById = createAsyncThunk<MyData,number,{
//     // Optional fields for defining thunkApi field types
//     dispatch: AppDispatch;
//     state: State;
//     extra: {
//       jwt: string;
//     };
//   }
// >('users/fetchById', async (userId, thunkApi) => {
//   const response = await fetch(`https://reqres.in/api/users/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${thunkApi.extra.jwt}`,
//     },
//   });
//   return (await response.json()) as MyData;
// });



// export const logOut = createAsyncThunk(
//   'users/signOut',
//   async (logOutMsg: string, store) => {
//     try {
//       store.dispatch(isLoading(true));
//       await signOut(firebaseAuth);
//       store.dispatch(isSuccess(logOutMsg));
//       console.log(logOutMsg);
//       return store.dispatch(signOutUser());
//     } catch (err) {
//       console.log(err);
//       store.dispatch(isLoading(false));
//     }
//   }
// );