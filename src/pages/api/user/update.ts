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

export default async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { id, jwt, avatar, backgroundImg } = cookies;

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

  // console.log(data);
  // console.log('the request body',req.body);

  if (data.flag === 'user-image') {
    const profileImage = {
      avatar: data?.imagefile,
    };
    const backgroundImage = {
      backgroundImg: data?.imagefile,
    };
    try {
      // console.log('profile update');
      const resp = await axios({
        method: 'PUT',
        url: `${baseUrl}/users/${id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        data: data.field === 'profile' ? profileImage : backgroundImage,
      });

      if (resp?.data) {
        const user: user = {
          ...cookies,
          avatar: data.field === 'profile' ? data.imagefile : avatar,
          backgroundImg: data.field === 'background' ? data.imagefile : backgroundImg,
        };
        setTheCookie(user)
      }

      res.status(200).json({ message: 'Image Successfully changed' });
    } catch (err) {
      res
        .status(401)
        .json({ message: 'Something went wrong please try again later.' });
    }
  } else {
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
          username: data.username,
          fullName: data.fullName,
          bio: data.bio,
          stripeCustomerId: data.stripeCustomerId,
        };
        setTheCookie(user);
      }
      // console.log('fucking response',resp)

      res.status(200).json({ message: 'Details successfully changed.' });
    } catch (err: any) {
      // console.log(err);
      if (err.graphQLErrors[0].message) {
        res.status(401).json({ message: err.graphQLErrors[0].message });
      } else {
        res
          .status(401)
          .json({ message: 'Something went wrong please try again later.' });
      }
    }
  }
}
