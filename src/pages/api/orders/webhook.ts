// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Agent from 'stripe';
import { buffer } from 'micro'

// const stripePKey = process.env.NEXT_PUBLIC_STRIPE_PK;
type Data = {
  event?: any;
  error?: any;
};

export const config = {
    bodyParser: false
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const stripeConfig: Agent.StripeConfig = {
      Agent,
      //@ts-ignore
      apiVersion: null,
      typescript: true,
    };
    const stripe = new Agent.Stripe(
      process.env.NEXT_PUBLIC_STRIPE_SK as string,
      stripeConfig
    );
  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  } else {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']
    const webHookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event: Agent.Event;

    try {
        if (!sig || !webHookSecret) return; 
        event = stripe.webhooks.constructEvent(buf, sig, webHookSecret)
    } catch (error: any) {
      console.log(`webhook error: ${error.message}`);
      return res.status(400).send({error: `webhook error: ${error.message}`});
    }
    
    res.status(200).send({ event });
  }
}
