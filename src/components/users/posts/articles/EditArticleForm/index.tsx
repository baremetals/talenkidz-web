import { ChangeEvent, useContext, useState } from 'react';

import { useQuery } from '@apollo/client';
import { CategoriesDocument } from 'generated/graphql';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import { FormControl, TextField } from '@mui/material';
import axios from 'axios';
import Button from 'components/users/Auth/Button';
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
import { ErrorMsg } from 'components/widgets/Input';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { Edit } from 'public/assets/icons/Edit';
import { useForm } from 'react-hook-form';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { AuthContext } from 'src/features/auth/AuthContext';
import { articleFormContentSelector, closeModal } from 'src/features/modal';
import { TArticleFormProps } from 'src/types';
import { customSlugify, handleImgChange } from 'src/utils';
import { Column, InnerContainer, Row, Title } from 'styles/common.styles';
import {
  DismissIcon,
  EditorTextWrapper,
  FormGroup,
  FormWrap,
  FormWrapper,
  InnerFormWrapper,
  UploadLabel,
} from '../../createpost.styles';

// import { formReducer, INITIAL_STATE } from 'components/list/Create/formReducer';

const PostEditor: any = dynamic(
  () => import('components/utilities/Editor/EditEditor'),
  {
    ssr: false,
  }
);

const EditArticleForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formContent = useAppSelector(articleFormContentSelector);
  const { user } = useContext(AuthContext);
  const { data } = useQuery(CategoriesDocument, {});
  const categories = data?.categories?.data;
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>(formContent?.body as string);
  const [imgSizeErr, setImgSizeErr] = useState(false);
  const [uploadImg, setUploadImg] = useState<File | string>('');
  const [displayImg, setDisplayImg] = useState<string | null>(
    formContent?.heroImage as string
  );
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [image] = useState(false);
  const [body] = useState(false);

  // console.log(displayImg);
  // const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TArticleFormProps>();

  //   useEffect(() => {
  //     const subscribe = setContent(formContent?.body as string);

  //     return () => {
  //       subscribe;
  //     };
  //   }, [formContent?.body]);

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

  // console.log('=====>', formContent)

  const uploadImage = async (heroImage: File) => {
    const form = new FormData();
    form.append('file', heroImage, heroImage.name);

    const uploadApi = await axios.post(`/api/upload`, form, {
      headers: { Accept: 'multipart/form-data' },
    });

    if (!uploadApi?.data?.content?.id) {
      throw new Error('Issue uploading image, please try again later');
    }

    return {
      heroImage: uploadApi?.data?.content?.id as string,
      imageURL: uploadApi?.data?.content?.url as string,
    };
  };

  const saveArticle = async (data: any, articleUrl: string) => {
    // console.log('============>data', data);
    const res = await axios.post('/api/articles/update', { data });
    // console.log('============>', res)
    if (res.status === 200) {
      dispatch(closeModal());
      router.push(articleUrl);
    } else {
      await axios.post('/api/upload/delete', {
        data: { id: data.heroImage },
      });
    }
  };
  // console.log(user)
  const onSubmit = async (info: TArticleFormProps) => {
    try {
      const heroImage = uploadImg as File;
      const url = process.env.NEXT_PUBLIC_SITE_URL;
      setSubmitting(true);

      if (uploadImg == '' && formContent?.heroImage == '') {
        throw new Error('Please select an image to upload');
      }

      if (!info.body && content == '') {
        throw new Error('Please provide article content');
      }

      const randomString = uuidv4();
      let category = formContent?.category;
      let title = formContent?.title as string;
      let slug = formContent?.slug as string;

      if (title !== info.title) {
        title = info.title;

        slug = customSlugify(
          info.title + randomString.slice(0, 6)
        ).toLowerCase();
      }

      if (info.category !== 'Please select a category') {
        const found = categories.find(
          (element: { id: string }) => element.id === info.category
        );
        category = found?.attributes?.name.trim();
      }

      const articleUrl = `${url}/articles/${customSlugify(
        category as string
      )}/${slug}`;

      let articleData = {
        id: formContent?.articleId,
        title,
        body: content,
        category:
          info.category !== 'Please select a category'
            ? info.category
            : formContent?.categoryId,
        slug: slug.toLowerCase(),
        blurb: info.blurb,
        readingTime: info.readingTime,
        creatorId: user?.id,
      };

        let seo = {
            title,
            description: info.blurb,
            url: articleUrl.toLowerCase(),
            keywords: info.keywords,
            type: 'article',
            author: user?.orgName
              ? user?.orgName
              : user?.fullName || user?.username,
          }

      
      if (uploadImg !== '') {
        // const heroImage = uploadImg as File;
        const { heroImage: uploadedHeroImage, imageURL } = await uploadImage(
          heroImage
        );

        const data = {
          ...articleData,
          heroImage: uploadedHeroImage,
          SEO: {
            ...seo,
            image: imageURL,
          },
        };

        await saveArticle(data, articleUrl);
      } 
      else {

        const data = {
          ...articleData,
          heroImage: formContent?.heroImageId,
          SEO: {
            ...seo,
            image: formContent?.heroImage,
          },
        };

        await saveArticle(data, articleUrl);
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
            Edit Article
          </Title>
          {error && <ErrorMsg>{msg}</ErrorMsg>}
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <Row className="horizontal">
              <Column className="only-horizontal-padding">
                <TextField
                  fullWidth
                  label=""
                  // variant="outlined"
                  defaultValue={formContent?.title as string}
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
                      defaultValue={formContent?.category}
                      // value=""
                      {...register('category', { required: true })}
                    >
                      <option value={'Please select a category'}>
                        {formContent?.category}
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
                label=""
                multiline
                fullWidth
                rows={4}
                defaultValue={formContent?.blurb}
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
                  defaultValue={formContent?.readingTime}
                  variant="outlined"
                  //   placeholder="3 mins"
                  {...register('readingTime')}
                />
              </Column>
              <Column className="only-horizontal-padding">
                <TextField
                  fullWidth
                  defaultValue={formContent?.keywords}
                  variant="outlined"
                  placeholder=" e.g. kids, children, eductation"
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
                body={content}
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
            <FormGroup className="submit-button">
              <Button
                content="Send"
                type="submit"
                disabled={submitting}
                loading={submitting}
              />
              {submitting && <p>submitting.......</p>}
            </FormGroup>
          </FormWrap>
        </InnerFormWrapper>
      </FormWrapper>
      {/* <StripeForm purchaseType={formType} /> */}
    </InnerContainer>
  );
};

export default EditArticleForm;
