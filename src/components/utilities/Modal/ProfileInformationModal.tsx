import React, { useCallback } from 'react';
import {
  ModalContainer,
  ProfileInformationWrapper,
  ProfileInfo,
  UserProfileImage,
  UserProfileWapper,
  UserDescription,
  Premium,
  Input,
  ActionGroup,
  LinkAction,
  EditButton,
} from 'components/utilities/Modal/modal.styles';
import { DismissIcon, FormGroup } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal/reducers';
import Pencil from 'public/assets/icons/Pencil';
import Button from 'components/widgets/Button';
import Image from 'next/image';
import { Link } from 'react-scroll';

export default function ProfileInformationModal() {
  const dispatch = useAppDispatch();
  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <ModalContainer style={{ maxWidth: '715px' }}>
      <ProfileInformationWrapper>
        <DismissIcon className="dismiss-icon">
          <CrossRounded onClick={handleModalClose} />
        </DismissIcon>
        <h1>Profile information</h1>
        <ProfileInfo>
          <UserProfileWapper className="premium">
            <UserProfileImage
              src={'/assets/images/avatar.png'}
              alt="user profile"
              width={153}
              height={153}
            />
            <Premium className="premium-tag">
              <Image
                src="/assets/svgs/premium.svg"
                alt="premium"
                width={30}
                height={20}
              />
            </Premium>
            <EditButton htmlFor="inputTag" className="EditButton">
              <Pencil />
              <input id="inputTag" className="inputTag" type="file" />
            </EditButton>
          </UserProfileWapper>
          <UserDescription>
            <div className="user-description">
              <h2>Update photo</h2>
              <p>
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </p>
            </div>
            <div className="user-tag">
              <span>Premium</span>
            </div>
          </UserDescription>
        </ProfileInfo>
        <FormGroup className="form-group">
          <label>Name</label>
          <Input id="" value={'Ally Blackmay'} type="text"></Input>
          <div className="input-info">
            <p>
              Appears on your Profile page, as your byline, and in your
              responses.
            </p>
            <span>12/50</span>
          </div>
        </FormGroup>
        <FormGroup className="form-group">
          <label>Bio</label>
          <Input id="" type="text"></Input>
          <div className="input-info">
            <p>Appears on your Profile and next to your stories.</p>
            <span>0/160</span>
          </div>
        </FormGroup>
        <ActionGroup>
          <LinkAction className="LinkButton">
            Go to the Premium status
          </LinkAction>
          <div className="action">
            <Button className="CancelButton">Cancel</Button>
            <Button className="SaveButton">Save</Button>
          </div>
        </ActionGroup>
      </ProfileInformationWrapper>
    </ModalContainer>
  );
}
