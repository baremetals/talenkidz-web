import React, { ChangeEvent, useContext, useState } from 'react'
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';


import Pencil from 'public/assets/icons/Pencil';
import { EditIconButton, Premium, UserProfileImage, UserProfileImageBlock } from '../profile.styles';
import { handleImgChange, uploadNewImage } from 'src/utils';
import { AuthContext } from 'src/features/auth/AuthContext';


type TProfileImage = {
  membership: string;
  avatar: string;
  userType: string;
  ownerId: number;
};

const ProfileImage: React.FC<TProfileImage> = ({
  membership,
  avatar,
  userType,
  ownerId,
}) => {
  const { user } = useContext(AuthContext);
  const [, setUploadImg] = useState<any>(null);
  const [loading, setLoading] = useState(false)
  const [profileImg, setProfileImg] = useState<string | null>(avatar);

  // console.log(uploadImg);
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('In the function', event?.target?.files![0]);
    try {
      await handleImgChange({
        event,
        setUploadImg,
        setDisplayImg: setProfileImg,
      });
      // console.log(uploadImg);
      setLoading(true);
      const response = await uploadNewImage(
        event?.target?.files![0],
        'profile'
      );
      // console.log(response?.data?.message);
      if (response?.data?.message === 'Image Successfully changed') {
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // console.log('The Error Is: ', error);
      throw new Error('Something is wrong please try again later');
    }
  };

  return (
    <UserProfileImageBlock
      className={membership === 'premium' ? 'premiumStatus' : ''}
    >
      {!loading ? (
        <UserProfileImage
          src={profileImg ? (profileImg as string) : '/default.jpg'}
          alt="user profile"
          // width={200}
          // height={200}
        />
      ) : (
        <Skeleton variant="circular" width={200} height={200} />
      )}

      {userType === 'organisation' && (
        <Premium className="premium-tag">
          <Image
            src="/assets/svgs/premium.svg"
            alt="premium"
            width={30}
            height={20}
          />
        </Premium>
      )}
      {ownerId == user?.id ? (
        <EditIconButton htmlFor="profilePic" className="EditButton">
          <Pencil />
          <input
            id="profilePic"
            className="inputTag"
            type="file"
            onChange={(e) => handleImageChange(e)}
          />
        </EditIconButton>
      ) : null}
    </UserProfileImageBlock>
  );
};

export default ProfileImage