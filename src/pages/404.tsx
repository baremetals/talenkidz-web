import NavBar from 'components/NavBar';
import Head from 'next/head';
import { useRouter } from 'next/router'

import {
  Page404,
  ErrorCode,
  ErrorText,
  ErrorTextWrapper,
  ErrorMessage,
  ErrorMessageWrapper,
  GoBackButton,
  NotFoundIcon
} from 'styles/errors.styles'

export default function Custom404() {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  }

  return <>
    <Head>
      <title>404 | Talentkids</title>
    </Head>
    <NavBar />
    <Page404>
      <ErrorMessageWrapper>
        <NotFoundIcon src={'/no-results.png'} alt="404 icon" />
        <ErrorMessage>
          <ErrorCode>
            404
          </ErrorCode>
          <ErrorTextWrapper>
            <ErrorText>
              This page could not be found
            </ErrorText>
          </ErrorTextWrapper>
        </ErrorMessage>
      </ErrorMessageWrapper>
      <GoBackButton onClick={goToHomePage}>Go back home</GoBackButton>
    </Page404>
  </>
}
