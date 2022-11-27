/* eslint-disable no-unused-vars */
// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import React, {SetStateAction, useState} from 'react';
import {loadStripe, StripeCardNumberElement} from '@stripe/stripe-js';
import {
  CardNumberElement,
  // CardCvcElement,
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

import Dialog from 'components/utilities/Dialog';
import {logEvent, Result, ErrorResult} from './utils';
import Button from 'components/widgets/Button';

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
  const [modalMessage, setModalMessage] = useState('');
  const [_paymentMethod, setPaymentMethod] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

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
      setModalMessage(payload?.error?.message);
      setPaymentMethod({});
      setIsPaymentSuccessful(false);
      setShowModal(true);
    } else {
      console.log('[PaymentMethod]', payload.paymentMethod);
      setPaymentMethod(payload.paymentMethod);
      setIsPaymentSuccessful(true);
      setModalMessage('Your payment was successful!');
      setShowModal(true);
    }
    setIsSubmitting(false);
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
        {/* paymentMethod && <Result>Got PaymentMethod: {paymentMethod?.id}</Result> */}
        <Button type="submit" style={{ width: '100%'}} disabled={isSubmitting} loading={isSubmitting}>
          Pay
        </Button>
      </CardFormGroup>

      <Dialog
        close={closeModal}
        open={showModal}
        onButtonClick={closeModal}
        buttonText={isPaymentSuccessful ? 'OK' : 'Retry'}
      >
        <ErrorDialogContent>
          <ErrorIcon src={isPaymentSuccessful ? '/checked.png' : '/error.png'} alt={`${isPaymentSuccessful ? 'success' : 'error'} icon`} />
          <ErrorResult style={{ textAlign: 'center' }}>{modalMessage}</ErrorResult>
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