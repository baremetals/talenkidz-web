import React, { useCallback, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background } from './modal.styles';
import Register from 'components/users/Auth/Register'
import Login from 'components/users/Auth/Login';
import ForgotPassword from 'components/users/Auth/ForgotPassword';
import PasswordReset from 'components/users/Auth/PasswordReset/ResetPasswordForm';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import {
  openSelector,
  componentSelector,
} from 'src/features/modal/selectors';
import { closeModal } from 'src/features/modal/reducers';


/** Components Name Constants */
const MODAL_COMPONENTS = {
  REGISTER_FORM: Register,
  LOGIN_FORM: Login,
  FORGOTPASSWORD_FORM: ForgotPassword,
  RESETPASSWORD_FORM: PasswordReset,
};

export default function AuthModal({
  ...props
}: any) {
  const isOpen  = useAppSelector(openSelector);
  const modalComponent = useAppSelector(componentSelector);
  const dispatch = useAppDispatch();
  const modalRef = useRef();
  // const router = useRouter();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const dropModal = (e: { target: {key: string} }) => {
    if (modalRef.current === e.target) {
      dispatch(closeModal());
    }
  };

  const keyPress = useCallback(
    (e: {key: string}) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closeModal());
      }
    },
    [dispatch, isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  if (!modalComponent) {
    return null;
  }

  console.log(modalComponent);
  const AuthContent: any = MODAL_COMPONENTS[modalComponent];
  return (
    <Background onClick={dropModal} ref={modalRef} {...props}>
      <animated.div styled={animation} {...props}>
        <div className="closeModal" onClick={() => dispatch(closeModal())}>x</div>
        <AuthContent />
      </animated.div>
    </Background>
  );
}