import React from "react";
import ResetPasswordForm from './ResetPasswordForm';

import {
    PageContainer,
} from 'styles/common.styles';


const ResetPassword: React.FC<any> = () => {
  return (
      <PageContainer style={{ minHeight: '100vh' }}>
        <ResetPasswordForm />
      </PageContainer>
  );
};

export default ResetPassword;
