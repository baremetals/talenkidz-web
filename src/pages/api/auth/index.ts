import axios from 'axios';
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

// console.log('baseUrl', baseUrl)
type Data = {
  message?: string;
  resp?: string;
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

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  // console.log(data, 'I am here');

  // Register request
  if (data.flag === 'REGISTER') {
    try {
      // console.log('register me!', baseUrl);
      const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/local/register`,
        data: {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          userType: data.userType,
          username: data.username,
          // organisationName: data.organisationName || "",
        },
      });

      res.status(200).json({ resp: resp.data.user.confirmed });
    } catch (err: any) {
      console.log(err.response.data.error.message);
      res.status(401).json({ message: err.response.data.error.message });
    }
  }
  // Login request
  if (data.flag === 'LOGIN') {
    
    const { usernameOrEmail, password } = data;
    // console.log(baseUrl);

    try {
      console.log(data);

      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/local`,
        data: { identifier: usernameOrEmail, password },
      });
      console.log("did we get here")
      
     
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
        res.setHeader(
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
          logo: response.data.user.organisation.logo,
          fullProfile: response.data.user.organisation.fullProfile,
        };
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
        
      res.send(response.data.user);
    } catch (err: any) {
      
      console.log("ISSUE HERE",err.response.data);
      res.send(err.response.data);
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
