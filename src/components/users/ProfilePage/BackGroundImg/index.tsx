import React, { ChangeEvent, useState } from 'react'
import { handleImgChange, uploadNewImage } from 'src/utils';
import { EditCoverButton, ProfileCoverImage, ProfileCoverWrapper } from '../profile.styles';
import PencilTwo from 'public/assets/icons/PencilTwo';
// import {Delete} from 'public/assets/icons/Delete';

type TBackGroundImgProps = {
  backgroundImg: string
  membership: string
};

const BackGroundImg: React.FC<TBackGroundImgProps> = ({
  backgroundImg,
  // membership,
}) => {
  const [uploadImg, setUploadImg] = useState<any>(null);
  const [profileCover, setProfileCover] = useState<string | null>(
    backgroundImg
  );
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('In the function',uploadImg);
    try {
      await handleImgChange({
        event,
        setUploadImg,
        setDisplayImg: setProfileCover,
      });
      await uploadNewImage(uploadImg, 'background');
      // console.log(resp);
    } catch (error) {
      console.log('The Error Is: ', error);
    }
  };

  return (
    <ProfileCoverWrapper>
      <ProfileCoverImage
        src={profileCover? profileCover as string : '/background.jpg'}
        alt="Profile Banner"
        // width={1466.36}
        // height={300}
      />
        <div className="actions">
          <EditCoverButton htmlFor="inputTag">
            Edit the cover
            <span>
              <PencilTwo />
              {/* <Delete onClick={() => setProfileCover(backgroundImg)} /> */}
            </span>
            <input
              id="inputTag"
              className="inputTag"
              type="file"
              onChange={(e) => handleImageChange(e)}
            />
          </EditCoverButton>
        </div>
    </ProfileCoverWrapper>
  );
};

export default BackGroundImg