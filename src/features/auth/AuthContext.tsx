import axios from 'axios';
import { useRouter } from 'next/router';
import React, { createContext, useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { setFirebaseUser, signOutUser } from 'src/features/auth';
import { AuthUser } from 'src/interfaces';
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'src/lib/firebase';
import { addToMailingList } from 'src/helpers';
import { v4 } from 'uuid';
import { formProps, IAuthContext, returnType } from './authSpec';

import { isUser } from 'src/features/auth/selectors';
import { openModal } from '../modal';




const AuthContext = createContext<IAuthContext>({
  // state: initialState,
  // mState: initialState,
  firebaseUser: null,
  user: null,
  dispatch: () => null,
  registerNewUser: async () => null,
  loginUser: async () => null,
  loginWithProvider: async () => null,
  signOutFirebaseUser: () => null,
  logUserOut: async () => null,
});

const AuthProvider: React.FC = ({ children }) => {
  // const [state] = useReducer(authReducer, initialState);
  // const [mState] = useMemo((state) => ({ mState }));
  const dispatch = useAppDispatch();
  const { firebaseUser, user } = useAppSelector(isUser);
  // const mState = useMemo(() => ({ ...state }), [state]);
  // console.log(auth);

  const router = useRouter();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // console.log(user);
        const uid = user.uid;
        // const accessToken = user.accessToken;
        if (firebaseUser === null) {
          dispatch(
            setFirebaseUser({
              uid: uid,
              // accessToken: accessToken,
            })
          );
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
  }, [dispatch, firebaseUser]);

  const registerNewUser = async ({
    ...user
  }: formProps): Promise<returnType | null> => {
    return await axios
      .post('/api/auth', {
        data: {
          ...user,
          mailinglist: true,
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
        const firebaseError = 'Firebase: Error (auth/email-already-in-use).';
        const errorMessage = err.response.data.message;
        if (errorMessage === firebaseError) {
          return { error: 'email already in use' };
        }
        
        return { error: errorMessage };
      });
  };

  const loginUser = useCallback(
    async (usernameOrEmail: string, password: string): Promise<returnType | null> => {
      return await axios
        .post('/api/auth/login', {
          data: {
            usernameOrEmail,
            password,
            flag: 'LOGIN',
          },
        })
        .then(async (res: { data: { user: AuthUser } }) => {
          // console.log('the response: ', res);
          // const userType = res.data.user.userType;
          // const username = res.data.user.username;
          const firebaseUserId = res.data.user.firebaseUserId;
          // console.log(res.data.user.email);
          return signInWithEmailAndPassword(
            auth,
            res.data.user.email as string,
            res.data.user.firebasePassword as string
          )
            .then(async (userCredential) => {
              const firebaseUser = userCredential.user;
              // console.log(firebaseUser);
              if (firebaseUserId && firebaseUserId === ('not set' as string)) {
                await axios.post('/api/user/firebaseId', {
                  data: {
                    firebaseUserId: firebaseUser.uid,
                  },
                });
              }

              router.push(router.asPath === '/' ? '/account' : router.asPath);
              // if (userType === 'organisation') {
              //   router.push(`/account/${username}`);
              // }
              // if (userType === 'candidate') {
              //   router.push(`/user-profile/${username}`);
              // }
              return null;
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log('firebase catchblock', errorMessage);
              // if (userType === 'organisation') {
              //   router.push(`/account/${username}`);
              // }
              // if (userType === 'candidate') {
              //   router.push(`/user-profile/${username}`);
              // }
              router.push(router.asPath === '/' ? '/account' : router.asPath);
              return null;
            });
        })
        .catch((err) => {
          const error = err.response.data;
          // console.log('strapi catchblock', error);
          let errorMessage = 'something went wrong please try again later';

          if (error.name === 'ValidationError') {
            errorMessage = 'incorrect details provided';
          }
          if (error.name === 'ApplicationError') {
            errorMessage = error.message;
          }

          return { error: errorMessage };
        });
    },
    [router]
  );

  // async function loginUser(
  //   usernameOrEmail: string,
  //   password: string
  // ): Promise<returnType | null> {
  //   return await axios
  //     .post('/api/auth/login', {
  //       data: {
  //         usernameOrEmail,
  //         password,
  //         flag: 'LOGIN',
  //       },
  //     })
  //     .then(async (res: { data: { user: AuthUser } }) => {
  //       // console.log('the response: ', res);
  //       // const userType = res.data.user.userType;
  //       // const username = res.data.user.username;
  //       const firebaseUserId = res.data.user.firebaseUserId;
  //       // console.log(res.data.user.email);
  //       return signInWithEmailAndPassword(
  //         auth,
  //         res.data.user.email as string,
  //         res.data.user.firebasePassword as string
  //       )
  //         .then(async (userCredential) => {
  //           const firebaseUser = userCredential.user;
  //           // console.log(firebaseUser);
  //           if (firebaseUserId && firebaseUserId === ('not set' as string)) {
  //             await axios.post('/api/user/firebaseId', {
  //               data: {
  //                 firebaseUserId: firebaseUser.uid,
  //               },
  //             });
  //           }

  //           router.push(router.asPath === '/' ? '/account' : router.asPath);
  //           // if (userType === 'organisation') {
  //           //   router.push(`/account/${username}`);
  //           // }
  //           // if (userType === 'candidate') {
  //           //   router.push(`/user-profile/${username}`);
  //           // }
  //           return null;
  //         })
  //         .catch((error) => {
  //           const errorMessage = error.message;
  //           console.log('firebase catchblock', errorMessage);
  //           // if (userType === 'organisation') {
  //           //   router.push(`/account/${username}`);
  //           // }
  //           // if (userType === 'candidate') {
  //           //   router.push(`/user-profile/${username}`);
  //           // }
  //           router.push(router.asPath === '/' ? '/account' : router.asPath);
  //           return null;
  //         });
  //     })
  //     .catch((err) => {
  //       const error = err.response.data;
  //       console.log('strapi catchblock', error);
  //       let errorMessage = 'something went wrong please try again later';

  //       if (error.name === 'ValidationError') {
  //         errorMessage = 'incorrect details provided';
  //       }
  //       if (error.name === 'ApplicationError') {
  //         errorMessage = error.message;
  //       }
       
  //       return { error: errorMessage };
  //     });
  // }

  const createFirebaseAccount = useCallback(async (email: string, firebasePassword: string) => {
    await addToMailingList(email as string);
    return createUserWithEmailAndPassword(
      auth,
      email as string,
      firebasePassword
    )
      .then(async (userCredential) => {
        // console.log('=======> masssa');
        const firebaseUser = userCredential.user;
        // console.log(firebaseUser);
        await axios.post('/api/user/firebaseId', {
          data: {
            firebaseUserId: firebaseUser.uid,
            firebasePassword,
            mailinglist: true,
          },
        });
        
      })
      .catch((_error) => {
        // console.log('=======> jesus christ');
        // const errorMessage = error.message;
        // console.log('firebase catchblock', errorMessage);
        router.push(router.asPath === '/' ? '/account' : router.asPath);
        return null;
      });
  }, [router])

  const logIntoFirebaseAccount = useCallback(
    async (email: string, firebasePassword: string) => {
      return signInWithEmailAndPassword(
        auth,
        email as string,
        firebasePassword as string
      )
        .then(async (_userCredential) => {
          // console.log('=======> sleep');
          // const firebaseUser = userCredential.user;
          // console.log(firebaseUser);
          // if (userType === 'organisation') {
          //   router.push(`/account`);
          // }
          // if (userType === 'candidate') {
          //   router.push(`/user-profile/${username}`);
          // }
          
        })
        .catch((_error) => {
          // console.log('=======> fools');
          // const errorMessage = error.message;
          // console.log('firebase catchblock', errorMessage);
          router.push(`/account`);
          return null;
        });
    },
    [router]
  );

  const loginWithProvider = useCallback(
    async (
      access_token: string,
      provider: string
    ): Promise<returnType | null> => {
      try {
            const response = await axios.post('/api/auth/provider-login', {
              data: {
                access_token,
                provider,
              },
            });

        const user = response.data.user;
        const generatedToken = v4();
        const stripeCustomerId = user.stripeCustomerId;
        const notificationsSettings = user.notificationsSettings;
        const email = user.email;
        const name = user.fullName || user.username;

        if (stripeCustomerId === null) {
          const stripeResponse = await fetch('/api/user/stripe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name,
              email,
            }),
          }).then((res) => res.json());

          if (!stripeResponse.error) {
            await axios.post('/api/user/update', {
              data: {
                stripeCustomerId: stripeResponse.customerid,
                flag: 'stripe',
              },
            });
          }
        }
        if (
          notificationsSettings === null ||
          notificationsSettings === undefined
        ) {
          await axios.post('/api/user/update', {
            data: {
              notificationsSettings: {
                likes: true,
                account: true,
                comments: true,
                mailingList: true,
                bookmarkList: true,
                publishedPosts: true,
                recommendations: true,
                publishedEvents: true,
                publishedActivities: true,
              },
              flag: 'settings',
            },
          });
        }

        const firebasePassword =
          user.firebasePassword === null
            ? generatedToken
            : user.firebasePassword;

        if (
          user.firebasePassword === null &&
          user.firebaseUserId === 'not set'
        ) {
          await createFirebaseAccount(email as string, firebasePassword);
          router.push(router.asPath === '/' ? '/account' : router.asPath);
        } else {
          await logIntoFirebaseAccount(email as string, firebasePassword);
          router.push(`/account`);
        }

        return {
          success:
            'You have been successfully logged in. You will be redirected in a few seconds...',
        };
        
      } catch (error: any) {
        console.log(error);
        const errorMessage = error.response.data.message;
        return { error: errorMessage };
      }

      // return axios
      //   .post('/api/auth/provider-login', {
      //     data: {
      //       access_token,
      //       provider,
      //     },
      //   })
      //   .then(async (res: { data: { user: AuthUser } }) => {
      //     // console.log('=======> cunt');
      //     const generatedToken = v4();
      //     const stripeCustomerId = res.data.user.stripeCustomerId;
      //     const notificationsSettings = res.data.user.notificationsSettings;
      //     // console.log(stripeCustomerId)
      //     const email = res.data.user.email;
      //     const name = res.data.user.fullName || res.data.user.username;
      //     if (stripeCustomerId === null) {
      //       const stripe = await fetch('/api/user/stripe', {
      //         method: 'POST',
      //         headers: { 'Content-Type': 'application/json' },
      //         body: JSON.stringify({
      //           name,
      //           email,
      //         }),
      //       });
      //       const stripeResponse = await stripe.json();
      //       // console.log(stripeResponse);

      //       if (!stripeResponse.error) {
      //         await axios.post('/api/user/update', {
      //           data: {
      //             stripeCustomerId: stripeResponse.customerid,
      //             flag: 'stripe',
      //           },
      //         });
      //       }
      //     }
      //     if (
      //       notificationsSettings === null ||
      //       notificationsSettings === undefined
      //     ) {
      //       await axios.post('/api/user/update', {
      //         data: {
      //           notificationsSettings: {
      //             likes: true,
      //             account: true,
      //             comments: true,
      //             mailingList: true,
      //             bookmarkList: true,
      //             publishedPosts: true,
      //             recommendations: true,
      //             publishedEvents: true,
      //             publishedActivities: true,
      //           },
      //           flag: 'settings',
      //         },
      //       });
      //     }
      //     const firebasePassword =
      //       res.data.user.firebasePassword === null
      //         ? generatedToken
      //         : (res.data.user.firebasePassword as string);
      //     if (
      //       res.data.user.firebasePassword === null &&
      //       res.data.user.firebaseUserId == ('not set' as string)
      //     ) {
      //       // await addToMailingList(email as string);
      //       await createFirebaseAccount(email as string, firebasePassword);
      //       router.push(router.asPath === '/' ? '/account' : router.asPath);
      //       return {
      //         success:
      //           'You have been successfully logged in. You will be redirected in a few seconds...',
      //       };
            
      //     } else {
      //       await logIntoFirebaseAccount(email as string, firebasePassword);
      //       router.push(`/account`);
      //       return {
      //         success:
      //           'You have been successfully logged in. You will be redirected in a few seconds...',
      //       };
      //     }
      //   })
      //   .catch((err) => {
      //     // console.log('=======> wasteman');
      //     const errorMessage = err.response.data.message;
      //     // console.log('strapi catchblock', errorMessage);
      //     return { error: errorMessage };
      //   });
    },
    [createFirebaseAccount, logIntoFirebaseAccount, router]
  );

  

  // async function loginWithProviders(
  //   access_token: string,
  //   provider: string
  // ): Promise<returnType | null> {
  //   return axios
  //     .post('/api/auth/provider-login', {
  //       data: {
  //         access_token,
  //         provider,
  //       },
  //     })
  //     .then(async (res: { data: { user: AuthUser } }) => {
  //       const generatedToken = v4();
  //       const stripeCustomerId = res.data.user.stripeCustomerId;
  //       const notificationsSettings = res.data.user.notificationsSettings;
  //       // console.log(stripeCustomerId)
  //       const email = res.data.user.email;
  //       const name = res.data.user.fullName || res.data.user.username;
  //       if (stripeCustomerId === null) {
  //         const stripe = await fetch('/api/user/stripe', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({
  //             name,
  //             email,
  //           }),
  //         });
  //         const stripeResponse = await stripe.json();
  //         // console.log(stripeResponse);

  //         if (!stripeResponse.error) {
  //           await axios.post('/api/user/update', {
  //             data: {
  //               stripeCustomerId: stripeResponse.customerid,
  //               flag: 'stripe',
  //             },
  //           });
  //         }
  //       }
  //       if (notificationsSettings === null || notificationsSettings === undefined) {
  //         await axios.post('/api/user/update', {
  //           data: {
  //             notificationsSettings: {
  //               likes: true,
  //               account: true,
  //               comments: true,
  //               mailingList: true,
  //               bookmarkList: true,
  //               publishedPosts: true,
  //               recommendations: true,
  //               publishedEvents: true,
  //               publishedActivities: true,
  //             },
  //             flag: 'settings',
  //           },
  //         });
  //       }
  //       const firebasePassword =
  //         res.data.user.firebasePassword === null
  //           ? generatedToken
  //           : (res.data.user.firebasePassword as string);
  //       if (
  //         res.data.user.firebasePassword === null &&
  //         res.data.user.firebaseUserId == ('not set' as string)
  //       ) {
  //         await addToMailingList(email as string);
  //         return createUserWithEmailAndPassword(
  //           auth,
  //           email as string,
  //           firebasePassword
  //         )
  //           .then(async (userCredential) => {
  //             const firebaseUser = userCredential.user;
  //             // console.log(firebaseUser);
  //             await axios.post('/api/user/firebaseId', {
  //               data: {
  //                 firebaseUserId: firebaseUser.uid,
  //                 firebasePassword,
  //                 mailinglist: true,
  //               },
  //             });
  //             router.push(router.asPath);
  //             return {
  //               success:
  //                 'You have been successfully logged in. You will be redirected in a few seconds...',
  //             };
  //           })
  //           .catch((_error) => {
  //             // const errorMessage = error.message;
  //             // console.log('firebase catchblock', errorMessage);
  //             router.push(router.asPath);
  //             return null;
  //           });
  //       } else {
  //         return signInWithEmailAndPassword(
  //           auth,
  //           email as string,
  //           firebasePassword as string
  //         )
  //           .then(async (_userCredential) => {
  //             // const firebaseUser = userCredential.user;
  //             // console.log(firebaseUser);
  //             // if (userType === 'organisation') {
  //             //   router.push(`/account`);
  //             // }
  //             // if (userType === 'candidate') {
  //             //   router.push(`/user-profile/${username}`);
  //             // }
  //             router.push(`/account`);
  //             return {
  //               success:
  //                 'You have been successfully logged in. You will be redirected in a few seconds...',
  //             };
  //           })
  //           .catch((error) => {
  //             const errorMessage = error.message;
  //             console.log('firebase catchblock', errorMessage);
  //             router.push(`/account`);
  //             return null;
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       const errorMessage = err.response.data.message;
  //       console.log('strapi catchblock', errorMessage);
  //       return { error: errorMessage };
  //     });
  // }

  function signOutFirebaseUser() {
    signOut(auth);
  }

  const logUserOut = useCallback(async() => {
    await axios.get('/api/auth/logout')
    .then(() => {
      signOutFirebaseUser();
      dispatch(signOutUser());
      router.push('/');
      dispatch(openModal('LOGIN_FORM'))
    }).catch((err) => {
      console.log(err)
    })
  },[dispatch, router])

  const authFunctions = useMemo(() => {
    return {
      firebaseUser,
      user,
      dispatch,
      registerNewUser,
      signOutFirebaseUser,
      loginUser,
      loginWithProvider,
      logUserOut,
    };
  }, [dispatch, firebaseUser, logUserOut, loginUser, loginWithProvider, user]);

  return (
    <AuthContext.Provider
      value={
        authFunctions
        //   {
        //   firebaseUser,
        //   user,
        //   dispatch,
        //   registerNewUser,
        //   signOutFirebaseUser,
        //   loginUser,
        //   loginWithProvider,
        //   logUserOut,
        // }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
