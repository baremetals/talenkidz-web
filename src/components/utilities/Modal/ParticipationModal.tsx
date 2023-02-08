import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { ModalContainer } from 'components/utilities/Modal/modal.styles';
import {
  DismissIcon,
  FormGroup,
  FormInput,
  Headline,
  Icon,
  SubHeadline,
} from 'components/users/Auth/auth-styles';
import Button from 'components/users/Auth/Button';
import { Error } from 'components/widgets/Input';
import { Profile } from 'public/assets/icons/Profile';
import { Phone } from 'public/assets/icons/Phone';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { Column, Row } from 'styles/common.styles';
import { getParticipationValidationSchema } from 'src/utils/formValidation';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal/reducers';

// type participationProps = {
//   firstname: string;
//   surname: string;
//   phone: string;
//   error?: string;
// };

const initialValues = {
  firstname: '',
  surname: '',
  phone: '',
  error: '',
};

export default function ParticipationModal() {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    // TODO: Request to server
  };

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getParticipationValidationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <ModalContainer className="participation-modal">
          <DismissIcon>
            <CrossRounded onClick={handleModalClose} />
          </DismissIcon>
          <Headline>
            <span className="title primary">PARTICIPATION</span>
          </Headline>
          <SubHeadline>We’ll contact you</SubHeadline>

          <Row>
            <Column>
              <FormGroup>
                <Icon>
                  <Profile />
                </Icon>
                <FormInput
                  type="text"
                  placeholder="First name"
                  name="firstname"
                />
                {errors.firstname && touched.firstname && (
                  <Error>{errors.firstname}</Error>
                )}
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <Icon>
                  <Profile />
                </Icon>
                <FormInput type="text" placeholder="Surname" name="surname" />
                {errors.surname && touched.surname && (
                  <Error>{errors.surname}</Error>
                )}
              </FormGroup>
            </Column>
          </Row>

          <FormGroup>
            <Icon>
              <Phone />
            </Icon>
            <FormInput type="text" placeholder="Your number" name="phone" />
            {errors.phone && touched.phone && <Error>{errors.phone}</Error>}
          </FormGroup>

          <FormGroup className="submit-button">
            <Button
              content="Participate"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </FormGroup>
        </ModalContainer>
      )}
    </Formik>
  );
}
