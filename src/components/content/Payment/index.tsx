import React from 'react';
import Button from 'components/users/Auth/Button';
import {
  InnerContainer,
  Row,
  Column,
  //PageContainer,
} from 'styles/common.styles';
import {
  Pageheader,
  PaymentTerms,
  PaymentCard,
  PayCard,
  PayCardWrapper,
  PayForm,
  Input,
  PayAction,
} from './Payment.styles';
import CheckBox from 'public/assets/icons/CheckBox';
import FormGroup from '@mui/material/FormGroup';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import Image from 'next/image';
import { text } from 'stream/consumers';

export const PaymentPage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
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
                  <p>5 £ GBP/month</p>
                  <Button
                    content="Selected"
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </div>
              </PaymentTerms>
            </Column>
            <Column className="column-6">
              <PaymentTerms>
                <div className="PaymentTerms">
                  <h1>Annual</h1>
                  <p>60 £ GBP/month</p>
                  <Button
                    content="Select"
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </div>
              </PaymentTerms>
            </Column>
          </Row>
        </PaymentCard>

        {/* payCard */}
        <PayCardWrapper>
          <div className="PayHeader">
            <h1>Total billed today</h1>
            <label>5 £ GBP</label>
          </div>
          <PayCard>
            <div className="PayCardHeader">
              <h1>Pay with</h1>
            </div>
            <div className="PayCardAction">
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
            </div>
            <PayForm>
              <div className="PayFormHeader">
                <h2>Pay with credit or debit card</h2>
              </div>
              <Row className="mb50">
                <Column>
                  <FormGroup className="FormGroup">
                    <label>Card number </label>
                    <Input type="text" />
                  </FormGroup>
                </Column>
              </Row>
              <Row className="mb50">
                <Column className="column-6">
                  <FormGroup className="FormGroup">
                    <label>Expiration</label>
                    <Input type="text" />
                  </FormGroup>
                </Column>
                <Column className="column-6">
                  <FormGroup className="FormGroup">
                    <label>Security code</label>
                    <Input type="text" />
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
                      onClick={() => dispatch(openModal('TERMS_MODAL'))}
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
                      disabled={false}
                      loading={false}
                    >
                      Pay with credit or debit card
                    </Button>
                  </PayAction>
                </Column>
              </Row>
            </PayForm>
          </PayCard>
        </PayCardWrapper>
      </InnerContainer>
    </>
  );
};

export default PaymentPage;
