import React, { useState } from 'react'
import Button from 'components/users/Auth/Button';

import { useRouter } from 'next/router';

import { GoogleLogin } from "public/assets/icons/GoogleLogin";
import { FacebookLogin } from "public/assets/icons/FacebookLogin";

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
        style={{padding: '0'}}
        className="submit-button google"
        onClick={() => handleAuth('google')}
      >
        <Button
          bgColor="#4285f4"
          type="button"
          disabled={isDisabled.google}
          loading={isDisabled.google}
          content="Sign in with Google"
        >
          <span style={{}}><GoogleLogin /></span>
        </Button>
      </FormGroup>
      <FormGroup
        style={{padding: '0'}}
        className="submit-button facebook"
        onClick={() => handleAuth('facebook')}
      >
        <Button
          bgColor="#1877f2"
          // style={{ backgroundColor: '' }}
          type="button"
          disabled={isDisabled.facebook}
          loading={isDisabled.facebook}
          content="Continue with Facebook"
        >
          <span style={{}}><FacebookLogin /></span>
        </Button>
      </FormGroup>
    </div>
  );
}

export default Provider
