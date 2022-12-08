import { useRouter } from "next/router";
import { useContext, useEffect, useReducer } from "react";
import { useAppDispatch } from "src/app/hooks";
import { setUser } from "src/features/auth";
import axios from "axios";
import { AuthContext } from 'src/context/AuthContext';
import { authReducer, initialState } from 'src/context/authReducer';

export const useIsAuth = () => {
  const router = useRouter();
  // const dispatch = useAppDispatch();
  // const [state, dispatch] = useReducer(authReducer, initialState);
  const { state, dispatch } = useContext(AuthContext);

  console.log('outside useContext state: ', state)


  
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
            dispatch(setUser(me));
            dispatch({
              type: 'SET_USER',
              payload: {...me}
            });
            console.log('inside useContext state: ', state);
          }         
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const listen = getUser();

    return () => {
      listen
    }
  }, [router, dispatch]);
};

