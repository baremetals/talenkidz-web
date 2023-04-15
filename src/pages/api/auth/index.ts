import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { user } from './login';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SK, {
  apiVersion: '2022-08-01',
});

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

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  
  try {
    const customer = await stripe.customers.create({
      email: data.email,
      name: data.fullName,
    });
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
        mailinglist: data.mailinglist,
        firebasePassword: data.firebasePassword,
        stripeCustomerId: customer.id,
        notificationsSettings: {
          likes: true,
          account: true,
          comments: true,
          mailingList: true,
          bookmarkList: data.mailinglist,
          publishedPosts: true,
          recommendations: true,
          publishedEvents: true,
          publishedActivities: true,
        },
        // organisationName: data.organisationName || "",
      },
    });

    res.status(200).json({ message: 'Registration successful' });
  } catch (err: any) {
    // console.log(err.response.data.error.message);
    res.status(401).json({ message: err.response.data.error.message });
  }
  
}
