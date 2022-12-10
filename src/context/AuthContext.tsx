import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, Dispatch, useEffect, useReducer } from 'react';
import { AuthUser } from 'src/interfaces';
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'src/lib/firebase';
import { addToMailingList } from 'src/lib/helpers';
import {
  authReducer,
  IAuthAction,
  IAuthState, initialState,
} from './authReducer';
import { v4 } from 'uuid';

type formProps = {
  email?: string;
  password: string;
  username?: string;
  fullName?: string;
  userType?: string;
};

type returnType = {
  success?: string;
  error?: string;
};

interface IAuthContext {
  registerNewUser: ({ ..._user }: formProps) => Promise<returnType | null>;
  loginUser: (
    _usernameOrEmail: string,
    _password: string
  ) => Promise<returnType | null>;
  loginWithProvider: (
    _access_token: string,
    _provider: string
  ) => Promise<returnType | null>;
  state: IAuthState;
  dispatch: Dispatch<IAuthAction>;
  signOutFirebaseUser: () => void;
  logUserOutFirebase: () => void;
}

const AuthContext = createContext<IAuthContext>({
  state: initialState,
  dispatch: () => null,
  registerNewUser: async () => null,
  loginUser: async () => null,
  loginWithProvider: async () => null,
  signOutFirebaseUser: () => null,
  logUserOutFirebase: async () => null,
});

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        if (state.firebaseUser === null) {
          dispatch({
            type: 'SET_FIREBASE_USER',
            payload: {
              ...state,
              firebaseUser: user,
            },
          });
        }
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      listen;
    };
  }, [dispatch, state]);

  const registerNewUser = async ({
    ...user
  }: formProps): Promise<returnType | null> => {
    return await axios
      .post('/api/auth', {
        data: {
          ...user,
          mailinglist: true,
          flag: 'REGISTER',
          firebasePassword: user.password,
        },
      })
      .then(async () => {
        // console.log('the response: ', res);
        await addToMailingList(user.email as string);
        return createUserWithEmailAndPassword(
          auth,
          user.email as string,
          user.password
        )
          .then(async () => {
            return { success: 'Successful registration' };
          })
          .catch((error) => {
            // console.log('firebase catchblock', error);
            const errorMessage = error.message;
            return { error: errorMessage };
          });
      })
      .catch((err) => {
        // console.log('strapi catchblock', err);
        const errorMessage = err.response.data.message;
        return { error: errorMessage };
      });
  };

  async function loginUser(
    usernameOrEmail: string,
    password: string
  ): Promise<returnType | null> {
    return await axios
      .post('/api/auth', {
        data: {
          usernameOrEmail,
          password,
          flag: 'LOGIN',
        },
      })
      .then(async (res: { data: { user: AuthUser } }) => {
        // console.log('the response: ', res);
        const userType = res.data.user.userType;
        const username = res.data.user.username;
        const firebaseUserId = res.data.user.firebaseUserId;
        return signInWithEmailAndPassword(
          auth,
          res.data.user.email as string,
          res.data.user.firebasePassword as string
        )
          .then(async (userCredential) => {
            const firebaseUser = userCredential.user;
            console.log(firebaseUser);
            if (firebaseUserId && firebaseUserId === ('not set' as string)) {
              await axios.post('/api/user/firebaseId', {
                data: {
                  firebaseUserId: firebaseUser.uid,
                },
              });
            }
            if (userType === 'organisation') {
              router.push(`/account/${username}`);
            }
            if (userType === 'candidate') {
              router.push(`/user-profile/${username}`);
            }
            return null;
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log('firebase catchblock', errorMessage);
            if (userType === 'organisation') {
              router.push(`/account/${username}`);
            }
            if (userType === 'candidate') {
              router.push(`/user-profile/${username}`);
            }
            return null;
          });
      })
      .catch((err) => {
        const error = err.response.data;
        let errorMessage = 'something went wrong please try again later';

        if (error.name === 'ValidationError') {
          errorMessage = 'incorrect details provided';
        }
        if (error.name === 'ApplicationError') {
          errorMessage = error.message;
        }
        // console.log('strapi catchblock', error);
        return { error: errorMessage };
      });
  }

  async function loginWithProvider(
    access_token: string,
    provider: string
  ): Promise<returnType | null> {
    return axios
      .post('/api/auth', {
        data: {
          access_token,
          provider,
          flag: 'CONNECT',
        },
      })
      .then(async (res: { data: { user: AuthUser } }) => {
        // console.log(res);
        const generatedToken = v4();
        const userType = res.data.user.userType;
        const email = res.data.user.email;
        const username = res.data.user.username;
        const firebasePassword =
          res.data.user.firebasePassword === null
            ? generatedToken
            : (res.data.user.firebasePassword as string);
        if (
          res.data.user.firebasePassword === null &&
          res.data.user.firebaseUserId == ('not set' as string)
        ) {
          await addToMailingList(email as string);
          return createUserWithEmailAndPassword(
            auth,
            email as string,
            firebasePassword
          )
            .then(async (userCredential) => {
              const firebaseUser = userCredential.user;
              // console.log(firebaseUser);
              await axios.post('/api/user/firebaseId', {
                data: {
                  firebaseUserId: firebaseUser.uid,
                  firebasePassword,
                  mailinglist: true,
                },
              });
              router.push(`/user-profile/${username}`);
              return {
                success:
                  'You have been successfully logged in. You will be redirected in a few seconds...',
              };
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log('firebase catchblock', errorMessage);
              router.push(`/user-profile/${username}`);
              return null;
            });
        } else {
          return signInWithEmailAndPassword(
            auth,
            email as string,
            firebasePassword as string
          )
            .then(async (_userCredential) => {
              // const firebaseUser = userCredential.user;
              // console.log(firebaseUser);
              if (userType === 'organisation') {
                router.push(`/account/${username}`);
              }
              if (userType === 'candidate') {
                router.push(`/user-profile/${username}`);
              }
              return {
                success:
                  'You have been successfully logged in. You will be redirected in a few seconds...',
              };
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log('firebase catchblock', errorMessage);
              if (userType === 'organisation') {
                router.push(`/account/${username}`);
              }
              if (userType === 'candidate') {
                router.push(`/user-profile/${username}`);
              }
              return null;
            });
        }
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        console.log('strapi catchblock', errorMessage);
        return { error: errorMessage };
      });
  }

  function signOutFirebaseUser() {
    signOut(auth);
  }

  async function logUserOutFirebase() {
    await axios.post('/api/auth', {
      data: {
        flag: 'LOGOUT',
      },
    }).then(() => {
      // console.log(res)
      signOutFirebaseUser();
      dispatch({
        type: 'SET_USER',
        payload: {
          ...state,
          user: null,
          authenticated: false,
        },
      });
      router.push('/auth/login');
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        registerNewUser,
        signOutFirebaseUser,
        loginUser,
        loginWithProvider,
        logUserOutFirebase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };