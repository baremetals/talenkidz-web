// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SK, {
  apiVersion: '2022-08-01',
});

type Data = {
  clientSecret?: string;
  message?: string;
  subscriptionId?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, paymentMethod, interval, stripeCustomerId } = req.body;
  try {
    if (req.method !== 'POST') {
      return res.status(405).end('Method not allowed');
    }
    // console.log(stripe)
    let customer
    let id: string| undefined;

    if (stripeCustomerId === null) {
      console.log('I run')
      customer = await stripe.customers.create({
        email,
        name,
        payment_method: paymentMethod,
        invoice_settings: {
          default_payment_method: paymentMethod,
        },
      });
      id = customer.id;
    } else {
       console.log('Lies! I run');
       await stripe.paymentMethods.attach(
         paymentMethod,
         {
           customer: stripeCustomerId,
         }
       );
      await stripe.customers.update(stripeCustomerId, {
        name,
        email,
        // payment_method: paymentMethod,
        invoice_settings: {
          default_payment_method: paymentMethod,
        },
        // metadata: { order_id: '6735' },
      });
    }

      
    const subscribe = await stripe.subscriptions.create({
      customer: stripeCustomerId !== null? stripeCustomerId : id as string,
      items: [
        {
          price_data: {
            currency: 'gbp',
            product: 'prod_NP7AtsIKYPmOZl',
            unit_amount: interval === 'month' ? '500' : '6000',
            recurring: {
              interval: interval,
            },
          },
        },
      ],
      payment_settings: {
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
    });

    // console.log('the subscription created: ', subscribe);
    res
      .status(200)
      .json({
        message: 'subscription successful!',
        clientSecret: subscribe.latest_invoice.payment_intent.client_secret,
        subscriptionId: subscribe.id,
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
