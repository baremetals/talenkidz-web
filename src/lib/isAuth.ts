import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'src/context/AuthContext';
// import { auth, onAuthStateChanged } from './firebase';

export const useIsAuth = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(AuthContext);


  useEffect(() => {
    const getUser = async () => {
      // console.log("I am here")
      await axios
        .post('/api/user')
        .then((res) => {
          if (!res?.data) {
            router.replace(`/${router.pathname}`);
          } else {
            const me = res?.data;
            // console.log(me);
            dispatch({
              type: 'SET_USER',
              payload: {
                ...state,
                user: me,
                authenticated: true,
              },
            });
            // console.log('inside useContext state: ', state);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const listen = getUser();

    return () => {
      listen;
    };
  }, [router, dispatch, state]);
};
