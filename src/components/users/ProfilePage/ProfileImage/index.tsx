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
    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
      // console.log('In the function',uploadImg);
      try {
        const res = await handleImgChange({
          event,
          setUploadImg,
          setDisplayImg: setProfileImg,
        });
        await uploadNewImage(res as File, 'profile');
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
        src={profileImg as string}
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
      <EditIconButton htmlFor="inputTag" className="EditButton">
        <Pencil />
        <input
          id="inputTag"
          className="inputTag"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
      </EditIconButton>
    </UserProfileImageBlock>
  );
};

export default ProfileImage