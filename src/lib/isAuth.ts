import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "src/app/hooks";
import { setUser } from "src/features/auth";
import axios from "axios";

export const useIsAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  
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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [router, dispatch]);
};

