import NavBar from 'components/NavBar';
import Head from 'next/head';
import { useRouter } from 'next/router'

import {
  ErrorPage,
  ErrorCode,
  ErrorText,
  ErrorTextWrapper,
  ErrorMessage,
  ErrorMessageWrapper,
  GoBackButton,
  ErrorIcon
} from 'styles/errors.styles'

export default function Custom404() {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  }

  return <>
    <Head>
      <title>500 | Talentkids</title>
    </Head>
    <NavBar />
    <ErrorPage>
      <ErrorMessageWrapper>
        <ErrorIcon src={'/error.png'} alt="error icon" />
        <ErrorMessage>
          <ErrorCode>
            500
          </ErrorCode>
          <ErrorTextWrapper>
            <ErrorText>
              Internal Error
            </ErrorText>
          </ErrorTextWrapper>
        </ErrorMessage>
      </ErrorMessageWrapper>
      <GoBackButton onClick={goToHomePage}>Go back home</GoBackButton>
    </ErrorPage>
  </>
}
