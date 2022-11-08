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
  // console.log(baseUrl)

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

      res.status(200).json(resp.data.user.id);
    } catch (err: any) {
      console.log(
        'the fucking error print: ',
        err.response.data.error.message
      );
      if (err.response.data.error.message === 'Incorrect code provided'){
        res.status(401).json({ message: err.response.data.error.message });
      }
        res.status(401).json({ message: err.response });
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
