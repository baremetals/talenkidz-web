import axios from 'axios';
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

// console.log('baseUrl', baseUrl)
type Data = {
  message?: string;
  name?: string;
  user?: user
};

type user = {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  userType: string;
  jwt: string;
};


export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  function setTheCookie(user: user ) {
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
  const { usernameOrEmail, password } = data;

  try {
    // console.log("failing here");
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}/auth/local`,
      data: { identifier: usernameOrEmail, password },
    });

    const user: user = {
      id: response.data.user.id,
      username: response.data.user.username,
      fullName: response.data.user.fullName,
      avatar: response.data.user.avatar,
      userType: response.data.user.userType,
      jwt: response.data.jwt,
    };
    setTheCookie(user);

    // res.send(response.data.user);
    res.status(200).json({ user: response.data.user });
  } catch (err: any) {
    // console.log(err.response.data);
    // res.send(err.response.data);
    res.status(401).json({
      message: err.response.data.error.message,
      name: err.response.data.error.name,
    });
  }
 
}
