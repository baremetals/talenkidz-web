import axios from 'axios';
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
// import { addToMailingList } from 'src/lib/helpers';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

// console.log('baseUrl', baseUrl)
type Data = {
  message?: string;
  resp?: string;
  jwt?: string;
  email?: string;
  username?: string;
  id?: string;
  name?: string;
  user?: user
};

type user = {
  id: string;
  email: string;
  bio: string;
  provider: string;
  username: string;
  fullName: string;
  avatar: string;
  userType: string;
  jwt: string;
  orgName?: string;
  orgType?: string;
  website?: string;
};



export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  function setTheCookie(user: user) {
    return res.setHeader(
      'Set-Cookie',
      cookie.serialize(
        process.env.COOKIE_NAME as string,
        JSON.stringify(user),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 5, // 5 days
          sameSite: 'strict',
          path: '/',
        }
      )
    );
  }
  
  // console.log(data, 'I am here');

  // Register request
  if (data.flag === 'REGISTER') {
    try {
      // console.log('register me!', baseUrl);
      await axios({
        method: 'POST',
        url: `${baseUrl}/auth/local/register`,
        data: {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          userType: data.userType,
          username: data.username,
          mailinglist:data.mailinglist,
          firebasePassword: data.firebasePassword,

          // organisationName: data.organisationName || "",
        },
      });
      
      res.status(200).json({ message: 'Registration successful' });
    } catch (err: any) {
      // console.log(err.response.data.error.message);
      res.status(401).json({ message: err.response.data.error.message });
    }
  }
  

  if (data.flag === 'CONNECT') {
    // console.log('the data: ');
    try {
      const response = await fetch(
        `${baseUrl}/auth/${data?.provider}/callback?access_token=${data?.access_token}`
      );
      const auth = await response.json();
      const authData = {
        jwt: auth.jwt,
        id: auth.user.id,
      };
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/user/org`,
        {
          method: 'POST',
          body: JSON.stringify(authData),
        }
      );
      const org = await resp.json();

      const user: user = {
        id: auth.user.id,
        username: auth.user.username,
        fullName: auth.user.fullName,
        avatar: auth.user.avatar,
        userType: auth.user.userType,
        jwt: auth.jwt,
        email: auth.user.email,
        bio: auth.user.bio,
        provider: auth.user.provider,
        orgName: org.data.organisation == null ? "" : org.data.organisation.name,
        orgType: org.data.organisation == null ? "" : org.data.organisation.organisationType,
        website: org.data.organisation == null ? "" : org.data.organisation.website,
      };

      setTheCookie(user);
      res.status(200).json({ user: auth.user });
    } catch (err: any) {
      console.log(err);
      res.send(err.response);
    }
  }

}
