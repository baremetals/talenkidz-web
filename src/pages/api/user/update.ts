import { initializeApollo } from 'lib/apolloClient';
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

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.bareacademy as string);
  const { id, jwt, img, backgroundImg, username, fullName, userType } = cookies;
  const token = `Bearer ${jwt}`;

  function setTheCookie(user: user) {
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
  }

  console.log(cookies);

  if (data.flag === 'profileImage') {
    try {
      console.log('profile update');
      const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/users/${id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          avatar: data.imagefile,
        },
      });

      if (resp?.data) {
        const user: user = {
          id,
          username,
          fullName,
          avatar: data.imagefile,
          backgroundImg: backgroundImg,
          userType,
          jwt: jwt,
        };
        setTheCookie(user)

        // res.setHeader(
        //   'Set-Cookie',
        //   cookie.serialize(
        //     process.env.COOKIE_NAME as string,
        //     JSON.stringify(user),
        //     {
        //       httpOnly: true,
        //       secure: process.env.NODE_ENV !== 'development',
        //       maxAge: 60 * 60 * 24 * 5, // 5 days
        //       sameSite: 'strict',
        //       path: '/',
        //     }
        //   )
        // );
      }

      res.status(200).json({ message: 'Image Successfully changed' });
    } catch (err) {
      res
        .status(401)
        .json({ message: 'Something went wrong please try again later.' });
    }
  } else {
    try {
      console.log("profile details update");
      

      // if (resp?.data) {
      //   const user: user = {
      //     id,
      //     username,
      //     fullName,
      //     avatar: data.imagefile,
      //     backgroundImg: backgroundImg,
      //     userType,
      //     jwt: jwt,
      //   };
      //   setTheCookie(user);

      //   // res.setHeader(
      //   //   'Set-Cookie',
      //   //   cookie.serialize(
      //   //     process.env.COOKIE_NAME as string,
      //   //     JSON.stringify(user),
      //   //     {
      //   //       httpOnly: true,
      //   //       secure: process.env.NODE_ENV !== 'development',
      //   //       maxAge: 60 * 60 * 24 * 2, // 2 days
      //   //       sameSite: 'strict',
      //   //       path: '/',
      //   //     }
      //   //   )
      //   // );
      // }

      res.status(200).json({ message: 'Successfully changed.' });
    } catch (err: any) {
      // console.log(err.graphQLErrors[0].message);
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
