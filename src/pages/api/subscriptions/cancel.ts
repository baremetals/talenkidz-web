// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SK, {
  apiVersion: '2022-08-01',
});

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {jwt, id} = JSON.parse(req.cookies.talentedKid);
  try {
    if (req.method !== 'POST') {
      return res.status(405).end('Method not allowed');
    }

    await stripe.subscriptions.del(
      req.body.stripeSubscriptionId
    );

    await axios({
      method: 'DELETE',
      url: `${baseUrl}/subscriptions/${req.body.subscriptionId}`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });

    await axios({
      method: 'PUT',
      url: `${baseUrl}/users/${id}`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      data: { membership: 'basic' },
    });

    // console.log('the subscription created: ', subscribe);
    res.status(200).json({
      message: 'subscription deleted!',
    });
  } catch (err: any) {
    // console.log(err);
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
}
