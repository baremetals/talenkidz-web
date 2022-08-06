// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import React, {SetStateAction, useState} from 'react';
import {loadStripe, StripeCardNumberElement} from '@stripe/stripe-js';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

import {
  CardFormGroup,
  H3,
  Input,
  LabelText,
} from 'styles/common.styles';

import { ErrorDialogContent, ErrorIcon } from './styles'

import Dialog from 'components/Dialog';
import {logEvent, Result, ErrorResult} from './utils';

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

// type paymentProps = {
//   type: string;
//   card: StripeCardNumberElement | null;
//   billing_details: {
//     name: string;
//     address: {
//       postal_code: string;
//     };
//   };
// } | {};

const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [name, setName] = useState('');
  const [postal, setPostal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card =
      elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: {
        name,
        address: {
          postal_code: postal,
        },
      },
    });

    if (payload.error) {
      console.log('[error]', payload.error);
      setErrorMessage(payload?.error?.message);
      setPaymentMethod({});
      setShowErrorModal(true);
    } else {
      console.log('[PaymentMethod]', payload.paymentMethod);
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <H3 style={{ margin: '0 -1.875rem 1.875rem', padding: '0 1.875rem 1.875rem', fontSize: '1.125rem', borderBottom: '1px solid #dfdfdf',  }}>Payment Details</H3>

      <CardFormGroup>
        <LabelText>Card name</LabelText>
        <Input id="name" required placeholder="Jenny Rosen" value={name} onChange={(e) => { setName(e.target.value); }} />
      </CardFormGroup>

      <CardFormGroup>
        <LabelText>Card number</LabelText>
        <CardNumberElement
          id="cardNumber"
          className='cardinput'
          onBlur={logEvent('blur')}
          onChange={logEvent('change')}
          onFocus={logEvent('focus')}
          onReady={logEvent('ready')}
          options={ELEMENT_OPTIONS}
        />
      </CardFormGroup>

      <CardFormGroup>
        <LabelText>Expiry</LabelText>
        <CardExpiryElement
          id="expiry"
          className='cardinput'
          onBlur={logEvent('blur')}
          onChange={logEvent('change')}
          onFocus={logEvent('focus')}
          onReady={logEvent('ready')}
          options={ELEMENT_OPTIONS}
        />
      </CardFormGroup>

      <CardFormGroup>
        <LabelText>Postal Code</LabelText>
        <Input
          id="postal"
          required
          placeholder="12345"
          value={postal}
          onChange={(e) => {
            setPostal(e.target.value);
          }}
        />
      </CardFormGroup>

      <CardFormGroup style={{marginBottom: '0'}}>
        {paymentMethod && <Result>Got PaymentMethod: {paymentMethod?.id}</Result>}
        <button type="submit" style={{ width: '100%'}} disabled={!stripe}>
          Pay
        </button>
      </CardFormGroup>

      <Dialog
        close={closeErrorModal}
        open={showErrorModal}
        onButtonClick={closeErrorModal}
        buttonText="Retry"
      >
        <ErrorDialogContent>
          <ErrorIcon src={'/error.png'} alt="error icon" />
          <ErrorResult>{errorMessage}</ErrorResult>
        </ErrorDialogContent>
      </Dialog>
    </form>
    
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const StripeForm = () => (
  <Elements  stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeForm;
