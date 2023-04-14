import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from 'src/app/hooks';
import { setUser } from 'src/features/auth';

export const useNoAuth = () => {
  const router = useRouter();
  
  useEffect(() => {
    const getUser = async () => {
      await axios
        .post('/api/user')
        .then((res) => {
          if (res?.data?.id) {
            return router.back();
          }
        })
        .catch((_err) => {
          return;
        });
    };
    const listen = getUser();

    return () => {
      listen;
    };
  }, [router]);
};

export const useNoAuthPages = () => {
  const dispatch = useAppDispatch();
  const getUser = async () => {
    await axios
      .post("/api/user")
      .then((res) => {
        if (res?.data?.id) {
          const me = res?.data;
          dispatch(setUser(me));
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
