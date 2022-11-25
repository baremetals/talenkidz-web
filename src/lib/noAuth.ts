import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "src/app/hooks";
import { setUser } from "src/features/auth";
import axios from "axios";

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
    getUser();
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
    getUser();
  });
};
