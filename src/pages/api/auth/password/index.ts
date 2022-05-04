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
  fullName: string;
  avatar: string;
  backgroundImg: string;
  userType: string;
  jwt: string;
};

type org = {
  id: string;
  username: string;
  backgroundImg: string;
  userType: string;
  jwt: string;
  orgId: string;
  orgName: string;
  slug: string;
  logo: string;
  fullProfile: string;
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
        fullName: resp.data.user.fullName,
        avatar: resp.data.user.avatar,
        backgroundImg: resp.data.user.backgroundImg,
        userType: resp.data.user.userType,
        jwt: resp.data.jwt,
      };

      const org: org = {
        id: resp.data.user.id,
        username: resp.data.user.username,
        backgroundImg: resp.data.user.backgroundImg,
        userType: resp.data.user.userType,
        jwt: resp.data.jwt,
        orgId: resp.data.user.organisation.id,
        slug: resp.data.user.organisation.slug,
        orgName: resp.data.user.organisation.name,
        logo: resp.data.user.organisation.logo,
        fullProfile: resp.data.user.organisation.fullProfile,
      };

     if (resp.data.user.userType === 'candidate') {
       res.setHeader(
         'Set-Cookie',
         cookie.serialize(
           process.env.COOKIE_NAME as string,
           JSON.stringify(user),
           {
             httpOnly: true,
             secure: process.env.NODE_ENV !== 'development',
             maxAge: 60 * 60 * 24 * 5, // 2 days
             sameSite: 'strict',
             path: '/',
           }
         )
       );
     } else {
       res.setHeader(
         'Set-Cookie',
         cookie.serialize(
           process.env.COOKIE_NAME as string,
           JSON.stringify(org),
           {
             httpOnly: true,
             secure: process.env.NODE_ENV !== 'development',
             maxAge: 60 * 60 * 24 * 2, // 2 days
             sameSite: 'strict',
             path: '/',
           }
         )
       );
     }
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
