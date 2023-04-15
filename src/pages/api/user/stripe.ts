// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SK, {
  apiVersion: '2022-08-01',
});

type Data = {
  customerid?: string;
  message?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email } = req.body;
  try {
    if (req.method !== 'POST') {
      return res.status(405).end('Method not allowed');
    }
    // console.log(stripe)
    const customer = await stripe.customers.create({
      email,
      name,
    });
    res.status(200).json({
      message: 'creation successful!',
      customerid: customer.id,
    });
  } catch (err: any) {
    console.log(err);
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
}
