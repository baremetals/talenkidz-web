import React, { useState } from 'react'


import Button from 'components/Auth/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { GoogleLogin } from "../../../../public/assets/icons/GoogleLogin";
import { FacebookLogin } from "../../../../public/assets/icons/FacebookLogin";

// import { FacebookLogin } from "../../../../public/assets/icons/FacebookLogin";
import { FormGroup } from 'styles/common.styles';

type providerProps = {
    provider: string
    // content: string
}
const backendUrl = process.env.NEXT_PUBLIC_API_URL
const Provider = () => {
    const router = useRouter()
    const [isDisabled, setIsDisabled] = useState(false)
  return (
      <div className='social_login'>
          {/* <Button content={`Login With ${provider}`} type="button"></Button> */}
          <FormGroup className='submit-button facebook' onClick={() => {
              const backendUrl = process.env.NEXT_PUBLIC_API_URL
              // console.log(`${backendUrl}/connect/${}`, provider)
              router.push(`https://1101-83-146-9-36.eu.ngrok.io/api/connect/google`)
          }}>             
              <Button
                  bgColor='#e04a32'
                  type='button'
                  disabled={isDisabled}
                  loading={isDisabled}
                  content="google"
              >
                  <GoogleLogin />
              </Button>
          </FormGroup>
          <FormGroup className='submit-button google'>
              <Button
                  bgColor='#4f7ebe'
                // style={{ backgroundColor: '' }}
                  type='button'
                  disabled={isDisabled}
                  loading={isDisabled}
                  content="facebook"
              >                 
                  <FacebookLogin />
              </Button>
          </FormGroup>
          {/* <Link passHref href={`${backendUrl}/connect/${provider}`} ><Button content={`Login With ${provider}`} type="button"></Button></Link> */}
          {/* <Link passHref href={`${backendUrl}/connect/${provider}`} ><TermsButton>Login With {provider}</TermsButton></Link> */}
    </div>
  )
}

export default Provider
