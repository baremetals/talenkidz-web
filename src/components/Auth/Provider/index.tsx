import React, { useState } from 'react'
import Button from 'components/Auth/Button';

import { useRouter } from 'next/router';

import { GoogleLogin } from "../../../../public/assets/icons/GoogleLogin";
import { FacebookLogin } from "../../../../public/assets/icons/FacebookLogin";

import { FormGroup } from 'styles/common.styles';

const backendUrl = process.env.NEXT_PUBLIC_API_URL
const Provider = () => {
    const router = useRouter()
    const [isDisabled, setIsDisabled] = useState({
        google: false,
        facebook: false
    })

    const handleAuth = (provider: string) => {
        setIsDisabled((prev => ({...prev, provider: true})))
        router.push(`${backendUrl}/connect/${provider}`);
    }
  return (
    <div className="social_login">
      <FormGroup
        className="submit-button google"
        onClick={() => handleAuth('google')}
      >
        <Button
          bgColor="#e04a32"
          type="button"
          disabled={isDisabled.google}
          loading={isDisabled.google}
          content="google"
        >
          <GoogleLogin />
        </Button>
      </FormGroup>
      <FormGroup
        className="submit-button facebook"
        onClick={() => handleAuth('facebook')}
      >
        <Button
          bgColor="#4f7ebe"
          // style={{ backgroundColor: '' }}
          type="button"
          disabled={isDisabled.facebook}
          loading={isDisabled.facebook}
          content="facebook"
        >
          <FacebookLogin />
        </Button>
      </FormGroup>
    </div>
  );
}

export default Provider
