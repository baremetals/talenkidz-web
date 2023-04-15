import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import axios from 'axios';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type user = {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  backgroundImg: string;
  userType: string;
  jwt: string;
};

export default async function updateUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { id, jwt } = cookies;

  // console.log('the request body', cookies);

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

  try {
    // console.log("profile details update");

    const resp = await axios({
      method: 'PUT',
      url: `${baseUrl}/users/${id}`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      data: {
        ...data,
      },
    });

    if (resp?.data) {
      const user: user = {
        ...cookies,
        email: data.email,
      };
      setTheCookie(user);
    }
    // console.log('fucking response',resp)

    res.status(200).json({ message: 'Email successfully changed.' });
  } catch (err: any) {
    // console.log(err.response.data.error.message);
    if (err.response.data.error.message === 'Email already taken') {
        res.status(400).json({ error: 'Email already taken' });
    } else {
        res
          .status(401)
          .json({ error: 'Something went wrong please try again later.' });
    }
      
  }
}
