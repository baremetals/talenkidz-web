/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// import StripeForm from './stripe-form';

import CheckBox from 'public/assets/icons/CheckBox';

import {
  InnerContainer,
  Column,
  Row,
} from 'styles/common.styles';

import Button from 'components/users/Auth/Button';
import { AuthContext } from 'src/features/auth/AuthContext';
import { Pageheader, PayCard, PayCardWrapper, PaymentCard, PaymentTerms } from './styles';
import StripeForm from './StripeForm';
// import StripeForm from './CheckoutForm';

const Payment = () => {
  // const [formType, setFormType] = useState('activity')
  const { user } = useContext(AuthContext);
  const [interval, setInterval] = useState('month');

  return (
    <InnerContainer>
      <Pageheader>
        <h1>Get unlimited access to all of TALENTKIDS </h1>
        <p>Plans starting at less than 1 £/week. Cancel anytime.</p>
        <ul>
          <li>
            <CheckBox />
            <span>no ads</span>
          </li>
          <li>
            <CheckBox />
            <span>support quality writing</span>
          </li>
          <li>
            <CheckBox />
            <span>access on any device</span>
          </li>
        </ul>
      </Pageheader>
      <PaymentCard>
        <Row>
          <Column className="column-6">
            <PaymentTerms>
              <div className="PaymentTerms selected">
                <h1>Mounthly</h1>
                <p>£5/month</p>
                <Button
                  content={interval === 'month' ? 'Selected' : 'Select'}
                  type="submit"
                  disabled={false}
                  loading={false}
                  onClick={() => setInterval('month')}
                />
              </div>
            </PaymentTerms>
          </Column>
          <Column className="column-6">
            <PaymentTerms>
              <div className="PaymentTerms">
                <h1>Annual</h1>
                <p>£60/month</p>
                <Button
                  content={interval !== 'month' ? 'Selected' : 'Select'}
                  type="submit"
                  disabled={false}
                  loading={false}
                  onClick={() => setInterval('year')}
                />
              </div>
            </PaymentTerms>
          </Column>
        </Row>
      </PaymentCard>

      {/* payCard */}
      <PayCardWrapper>
        <div className="PayHeader">
          <h1>Total billed today</h1>
          <label>{interval === 'month'? '£5': '£60'}</label>
        </div>
        <StripeForm purchaseType={'subscribe'} interval={interval} />
      </PayCardWrapper>
    </InnerContainer>
  );
};

export default Payment;
