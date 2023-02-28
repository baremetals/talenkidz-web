import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';

import {
  Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripkey = process.env.NEXT_PUBLIC_STRIPE_PK;

type TFormProps = {
  purchaseType: string;
  interval: string;
};

const StripeForm: React.FC<TFormProps> = ({ purchaseType, interval }) => {
  const [publishableKey, setPublishableKey] = useState(stripkey);
  // const [clientSecret, setClientSecret] = useState<
  //   StripeElementsOptions | undefined
  // >();
  // console.log(stripkey)

  useEffect(() => {
    setPublishableKey(stripkey);
    // fetch('/api/orders/keys', {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json'}
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   setPublishableKey(data.publishableKey);
    // })
  }, []);
  // useEffect(() => {
  //   fetch('/api/orders/subscribe', {
  //     method: 'POST',
  //     body: JSON.stringify({}),
  //     headers: { 'Content-Type': 'application/json'}
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data.clientSecret);
  //     setClientSecret(data.clientSecret);
  //   })
  // }, []);

  if (!publishableKey) {
    return null;
  }

  const stripePromise = loadStripe(publishableKey as string);

  return (
    // <>
    //   {stripePromise && clientSecret && (
    //     <Elements
    //       stripe={stripePromise}
    //       options={{ clientSecret: `${clientSecret}` }}
    //     >
    //       <CheckoutForm />
    //     </Elements>
    //   )}
    // </>
    <Elements stripe={stripePromise}>
      <CheckoutForm purchaseType={purchaseType} interval={interval} />
    </Elements>
  );
};

export default StripeForm