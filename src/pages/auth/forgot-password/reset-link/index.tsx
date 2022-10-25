import React from 'react';
import EmailTemplate from 'components/EmailTemplate';
// import Footer from 'components/Footer';
// import { withApollo } from 'utils/withApollo';

const message: string =
  "We've just sent you a link to reset your password. Any problems?";
function ResetLink() {
  return (
    <>
      <EmailTemplate message={message} />
      {/* <Footer /> */}
    </>
  );
}
export default ResetLink;

// export default withApollo({ ssr: false })(SignUp);
