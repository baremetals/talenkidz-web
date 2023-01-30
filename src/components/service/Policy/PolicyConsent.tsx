import React from 'react'
import axios from 'axios';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal, openModal } from 'src/features/modal/reducers';
import Button from 'components/widgets/Button';
import {
    Title,
    Text,
} from "styles/common.styles";
import { ModalContainer } from 'components/utilities/Modal/modal.styles';
import Link from 'next/link';


function PolicyConsent() {
  const dispatch = useAppDispatch();

  const acceptPolicy = async () => {
    let policyChoice = {
      Functional: 'yes',
      Strictly_necessary: 'yes',
      Marketing: 'yes',
      Statistical: 'yes',
      Unclassified: 'yes',
    };

    // console.log(policyChoice)
    await axios
      .post('/api/policy', { data: { policyChoice, flag: 'setCookie' } })
      .then((res) => {
        // console.log(res);
        if (res?.data?.name === 'done') {
          dispatch(closeModal());
        }
      })
      .catch((err) => {
        console.log('I am failing for some reason', err);
      });
    // return setPrivacyPolicy(!privacyPolicy);
  };

  const handleManageSetting = () => {
      dispatch(openModal('POLICY_SETTINGS'));
  };

  return (
    <>
      <ModalContainer
        style={{ textAlign: 'center' }}
        id="policy-modal"
      >
        <Title style={{ fontSize: '2rem' }}>Talentkids Cookie Consent</Title>
        <div className="minh">
          <Text>
            We use cookies to ensure you have the best experience on our site,
            to analyse traffic, and enhance our marketing activities.{' '}
            <Link href="/privacy">
              <a target="_blank">Learn more</a>
            </Link>
            .
          </Text>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
          }}
        >
          <Button
            style={{ width: '15rem', borderRadius: '8px' }}
              onClick={() => handleManageSetting()}
          >
            Manage Setting
          </Button>
          <Button
            style={{ width: '12rem', borderRadius: '8px' }}
            onClick={() => acceptPolicy()}
          >
            Accept All
          </Button>
        </div>
      </ModalContainer>
    </>
  );
}
export default PolicyConsent;

