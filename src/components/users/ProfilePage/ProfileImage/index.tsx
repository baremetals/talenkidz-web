import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image';

import Pencil from 'public/assets/icons/Pencil';
import { EditIconButton, Premium, UserProfileImage, UserProfileImageBlock } from '../profile.styles';
import { handleImgChange, uploadNewImage } from 'src/utils';


type TProfileImage = {
  membership: string;
  avatar: string;
  userType: string;
};

const ProfileImage: React.FC<TProfileImage> = ({membership, avatar, userType}) => {
    const [, setUploadImg] = useState<any>(null);
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
        await uploadNewImage(event?.target?.files![0], 'profile');
        // console.log(resp);
      } catch (error) {
        console.log('The Error Is: ', error);
      }
    };

  return (
    <UserProfileImageBlock
      className={membership === 'premium' ? 'premiumStatus' : ''}
    >
      <UserProfileImage
        src={profileImg? profileImg as string : "/default.jpg"}
        alt="user profile"
        // width={200}
        // height={200}
      />
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
      <EditIconButton htmlFor="profilePic" className="EditButton">
        <Pencil />
        <input
          id="profilePic"
          className="inputTag"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
      </EditIconButton>
    </UserProfileImageBlock>
  );
};

export default ProfileImage