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
  user?: user | org;
};

type user = {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  backgroundImg: string;
  userType: string;
  jwt: string;
  orgName?: string;
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

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  function setTheCookie(user: user | org) {
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
  // Login request
  if (data.flag === 'LOGIN') {
    const { usernameOrEmail, password } = data;
    // console.log(baseUrl);

    try {
      // console.log("failing here");
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/local`,
        data: { identifier: usernameOrEmail, password },
      });

      if (response.data.user.userType === 'candidate') {
        const user: user = {
          id: response.data.user.id,
          username: response.data.user.username,
          fullName: response.data.user.fullName,
          avatar: response.data.user.avatar,
          backgroundImg: response.data.user.backgroundImg,
          userType: response.data.user.userType,
          jwt: response.data.jwt,
        };
        setTheCookie(user)
      } else {
        const org: org = {
          id: response.data.user.id,
          username: response.data.user.username,
          backgroundImg: response.data.user.backgroundImg,
          userType: response.data.user.userType,
          jwt: response.data.jwt,
          orgId: response.data.user.organisation.id,
          slug: response.data.user.organisation.slug,
          orgName: response.data.user.organisation.name,
          logo: response.data.user.avatar,
          fullProfile: response.data.user.organisation.fullProfile,
        };
        setTheCookie(org);
      }

      // console.log(response);
        
      // res.send(response.data.user);
      res.status(200).json({ user: response.data.user });
    } catch (err: any) {
      // console.log(err.response.data);
      // res.send(err.response.data);
      res.status(401).json({ message: err.response.data.error.message, name: err.response.data.error.name  });
    }
  }

  if (data.flag === 'CONNECT') {
    // console.log('the data: ');
    try {

      const response =  await fetch(
        `${baseUrl}/auth/${data?.provider}/callback?access_token=${data?.access_token}`
      );
      const auth = await response.json();
      // console.log('my user', auth)
      const user: user = {
        id: auth.user.id,
        username: auth.user.username,
        fullName: auth.user.fullName,
        avatar: auth.user.avatar,
        backgroundImg: auth.user.backgroundImg,
        userType: auth.user.userType,
        jwt: auth.jwt,
      }; 
      setTheCookie(user);
      res.status(200).json({ user: auth.user });
     
    } catch (err: any) {
      // console.log(err);
      res.send(err.response);
    }
  }

  // Logout request
  if (data.flag === 'LOGOUT') {
    if (!req.cookies.talentedKid) {
      // console.log("me deyaaaa");
      return res.json({ message: 'You have already logged out!' });
    } else {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize(process.env.COOKIE_NAME as string, '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: -1, // deletes the cookie
          sameSite: 'strict',
          path: '/',
        })
      );
    }
    // console.log('me gwarn');
    return res.status(200).json({ message: 'Successfuly logged out!' });
  }
}
