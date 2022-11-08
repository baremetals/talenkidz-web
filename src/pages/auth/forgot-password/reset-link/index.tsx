import React from 'react';
import EmailTemplate from 'components/EmailTemplate';
import { useRouter } from 'next/router';
// import Footer from 'components/Footer';
// import { withApollo } from 'utils/withApollo';

const message: string =
  "We've just sent you a link to reset your password. Any problems?";
function ResetLink() {
  const router = useRouter()
  setTimeout(() => {
    router.push('/auth/login')
  }, 10000)
  return (
    <>
      <EmailTemplate message={message} />
      {/* <Footer /> */}
    </>
  );
}
export default ResetLink;

// export default withApollo({ ssr: false })(SignUp);
