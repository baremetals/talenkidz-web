import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from 'src/context/AuthContext';

export const useNoAuth = () => {
  const router = useRouter();
  
  useEffect(() => {
    const getUser = async () => {
      await axios
        .post('/api/user')
        .then((res) => {
          if (res?.data?.id) {
            router.back();
          }
        })
        .catch((_err) => {
          return;
        });
    };
   return () => {
      getUser();
   };
  }, [router]);
};

export const useNoAuthPages = () => {
  const { state, dispatch } = useContext(AuthContext);
  const getUser = async () => {
    await axios
      .post("/api/user")
      .then((res) => {
        if (res?.data?.id) {
          const me = res?.data;
          dispatch({
            type: 'SET_USER',
            payload: {
              ...state,
              user: me,
              authenticated: true,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const listen = getUser();

    return () => {
      listen;
    };
  });
};
