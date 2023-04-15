import React from 'react'
import { Headline, SubHeadline } from '../auth-styles';
import { openModal } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';

type Props = {
  subheading: string;
};

const AuthHeaders: React.FC<Props> = ({subheading}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Headline>
        <span
          className="title secondary"
          onClick={() => dispatch(openModal('REGISTER_FORM'))}
        >
          SIGN UP
        </span>
        <span className="divider">or</span>
        <span
          className="title primary"
          onClick={() => dispatch(openModal('LOGIN_FORM'))}
        >
          SIGN IN
        </span>
      </Headline>
      <SubHeadline>{subheading}</SubHeadline>
    </>
  );
}

export default AuthHeaders;