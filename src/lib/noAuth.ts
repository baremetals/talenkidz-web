import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import { setUser } from "features/auth";
import axios from "axios";

export const useNoAuth = () => {
  const router = useRouter();
  useEffect(() => {
    let fetchUser = true
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
    if (fetchUser) {
      getUser();
    }
    return () => {
      fetchUser = false;
    }
  }, []);
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
    getUser();
  }, []);
};
