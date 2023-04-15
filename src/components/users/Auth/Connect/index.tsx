import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Spinner from 'components/utilities/Spinner';
import { InnerContainer, PageContainer, Title } from 'styles/common.styles';
import { AuthContext } from 'src/features/auth/AuthContext';
import { LoginInner, LoginWrapper } from '../auth-styles';

// const backendUrl = process.env.NEXT_PUBLIC_API_URL;
const ConnectProvider = () => {
  const router = useRouter();
  const [text, setText] = useState('Loading...');
  const [spinner, setSpinner] = useState(true);
  const { provider, access_token } = router.query;
  const { loginWithProvider } = useContext(AuthContext);
  // console.log('wait bro find it', router.query)

  useEffect(() => {
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    async function fetchUser() {
      if (
        provider !== undefined &&
        access_token !== undefined
        // id_token !== undefined
      ) {
        await loginWithProvider(access_token as string, provider as string)
          .then(async (_res) => {
            setSpinner(false);
            // console.log('the response', res);
            // setText(res?.success as string);
          })
          .catch((err) => {
            console.log(err);
            setSpinner(false);
            setText('An error occurred, Please try again..');
            setTimeout(() => router.push('/'), 3000);
          });
      }
    }
    const listen = fetchUser();

    return () => {
      listen;
    };
  }, [provider, access_token, router, loginWithProvider]);

  // useEffect(() => {
  //   // Successfully logged with the provider
  //   // Now logging with strapi by using the access_token (given by the provider) in props.location.search
  //   if (
  //     provider !== undefined &&
  //     access_token !== undefined &&
  //     id_token !== undefined
  //   ) {
  //     fetch(
  //       `${backendUrl}/auth/${provider}/callback?access_token=${access_token}`
  //     )
  //       .then((res) => {
  //         if (res.status !== 200) {
  //           setSpinner(false);
  //           setText('An error occurred, Please try again.');
  //           setTimeout(() => router.push('/auth/login'), 3000);
  //         }
  //         return res;
  //       })
  //       .then((res) => res.json())
  //       .then(async (res) => {
  //         // console.log(res)
  //         await axios.post('/api/auth', {
  //           data: {
  //             ...res,
  //             flag: 'CONNECT',
  //           },
  //         });
  //         // Successfully logged with Strapi

  //         setText(
  //           'You have been successfully logged in. You will be redirected in a few seconds...'
  //         );
  //         setTimeout(
  //           () => router.push(`/user-profile/${res.user.username}`),
  //           3000
  //         ); // Redirect to homepage after 3 sec
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setSpinner(false);
  //         setText('An error occurred, Please try again..');
  //         setTimeout(() => router.push('/auth/login'), 3000);
  //       });
  //   } else {
  //     setSpinner(false);
  //     setText('An error occurred, Please try again.');
  //     setTimeout(() => router.push('/auth/login'), 3000);
  //   }
  // }, [provider, access_token, router, id_token]);
  return (
    <>
      <PageContainer style={{ minHeight: '100vh' }}>
        <LoginWrapper>
          <LoginInner
            style={{
              backgroundColor: '#f3f3f3',
            }}
          >
            <Title
              style={{
                lineHeight: '1.6',
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              {text}
            </Title>
            {spinner && (
              <Spinner
                style={{
                  position: 'relative',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              />
            )}
          </LoginInner>
        </LoginWrapper>
      </PageContainer>
    </>
  );
};

export default ConnectProvider;

export const RadioFormInput = styled.input`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 5px;
  &:checked {
    border-width: 2px;
    border-color: #e4dfdf;
    background-color: #bc70ad;
    padding: 3px;
    & + label {
    }
  }
`;

export const RadioFormGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
