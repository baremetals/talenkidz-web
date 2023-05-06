import React, { ChangeEvent, useContext, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@apollo/client';
import { CategoriesDocument } from 'generated/graphql';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// import { formReducer, INITIAL_STATE } from 'components/list/Create/formReducer';

const PostEditor: any = dynamic(
  () => import('components/utilities/Editor/PostEditor'),
  {
    ssr: false,
  }
);
import { FormControl, TextField } from '@mui/material';
import { ErrorMsg } from 'components/widgets/Input';
import { Column, InnerContainer, Row, Title } from 'styles/common.styles';
import {
  FormWrap,
  FormWrapper,
  InnerFormWrapper,
  FormGroup,
  UploadLabel,
  EditorTextWrapper,
  DismissIcon,
} from '../../createpost.styles';
import {
  ActionButton,
  CoverPictureUploaderWrapper,
  CoverPictureWrapper,
  EditButton,
  Image,
  ImageActions,
  Label,
  NoCoverPictureWrapper,
  SelectCoverPictureButton,
} from 'components/users/EditProfile/editProfile.styles';
import Button from 'components/users/Auth/Button';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from 'public/assets/icons/Edit';
import { customSlugify, handleImgChange } from 'src/utils';
import { AuthContext } from 'src/features/auth/AuthContext';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { TArticleFormProps } from 'src/types';

const ArticleForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useContext(AuthContext);
  const { data } = useQuery(CategoriesDocument, {});
  const categories = data?.categories?.data;

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>('');
  const [imgSizeErr, setImgSizeErr] = useState(false);
  const [uploadImg, setUploadImg] = useState<File | string>('');
  const [displayImg, setDisplayImg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [image] = useState(false);
  const [body] = useState(false);

  // const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TArticleFormProps>();

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('In the function',uploadImg);
    try {
      const res = await handleImgChange({
        event,
        setUploadImg,
        setDisplayImg,
      });
      if (res?.error) {
        setMsg(res?.error);
        setImgSizeErr(true);
        setTimeout(() => {
          setImgSizeErr(false);
        }, 8000);
      } else {
        setValue('heroImage', uploadImg as File);
      }
    } catch (error) {
      setMsg('Something is wrong please try again later');
      setImgSizeErr(true);
      setTimeout(() => {
        setImgSizeErr(false);
      }, 8000);
      console.log('The Error Is: ', error);
    }
  };
  // console.log(user)
  // const onSubmit = async (info: TArticleFormProps) => {
  //   // console.log(uploadImg);
  //   // setSubmitting(true);

  //   if (uploadImg == null || uploadImg == '') {
  //     setImageError(true);
  //     setSubmitting(false);
  //     setTimeout(() => {
  //       setImageError(false);
  //     }, 10000);
  //   } else if (!info.body) {
  //     setBodyError(true);
  //     setSubmitting(false);
  //     setTimeout(() => {
  //       setBodyError(false);
  //     }, 10000);
  //   } else {
  //     const heroImage = uploadImg as File;
  //     const url = process.env.NEXT_PUBLIC_SITE_URL;

  //     const found = categories.find(
  //       (element: { id: string }) => element.id === info.category
  //     );
  //     const randomString = uuidv4();
  //     const category = found?.attributes?.name;
  //     const slug: string = customeSlugify(
  //       info.title + randomString.slice(0, 6)
  //     ).toLowerCase();
  //     // '/^[A-Za-z0-9-_.~]*$/';
  //     const articleUrl = `${url}/articles/${category}/${slug}`;
  //     // console.log(slug)
  //     let form = new FormData();
  //     form.append('file', heroImage, heroImage.name);

  //     try {
  //       const uploadApi = await axios(`/api/upload`, {
  //         method: 'post',
  //         headers: {
  //           Accept: 'multipart/form-data',
  //         },
  //         data: form,
  //       });

  //       // console.log('============> ', uploadApi);

  //       if (uploadApi?.data?.content?.id) {
  //         // console.log("============>", uploadApi?.data)
  //         const data = {
  //           title: info.title,
  //           body: info.body,
  //           category: info.category,
  //           creator: user?.id,
  //           slug: slug.toLowerCase(),
  //           blurb: info.blurb,
  //           readingTime: info.readingTime,
  //           heroImage: uploadApi?.data?.content?.id,
  //           SEO: {
  //             title: info.title,
  //             description: info.blurb,
  //             image: uploadApi?.data?.content?.url,
  //             url: articleUrl.toLowerCase(),
  //             type: 'article',
  //             author: user?.orgName
  //               ? user?.orgName
  //               : user?.fullName || user?.username,
  //             keywords: info.keywords,
  //           },
  //         };
  //         await axios
  //           .post('/api/articles', {
  //             data,
  //           })
  //           .then((res) => {
  //             // console.log('from the then callback', res);
  //             if (res.status === 200) {
  //               dispatch(closeModal());
  //               router.push(articleUrl);
  //             }
  //           })
  //           .catch(async (err) => {
  //             console.log('from the then catch block', err.response.data);
  //             setSubmitting(false);
  //             setMsg('Sorry something went wrong please try again later.');
  //             setError(true);
              // await axios.post('/api/upload/delete', {
              //   data: { id: uploadApi?.data?.content?.id },
              // });
  //             setTimeout(() => {
  //               dispatch(closeModal());
  //             }, 7000);
  //           });
  //       } else {
  //         setSubmitting(false);
  //         setMsg('Issue uploading image, please try again later');
  //         setError(true);
  //         // setTimeout(() => {
  //         //   dispatch(closeModal());
  //         // }, 7000);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       setSubmitting(false);
  //       setMsg('Issue uploading image, please try again later');
  //       setError(true);
  //       // setTimeout(() => {
  //       //   dispatch(closeModal());
  //       // }, 7000);
  //     }
  //   }
  // };

  const onSubmit = async (info: TArticleFormProps) => {
    try {
      const heroImage = uploadImg as File;
      const url = process.env.NEXT_PUBLIC_SITE_URL;

      if (!heroImage) {
        throw new Error('Please select an image to upload');
      }

      if (!info.body) {
        throw new Error('Please provide article content');
      }

      const found = categories.find(
        (element: { id: string }) => element.id === info.category
      );
      const randomString = uuidv4();
      const category = found?.attributes?.name;
      const slug: string = customSlugify(
        info.title + randomString.slice(0, 6)
      ).toLowerCase();
      const articleUrl = `${url}/articles/${category}/${slug}`;
      let form = new FormData();
      form.append('file', heroImage, heroImage.name);

      const uploadApi = await axios(`/api/upload`, {
        method: 'post',
        headers: {
          Accept: 'multipart/form-data',
        },
        data: form,
      });

      if (!uploadApi?.data?.content?.id) {
        throw new Error('Issue uploading image, please try again later');
      }

      const data = {
        title: info.title,
        body: info.body,
        category: info.category,
        creator: user?.id,
        slug: slug.toLowerCase(),
        blurb: info.blurb,
        readingTime: info.readingTime,
        heroImage: uploadApi?.data?.content?.id,
        SEO: {
          title: info.title,
          description: info.blurb,
          image: uploadApi?.data?.content?.url,
          url: articleUrl.toLowerCase(),
          type: 'article',
          author: user?.orgName
            ? user?.orgName
            : user?.fullName || user?.username,
          keywords: info.keywords,
        },
      };

      const res = await axios.post('/api/articles', {
        data,
      });

      // console.log('the response =======>>>>>', res)

      if (res.status === 200) {
        dispatch(closeModal());
        router.push(articleUrl);
      } else {
        await axios.post('/api/upload/delete', {
          data: { id: uploadApi?.data?.content?.id },
        });
      }
    } catch (error: any) {
      console.error(error);
      setSubmitting(false);
      setMsg(error.message);
      setError(true);
    }
  };

  return (
    <InnerContainer>
      <FormWrapper>
        <InnerFormWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <Title
            style={{
              lineHeight: '1.6',
              fontSize: '1.5rem',
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            Write An Article
          </Title>
          {error && <ErrorMsg>{msg}</ErrorMsg>}
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <Row className="horizontal">
              <Column className="only-horizontal-padding">
                <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  {...register('title', { required: true })}
                />
                {errors.title && (
                  <span style={{ color: 'red' }}>Title is required</span>
                )}
              </Column>
              <Column className="only-horizontal-padding">
                <FormGroup>
                  <FormControl fullWidth>
                    {/* <InputLabel>Category</InputLabel> */}
                    <select
                      // labelId="category-select-label"
                      // label="Category"
                      // value=""
                      {...register('category', { required: true })}
                    >
                      <option value={'Please select a category'}>
                        Please select a category
                      </option>
                      {categories &&
                        categories?.map(
                          (c: { id: string; attributes: { slug: string } }) => (
                            <option key={c?.id} value={(c?.id as string) || ''}>
                              {c?.attributes?.slug}
                            </option>
                          )
                        )}
                    </select>
                  </FormControl>
                  {errors.category && (
                    <span style={{ color: 'red' }}>Category is required</span>
                  )}
                </FormGroup>
              </Column>
            </Row>

            <FormGroup>
              <TextField
                label="Article Intro"
                multiline
                fullWidth
                rows={4}
                {...register('blurb', { required: true })}
              />
              {errors.blurb && (
                <span style={{ color: 'red' }}>Description is required</span>
              )}
            </FormGroup>

            <Row className="horizontal">
              <Column className="only-horizontal-padding">
                <TextField
                  fullWidth
                  label="Reading Time"
                  variant="outlined"
                  placeholder="3 mins"
                  {...register('readingTime')}
                />
              </Column>
              <Column className="only-horizontal-padding">
                <TextField
                  fullWidth
                  label="keywords"
                  variant="outlined"
                  placeholder=" e.g. kids, children, education"
                  {...register('keywords', { required: true })}
                />
              </Column>
            </Row>

            <br />
            <UploadLabel>Article Image</UploadLabel>

            <FormGroup style={{ marginTop: '0.5rem' }}>
              <>
                {image && (
                  <ErrorMsg style={{ color: 'red' }}>
                    An image is required
                  </ErrorMsg>
                )}
              </>
              {imgSizeErr && <ErrorMsg>{msg}</ErrorMsg>}

              <CoverPictureUploaderWrapper>
                <Label>Upload</Label>
                <TextField style={{ display: 'none' }} fullWidth type="file" />
                {displayImg ? (
                  <>
                    <CoverPictureWrapper>
                      <div className="overlay"></div>
                      <Image
                        className="contain"
                        src={displayImg as any}
                        alt="upload picture"
                      />
                      <ImageActions>
                        <ActionButton>
                          <EditButton htmlFor="upload-listImage-photo">
                            <input
                              style={{ display: 'none' }}
                              id="upload-listImage-photo"
                              name="heroImage"
                              type="file"
                              // onChange={handleImageChange('heroImage')}
                              onChange={(e) => handleImageChange(e)}
                            />
                            <Edit />
                          </EditButton>
                        </ActionButton>
                        <ActionButton
                          onClick={() => {
                            setDisplayImg('');
                            setValue('heroImage', null);
                          }}
                        >
                          <BsTrash />
                        </ActionButton>
                      </ImageActions>
                    </CoverPictureWrapper>
                  </>
                ) : (
                  <NoCoverPictureWrapper>
                    <EditButton htmlFor="upload-listImage-photo">
                      <input
                        style={{ display: 'none' }}
                        id="upload-listImage-photo"
                        type="file"
                        name="heroImage"
                        // onChange={handleImageChange('heroImage')}
                        onChange={(e) => handleImageChange(e)}
                      />
                      <SelectCoverPictureButton>
                        <BsCloudArrowUp />
                        Select a picture
                      </SelectCoverPictureButton>
                    </EditButton>
                  </NoCoverPictureWrapper>
                )}
              </CoverPictureUploaderWrapper>
            </FormGroup>
            <>
              {body && (
                <ErrorMsg style={{ color: 'red' }}>Body is required</ErrorMsg>
              )}
            </>
            <UploadLabel>Article Body</UploadLabel>
            <EditorTextWrapper>
              <PostEditor
                // id={user?.id as string}
                editorState={editorState}
                onEditorStateChange={(newState: EditorState) => {
                  setEditorState(newState);
                  setContent(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                  setValue('body', content);
                }}
              />
            </EditorTextWrapper>
            {/* {error && <ErrorMsg>{msg}</ErrorMsg>} */}
            <FormGroup className="submit-button">
              <Button
                content={'Send'}
                type="submit"
                disabled={submitting}
                loading={submitting}
              />
              {submitting && <p>submitting.......</p>}
            </FormGroup>
            {error && <ErrorMsg>{msg}</ErrorMsg>}
          </FormWrap>
        </InnerFormWrapper>
      </FormWrapper>
      {/* <StripeForm purchaseType={formType} /> */}
    </InnerContainer>
  );
};

export default ArticleForm;
