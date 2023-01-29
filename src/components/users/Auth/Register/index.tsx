import { useState } from 'react';
import TermsModal from 'components/utilities/Modal/TermsModal';
import TermsButton from 'components/widgets/Button';

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
      {/* {openTerms && (
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
      )} */}

      <RegisterForm handleterms={handleterms} />
    </>
  );
};

export default Register;
