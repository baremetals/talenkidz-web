import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
};


export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.cookies.talentedKid) {
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
    return res.status(200).json({ message: 'Successfuly logged out!' });
  }
}
