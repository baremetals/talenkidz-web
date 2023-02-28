// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SK, {
  apiVersion: '2022-08-01',
});

type Data = {
  clientSecret?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // console.log(stripe)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'gbp',
      payment_method_types: ['card'],
      // Verify your integration in this guide by including this parameter
      statement_descriptor: 'Subscription',
      // automatic_payment_methods: { enabled: true },
      metadata: { integration_check: 'accept_a_payment' },
    });
    // console.log('the payment creation: ', paymentIntent);
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
}
