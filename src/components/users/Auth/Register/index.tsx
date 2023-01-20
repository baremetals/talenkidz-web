import { useState } from 'react';
import TermsModal from 'components/utilities/Modal/TermsModal';
import TermsButton from 'components/widgets/Button';

import {
  Image,
  PageContainer,
} from 'styles/common.styles';


import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
  const [openTerms, setOpenTerms] = useState(false);

  const handleterms = () => {
    return setOpenTerms(!openTerms);
  };
  const handleAccept = () => {
    return setOpenTerms(!openTerms);
  };

  return (
    <>
      {openTerms && (
        <TermsModal openTerms={openTerms}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem',
            }}
          >
            <TermsButton
              style={{ width: '12rem', marginLeft: 'auto' }}
              onClick={() => handleAccept()}
            >
              Accept
            </TermsButton>
          </div>
        </TermsModal>
      )}
      <PageContainer style={{ minHeight: '100vh' }}>
        <RegisterForm handleterms={handleterms} />
        <Image
          style={{
            position: 'absolute',
            width: '20rem',
            bottom: '0',
            right: '0',
            zIndex: '-1',
          }}
          src="/login.png"
          alt="image of a parent and child"
        />
      </PageContainer>
    </>
  );
};

export default Register;
