import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';

import {
  InnerContainer,
} from 'styles/common.styles';

import Button from 'components/users/Auth/Button';
import { Error, ErrorMsg } from 'components/widgets/Input';
import { getLoginValidationSchema } from 'src/utils/formValidation';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal/reducers';
import {
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
  Headline,
  SubHeadline,
  DismissIcon,
} from '../auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { Phone } from 'public/assets/icons/Phone';
import { Clock } from 'public/assets/icons/Clock';

export interface IQuestionsForm {
  formProps?: QuestionsProps;
  errorMsg?: boolean;
}

type QuestionsProps = {
  phone: string;
  datetime: string;
  error?: string;
};

const initialValues = {
  phone: '',
  datetime: '',
  error: '',
};
const QuestionsForm: React.FC<IQuestionsForm> = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    try {
      // TODO: Request to server
    } catch (err) {
      console.log('error: ', err);
    }
  };

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getLoginValidationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <InnerContainer>
          <LoginWrapper>
            <LoginInner>
              <DismissIcon>
                <CrossRounded onClick={handleModalClose} />
              </DismissIcon>
              {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
              <Headline>
                <span className="title primary">Do you have questions</span>
              </Headline>
              <SubHeadline className="questions">or <br/>need a consultation?</SubHeadline>

              <FormWrap>
                <FormGroup>
                  <Icon>
                    <Phone />
                  </Icon>
                  <FormInput
                    type="text"
                    placeholder="Your number"
                    name="phone"
                  />
                  {errors.phone && touched.phone && (
                    <Error>{errors.phone}</Error>
                  )}
                </FormGroup>
                <FormGroup>
                  <Icon>
                    <Clock />
                  </Icon>
                  <FormInput
                    type="text"
                    placeholder="10 December, 12.30"
                    name="datetime"
                  />
                  {errors.datetime && touched.datetime && (
                    <Error>{errors.datetime}</Error>
                  )}
                </FormGroup>
                <FormGroup className="question-button">
                  <Button
                    content="Send"
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                  />
                </FormGroup>
              </FormWrap>
            </LoginInner>
          </LoginWrapper>
        </InnerContainer>
      )}
    </Formik>
  );
};

export default QuestionsForm;
