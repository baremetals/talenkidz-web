import React, { ChangeEvent, useContext, useState } from 'react'
import { handleImgChange, uploadNewImage } from 'src/utils';
import { EditCoverButton, ProfileCoverImage, ProfileCoverWrapper } from '../profile.styles';
import PencilTwo from 'public/assets/icons/PencilTwo';
import { AuthContext } from 'src/features/auth/AuthContext';
import Skeleton from '@mui/material/Skeleton';
// import {Delete} from 'public/assets/icons/Delete';

type TBackGroundImgProps = {
  backgroundImg: string
  membership: string
  ownerId: number;
};

const BackGroundImg: React.FC<TBackGroundImgProps> = ({
  backgroundImg,
  ownerId,
  // membership,
}) => {
  const { user } = useContext(AuthContext);
  const [, setUploadImg] = useState<any>(null);
  const [profileCover, setProfileCover] = useState<string | null>(
    backgroundImg
  );
  const [loading, setLoading] = useState(false);
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('In the function',uploadImg);
    try {
      await handleImgChange({
        event,
        setUploadImg,
        setDisplayImg: setProfileCover,
      });
      setLoading(true);
      const response = await uploadNewImage(
        event?.target?.files![0],
        'background'
      );

      if (response?.data?.message === 'Image Successfully changed') {
        setLoading(false);
      }
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('The Error Is: ', error);
      throw new Error('Something is wrong please try again later');
    }
  };

  return (
    <ProfileCoverWrapper>
      {!loading ? (
        <ProfileCoverImage
          src={profileCover ? (profileCover as string) : '/background.jpg'}
          alt="Profile Banner"
          // width={1466.36}
          // height={300}
        />
      ) : (
        <Skeleton variant="rounded" width="100%" height={'18.75rem'} />
      )}

      {ownerId == user?.id ? (
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
      ) : null}
    </ProfileCoverWrapper>
  );
};

export default BackGroundImg