/* eslint-disable no-unused-vars */
// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { createFirebaseNotification } from 'src/helpers/firebase';
import { AuthContext } from 'src/features/auth/AuthContext';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import FormGroup from '@mui/material/FormGroup';

import {
  LabelText,
  Row,
  Column
} from 'styles/common.styles';

import {
  ErrorDialogContent,
  ErrorIcon,
  CardFormGroup,
  PayForm,
  Input,
  PayAction,
  PayCard,
} from './styles';

import Dialog from 'components/utilities/Dialog';
import {logEvent, Result, ErrorResult} from './utils';
// import Button from 'components/widgets/Button';
import Button from 'components/users/Auth/Button';
import axios from 'axios';

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



const CheckoutForm = ({purchaseType, interval}) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const elements = useElements();
  const stripe = useStripe();
  const [name, setName] = useState(user?.fullName);
  const [postal, setPostal] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  // const [paymentMethod, setPaymentMethod] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log(interval)

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    setName(user?.fullName);
  }, [user?.fullName]);

  const subscriptionNoteMessage = {
    sender: 'Admin',
    recipientEmail: user?.email,
    recipientName: name,
    subject: 'Subscription',
    message: 'Thanks for upgrading your account',
    messageType: 'subscription',
    messageImage: 'TK-logo',
    entityType: 'subscription',
    entityId: user?.id,
    // emailNotificationsOn: booleanstring,
    // appNotificationsOn: booleanstring,
  };
  const paymentNoteMessage = {
    sender: 'Admin',
    recipientEmail: user?.email,
    recipientName: name || user?.username,
    subject: 'Subscription',
    message: 'Thanks for your payment',
    messageType: 'subscription',
    messageImage: 'TK-logo',
    entityType: 'subscription',
    entityId: user?.id,
    // emailNotificationsOn: booleanstring,
    // appNotificationsOn: booleanstring,
  };
  // const notice = async function() {
  //   await createFirebaseNotification(subscriptionNoteMessage);
  // }
  // useEffect(() => {
  //   notice(subscriptionNoteMessage);
  // }, [notice, subscriptionNoteMessage]);

  const handlePay = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/orders/create-intent', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      const cardElements = elements.getElement(CardElement);
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: cardElements,
            // name,
            billing_details: {
              name,
              address: {
                postal_code: postal,
              },
            },
          },
        }
      );
      console.log(confirmPayment);
      const { paymentIntent } = confirmPayment;
      if (paymentIntent.status === 'succeeded') {
        return console.log(paymentIntent.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }


    const card = elements.getElement('card');

    if (card == null) {
      return;
    }
    try {
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
        setIsPaymentSuccessful(false);
        setShowModal(true);
        return setIsSubmitting(false);
      }
      const response = await fetch('/api/subscriptions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email: user.email,
          paymentMethod: payload.paymentMethod.id,
          interval,
          stripeCustomerId: user.stripeCustomerId,
        }),
      });
      const data = await response.json();
      // console.log(data);
      if (data.error) {
        console.log('[error]', data.error);
        setModalMessage(data?.error?.message);
        setIsPaymentSuccessful(false);
        setShowModal(true);
      } else {
        const confirmed = await stripe.confirmCardPayment(data.clientSecret);
        await createFirebaseNotification(subscriptionNoteMessage);

        if (confirmed.error) {
          console.log('[error]', confirmed.error);
          setModalMessage(confirmed?.error?.message);
          setIsPaymentSuccessful(false);
          setShowModal(true);
          return setIsSubmitting(false);
        } else {
          console.log('[PaymentMethod]', confirmed);
          const newSubscription = await fetch('/api/subscriptions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user: user.id,
              paymentOption: interval,
              stripeSubscriptionId: data.subscriptionId,
            }),
          });
          const subscribed = await newSubscription.json();
          if (!subscribed.error) {
            await createFirebaseNotification(paymentNoteMessage);
            setIsPaymentSuccessful(true);
            setModalMessage('Your payment was successful!');

            setTimeout(() => {
              setShowModal(false);
              router.push('/account/membership-status');
            }, 3000);
          }
        }
      }

      setIsSubmitting(false);
    } catch (err) {
      console.log(err);
      setModalMessage('Sorry something went wrong, Please try again later');
      setShowModal(true);
    }
  };

  return (
    <PayCard>
      <div className="PayCardHeader PayCardAction">
        <h1>Pay with</h1>
        <Button content="" type="submit" disabled={false} loading={false}>
          <Image
            src="/assets/images/stripe.png"
            alt="premium"
            width={60}
            height={25.24}
          />
        </Button>
      </div>
      {/* <div className="PayCardAction">
              <Button content="" type="submit" disabled={false} loading={false}>
                <Image
                  src="/assets/images/stripe.png"
                  alt="premium"
                  width={60}
                  height={25.24}
                />
              </Button>
              <Button content="" type="submit" disabled={false} loading={false}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.67556 5.25817C2.39931 3.87754 3.50959 2.71693 4.88232 1.90606C6.25505 1.09519 7.83612 0.666018 9.44883 0.666504C11.7932 0.666504 13.7626 1.4915 15.2683 2.83734L12.7744 5.22734C11.8723 4.4015 10.7258 3.98067 9.44883 3.98067C7.18279 3.98067 5.26469 5.44734 4.58184 7.4165C4.40786 7.9165 4.30869 8.44984 4.30869 8.99984C4.30869 9.54984 4.40786 10.0832 4.58184 10.5832C5.26556 12.5532 7.18279 14.019 9.44883 14.019C10.6188 14.019 11.6148 13.7232 12.3943 13.2232C12.8461 12.9382 13.2329 12.5684 13.5314 12.1361C13.8298 11.7038 14.0336 11.2181 14.1305 10.7082H9.44883V7.48484H17.6414C17.744 8.02984 17.7997 8.59817 17.7997 9.189C17.7997 11.7273 16.8515 13.864 15.2057 15.314C13.7669 16.5873 11.7975 17.3332 9.44883 17.3332C8.30636 17.3336 7.17499 17.1184 6.11939 16.6997C5.0638 16.2811 4.10466 15.6673 3.29681 14.8934C2.48896 14.1195 1.84822 13.2006 1.41123 12.1894C0.974233 11.1781 0.749543 10.0943 0.750001 8.99984C0.750001 7.65484 1.08578 6.38317 1.67556 5.25817Z"
                    fill="white"
                  />
                </svg>
                <span>Pay</span>
              </Button>
            </div> */}
      <PayForm
        onSubmit={purchaseType === 'subscribe' ? handleSubmit : handlePay}
      >
        <div className="PayFormHeader">
          <h2>Pay with credit or debit card</h2>
        </div>
        <Row className="mb50">
          <Column>
            <FormGroup className="FormGroup">
              <label>Card holders name </label>
              <Input
                type="text"
                id="name"
                required
                placeholder="Jenny Rosen"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormGroup>
          </Column>
        </Row>
        <Row className="mb50">
          <Column>
            <FormGroup className="FormGroup">
              <label>Card number </label>
              <CardFormGroup>
                {/* <CardNumberElement
                  id="cardNumber"
                  className="cardinput"
                  onBlur={logEvent('blur')}
                  onChange={logEvent('change')}
                  onFocus={logEvent('focus')}
                  onReady={logEvent('ready')}
                  options={ELEMENT_OPTIONS}
                /> */}
                <CardElement options={{ hidePostalCode: true }} />
              </CardFormGroup>
            </FormGroup>
          </Column>
        </Row>
        {/* <Row className="mb50">
          <Column className="column-6">
            <FormGroup className="FormGroup">
              <label>Expiration</label>
              <CardFormGroup>
                <CardExpiryElement
                  id="expiry"
                  className="cardinput"
                  onBlur={logEvent('blur')}
                  onChange={logEvent('change')}
                  onFocus={logEvent('focus')}
                  onReady={logEvent('ready')}
                  options={ELEMENT_OPTIONS}
                />
              </CardFormGroup>
            </FormGroup>
          </Column>
          <Column className="column-6">
            <FormGroup className="FormGroup">
              <label>Security code</label>
              <CardFormGroup>
                <CardCvcElement
                  id="cvc"
                  className="cardinput"
                  onBlur={logEvent('blur')}
                  onChange={logEvent('change')}
                  onFocus={logEvent('focus')}
                  onReady={logEvent('ready')}
                  options={ELEMENT_OPTIONS}
                />
              </CardFormGroup>
            </FormGroup>
          </Column>
        </Row> */}
        <Row className="mb50">
          <Column>
            <FormGroup className="FormGroup">
              <label>Postal Code </label>
              <Input
                type="text"
                id="postal"
                required
                placeholder="PH16 4SR"
                value={postal}
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
              />
            </FormGroup>
          </Column>
        </Row>
        <Row>
          <Column className="column-12">
            <div className="note">
              By starting a TalentKids membership, you agree to our to the{' '}
              <span
                style={{
                  color: '#39007E',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
                // onClick={() => dispatch(openModal('TERMS_MODAL'))}
              >
                terms and privacy policy.
              </span>
            </div>
          </Column>
        </Row>
        <Row>
          <Column className="column-12">
            <PayAction>
              <Button
                content=""
                type="submit"
                disabled={isSubmitting}
                // loading={isSubmitting}
              >
                Pay with credit or debit card
              </Button>
            </PayAction>
          </Column>
        </Row>
        <Dialog
          close={closeModal}
          open={showModal}
          onButtonClick={closeModal}
          buttonText={isPaymentSuccessful ? 'OK' : 'Retry'}
        >
          <ErrorDialogContent>
            <ErrorIcon
              src={isPaymentSuccessful ? '/checked.png' : '/error.png'}
              alt={`${isPaymentSuccessful ? 'success' : 'error'} icon`}
            />
            <ErrorResult style={{ textAlign: 'center' }}>
              {modalMessage}
            </ErrorResult>
          </ErrorDialogContent>
        </Dialog>
      </PayForm>
    </PayCard>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripkey = process.env.NEXT_PUBLIC_STRIPE_PK;
// const stripePromise = loadStripe(
//   'pk_test_51MeHVpAY6YlyUKD4Fs1v05tYoT0w28Xy7j7ZbBnUM8f04kWZTsbhSCJcME8lXXWtn7risqaQzpiDBI3ptIZ6Uh8V00dWi3fOus'
// );

// const StripeForm = () => {
//   const [secret, setClientSecret] = useState('')
//   useEffect(() =>{
//     fetch('/api/orders/subscribe').then(async(res) => {
//       // console.log(res)
//       const { clientSecret } = await res.json()
//       // console.log(clientSecret)
//       setClientSecret(clientSecret);
//     })
//   }, [])

//   return (
//     <>
//       {stripePromise && secret && (
//         <Elements stripe={stripePromise} options={secret}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </>
//   );
// };

export default CheckoutForm;
