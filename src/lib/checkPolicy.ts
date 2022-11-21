import axios from 'axios';

export const useIsPolicy = async () => {
  console.log('I am running...');
  if (typeof window !== 'undefined') {
    await axios
      .post('/api/policy', { data: { flag: 'getCookie' } })
      .then((res) => {
        return res;
        //   console.log(res);
        // if (!res?.data) {
        //   router.replace(`/${router.pathname}`);
        // } else {
        //   const me = res?.data;
        //   // console.log(me);
        //   dispatch(setUser(me));
        // }
      })
      .catch((err) => {
        console.log('I am failing for some reason', err);
      });
  }
  // await axios
  //   .post('/api/policy', { data: { flag: 'getCookie' } })
  //   .then((res) => {
  //     console.log('res');
  //     // if (!res?.data) {
  //     //   router.replace(`/${router.pathname}`);
  //     // } else {
  //     //   const me = res?.data;
  //     //   // console.log(me);
  //     //   dispatch(setUser(me));
  //     // }
  //   })
  //   .catch((err) => {
  //     console.log('I am failing for some reason',err);
  //   });

  // useEffect(() => {
  //     // console.log('I am running the stuff...');
  //     const checkPolicy = async () => {
  //         console.log('I am the stuff...');
  //         await axios
  //           .post('/api/policy')
  //           .then((res) => {
  //             console.log(res);
  //             // if (!res?.data) {
  //             //   router.replace(`/${router.pathname}`);
  //             // } else {
  //             //   const me = res?.data;
  //             //   // console.log(me);
  //             //   dispatch(setUser(me));
  //             // }
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //     };
  //     checkPolicy()
  // }, [])
};
