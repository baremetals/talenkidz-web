import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  resp?: any;
};

type user = {
  id: string;
  username: string;
  // eslint-disable-next-line camelcase
  avatar: string;
  // eslint-disable-next-line camelcase
  backgroundImg: string;
  jwt: string;
};

export default async function passwordReset(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  if (data.flag === 'FORGOTPASSWORD') {
    try {
      const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/forgot-password`,
        data: {
          email: data.email,
        },
      });

      res.status(200).json({ resp: resp.data });
    } catch (err: any) {
      // console.log(err.response.data);
      res.status(401).json({ message: err.response.data.error.message });
    }
  }  
  
  if (data.flag === 'RESETPASSWORD') {
    try {
      console.log('I am resetting my password');
      const { code, password, passwordConfirmation } = data;
      const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/reset-password`,
        data: {
          code,
          password,
          passwordConfirmation,
        },
      });

      const user: user = {
        id: resp.data.user.id,
        username: resp.data.user.username,
        avatar: resp.data.user.avatar,
        backgroundImg: resp.data.user.backgroundImg,
        jwt: resp.data.jwt,
      };

      res.setHeader(
        'Set-Cookie',
        cookie.serialize(
          process.env.COOKIE_NAME as string,
          JSON.stringify(user),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 2, // 2 days
            sameSite: 'strict',
            path: '/',
          }
        )
      );
      res.send(resp.data.user);
    } catch (err: any) {
      // console.log(err.response.data.message);
      res.status(401).json({ message: err.response.data.error.message });
    }
  } 
  
  // if (data.flag === 'RESENDEMAILCONFIRMATION') {

  //   try {
  //     console.log('I need new email confirmation');
  //     await axios({
  //       method: 'POST',
  //       url: `${baseUrl}/auth/send-email-confirmation`,
  //       data: {
  //         email: req.body.data.email,
  //       },
  //     });

  //     // console.log(response)
  //     res.status(200).json({ message: 'Successfuly registered!' });
  //   } catch (err: any) {
  //     console.log(err.response.data.error.message);
  //     res.status(401).json({ message: err.response.data.error.message });
  //   }
  // }
}
