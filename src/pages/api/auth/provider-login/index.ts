import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { user } from '../login';
// import { addToMailingList } from 'src/lib/helpers';
// const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SK, {
//   apiVersion: '2022-08-01',
// });

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
  user?: user;
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

    const userSettings =
      auth.user.notificationsSettings == null ||
      auth.user.notificationsSettings == undefined
        ? null
        : auth.user.notificationsSettings;

    const user: user = {
      id: auth.user.id,
      username: auth.user.username,
      fullName: auth.user.fullName,
      avatar: auth.user.avatar,
      userType: auth.user.userType,
      membership: auth.user.membership,
      jwt: auth.jwt,
      email: auth.user.email,
      bio: auth.user.bio,
      provider: auth.user.provider,
      stripeCustomerId: auth.user.stripeCustomerId,
      notificationsSettings: userSettings,
      orgName: org.data.organisation == null ? '' : org.data.organisation.name,
      orgType:
        org.data.organisation == null
          ? ''
          : org.data.organisation.organisationType,
      website:
        org.data.organisation == null ? '' : org.data.organisation.website,
    };

    setTheCookie(user);
    res.status(200).json({ user: auth.user });
  } catch (err: any) {
    console.log(err);
    res.send(err.response);
  }
}
