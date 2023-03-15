import React, { useCallback, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background } from './modal.styles';
import Register from 'components/users/Auth/Register';
import Login from 'components/users/Auth/Login';
import ForgotPassword from 'components/users/Auth/ForgotPassword';
import PasswordReset from 'components/users/Auth/PasswordReset/ResetPasswordForm';
import TermsModal from 'components/users/Auth/TermsModal';
import Questions from 'components/users/Auth/Questions';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { openSelector, componentSelector } from 'src/features/modal/selectors';
import { closeModal } from 'src/features/modal/reducers';
import PolicyConsent from 'components/service/Policy/PolicyConsent';
import PolicySettings from 'components/service/Policy/PolicySettings';
import ParticipationModal from './ParticipationModal';
import ProfileInformationModal from '../../users/EditProfile';
import FeedbackModal from './FeedbackModal';
import EditCommentInput from 'components/utilities/comments/EditCommentInput';
import EventForm from 'components/users/posts/events/EventForm';
import ActivityForm from 'components/users/posts/activities/ActivityForm';
import ArticleForm from 'components/users/posts/articles/ArticleForm';
import EditArticleForm from 'components/users/posts/articles/EditArticleForm';
// import EditEventForm from 'components/users/posts/events/EditEventForm';
// import EditActivityForm from 'components/users/posts/activities/EditActivityForm';

/** Components Name Constants */
const MODAL_COMPONENTS = {
  REGISTER_FORM: Register,
  LOGIN_FORM: Login,
  FORGOTPASSWORD_FORM: ForgotPassword,
  QUESTIONS: Questions,
  RESETPASSWORD_FORM: PasswordReset,
  TERMS_MODAL: TermsModal,
  POLICY_CONSENT: PolicyConsent,
  POLICY_SETTINGS: PolicySettings,
  PARTICIPATION_MODAL: ParticipationModal,
  FEEDBACK_MODAL: FeedbackModal,
  PROFILE_MODAL: ProfileInformationModal,
  EDIT_COMMENT_MODAL: EditCommentInput,
  EVENT_FORM_MODAL: EventForm,
  ACTIVITY_FORM_MODAL: ActivityForm,
  ARTICLE_FORM_MODAL: ArticleForm,
  EDIT_ARTICALFORM_MODAL: EditArticleForm,
  // EDIT_ACTIVITYFORM_MODAL: EditActivityForm,
  // EDIT_EVENTFORM_MODAL: EditEventForm,
};

export default function AuthModal({ ...props }: any) {
  const isOpen = useAppSelector(openSelector);
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

  const dropModal = (e: { target: { key: string } }) => {
    if (modalRef.current === e.target) {
      dispatch(closeModal());
    }
  };

  const keyPress = useCallback(
    (e: { key: string }) => {
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

  // console.log(modalComponent);
  const ModalContent: any = MODAL_COMPONENTS[modalComponent];
  return (
    <Background onClick={dropModal} ref={modalRef} {...props}>
      <animated.div styled={animation} {...props}>
        {/* <div className="closeModal" onClick={() => dispatch(closeModal())}>x</div> */}
        <ModalContent />
      </animated.div>
    </Background>
  );
}
