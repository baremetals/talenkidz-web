import React, { ChangeEvent, useCallback, useState } from 'react';
import {
  ModalContainer,
} from 'components/utilities/Modal/modal.styles';
import { DismissIcon, FormGroup } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal } from 'src/features/modal/reducers';
import Pencil from 'public/assets/icons/Pencil';
import Button from 'components/widgets/Button';
import Image from 'next/image';
import { ActionGroup, Input, LinkAction, Premium, ProfileInfo, ProfileInformationWrapper, UserDescription, UserProfileImage, UserProfileWapper } from './editProfile.styles';
import { isUser } from 'src/features/auth';
import MyProfile from './MyProfile';
import OrgProfile from './OrgProfile';


export default function ProfileInformationModal() {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector(isUser);
  console.log(user)

  const [profile, setProfile] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    bio: user?.bio || 'lake',
    // email: user?.email,
  });
  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async () => {
  //   // console.log(uploadImg)
  //   if (uploadImg !== null) {
  //     setLoading(true);
  //     let form = new FormData();
  //     form.append('file', uploadImg, uploadImg?.name);
  //     try {
  //       const res = await axios(`/api/upload`, {
  //         method: 'post',
  //         headers: {
  //           Accept: 'multipart/form-data',
  //         },
  //         data: form as any,
  //       });
  //       // console.log(res)

  //       if (res?.data?.content?.url) {
  //         const data = {
  //           fullName: profile?.fullName,
  //           username: profile?.username,
  //           pronoun: profile?.pronoun,
  //           bio: profile?.bio,
  //           gender: profile?.gender,
  //           backgroundImg: res?.data?.content?.url,
  //         };
  //         console.log(data);

  //         const dta = await axios.post('/api/user/update', {
  //           data,
  //         });
  //         console.log(dta);
  //         if (dta.status === 200) {
  //           setUploadImg(null);
  //           setLoading(false);
  //           toast.success(dta?.data?.message, { position: 'top-center' });
  //         } else {
  //           setLoading(false);
  //           await axios.post('/api/upload/delete', {
  //             data: { id: res?.data?.content?.id },
  //           });
  //           toast.error('Issue updating details', { position: 'top-center' });
  //         }
  //       } else {
  //         setLoading(false);
  //         toast.error('Issue uploading image', { position: 'top-center' });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //       toast.error('issues from mars come back later', {
  //         position: 'top-center',
  //       });
  //     }
  //   } else {
  //     const data = {
  //       fullName: profile?.fullName,
  //       username: profile?.username,
  //       pronoun: profile?.pronoun,
  //       bio: profile?.bio,
  //       gender: profile?.gender,
  //       backgroundImg,
  //     };
  //     try {
  //       const dta = await axios.post('/api/user/update', {
  //         data,
  //       });

  //       if (dta.status === 200) {
  //         setUploadImg(null);
  //         setLoading(false);
  //         toast.success(dta?.data?.message, { position: 'top-center' });
  //       } else {
  //         setLoading(false);
  //         toast.error('Issue updating details', { position: 'top-center' });
  //       }
  //     } catch (err) {
  //       setLoading(false);
  //       toast.error('Something went wrong please try again later', {
  //         position: 'top-center',
  //       });
  //     }
  //   }
  // };

  return (
    <>
    {user?.userType === 'standard' ? (<MyProfile />) : (<OrgProfile />)}
    </>

  );
}
