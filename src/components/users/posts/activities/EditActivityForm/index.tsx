import React, { ChangeEvent, useContext, useEffect, useReducer, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { FormData } from 'formdata-node';

import {
  InputLabel,
  MenuItem,
  TextField,
  Select,
  FormControl,
} from '@mui/material';

import { CategoriesDocument, Maybe, Listing, Event } from 'generated/graphql';
import { useQuery } from '@apollo/client';

import { useForm } from 'react-hook-form';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// import PostEditor from 'components/Editor/PostEditor';
const PostEditor: any = dynamic(
  () => import('components/utilities/Editor/EditEditor'),
  {
    ssr: false,
  }
);

import { ErrorMsg } from 'components/widgets/Input';
import Button from 'components/users/Auth/Button';
import {
  FormWrapper,
  InnerFormWrapper,
  FormWrap,
  FormGroup,
  FormInput,
  UploadLabel,
  EditorTextWrapper,
} from '../../createpost.styles';
import {
  Column,
  Row,
  InnerContainer,
  Title,
  PageContainer,
} from 'styles/common.styles';

import {
  Image,
  Label,
  ActionButton,
  CoverPictureUploaderWrapper,
  CoverPictureWrapper,
  EditButton,
  ImageActions,
  NoCoverPictureWrapper,
  SelectCoverPictureButton,
} from 'components//users/EditProfile/editProfile.styles';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from 'public/assets/icons/Edit';
// import { addressType } from './Form';
import { FormProps } from 'src/types';
import GoogleMap from 'components/utilities/Google/GoogleMap';
import SearchBox from 'components/utilities/Google/SearchBox';
import { INITIAL_STATE, formReducer } from 'components/users/posts/formReducer';
import { AuthContext } from 'src/features/auth/AuthContext';
import { customSlugify, handleImgChange } from 'src/utils';
// import { Modal } from 'components/Modal';

export type EditFormProps = {
  id: string;
  formType: string;
  attributes: Maybe<Listing> | Maybe<Event>;
};

const EditActivityForm = ({ id, attributes, formType }: EditFormProps) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { data } = useQuery(CategoriesDocument, {});
  const categories = data?.categories?.data;
  // console.log(attributes?.slug)
  // const [uploadImg, setUploadImg] = useState<FileType | string>('/default-list-img.jpg');
  const [content, setContent] = useState<string>(
    (attributes?.body as string) || ''
  );
  const [, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const [imgSizeErr, setImgSizeErr] = useState(false);
  const [uploadImg, setUploadImg] = useState<File | string>(
    attributes?.listImage as string
  );
  const [displayImg, setDisplayImg] = useState<string | null>(
    attributes?.listImage as string
  );
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [image, setImageError] = useState(false);
  const [body, setBodyError] = useState(false);
  const [cats, setCats] = useState(attributes?.category?.data?.id as string);

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  // const [address, setAddress] = useState({...state})

  useEffect(() => {
    const location = {
      name: (attributes?.Location?.name as string) || '',
      street: (attributes?.Location?.street as string) || '',
      town: (attributes?.Location?.town as string) || '',
      postCode: (attributes?.Location?.postCode as string) || '',
      longitude: (attributes?.Location?.longitude as number) || 0,
      latitude: (attributes?.Location?.latitude as number) || (0 as number),
      //   linkButtonText: action.payload.linkButtonText,
      //   venue: action.payload.venue,
    };
    // setAddress({...location})
    dispatch({
      type: 'CHANGE_VALUE',
      payload: { ...location },
    });
  }, [attributes?.Location?.latitude, attributes?.Location?.longitude, attributes?.Location?.name, attributes?.Location?.postCode, attributes?.Location?.street, attributes?.Location?.town]);

  console.log(state.venue);
  const {
    register,
    handleSubmit,
    setValue,
    // control,
    formState: { errors },
  } = useForm<FormProps>();

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
        setValue('listImage', uploadImg as File);
      }
    } catch (error) {
      setMsg('Something is wrong please try again later');
      setImgSizeErr(true);
      setTimeout(() => {
        setImgSizeErr(false);
      }, 8000);
      // console.log('The Error Is: ', error);
    }
  };
  
  const resolveError = (
    message: string = 'Sorry something went wrong please try again later.'
  ) => {
    setSubmitting(false);
    setMsg(message);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 7000);
  };
  const onSubmit = async (info: FormProps) => {
    // console.log('going down: ', info.listImage);
    // console.log(info)
    // console.log(state);
    setSubmitting(true);
    if (uploadImg == '') {
      setImageError(true);
      setSubmitting(false);
      setTimeout(() => {
        setImageError(false);
      }, 10000);
    }

    if (content === '') {
      setBodyError(true);
      setSubmitting(false);
      setTimeout(() => {
        setBodyError(false);
      }, 10000);
    }

    const url = process.env.NEXT_PUBLIC_SITE_URL;

    const found = categories.find(
      (element: { id: string }) => element.id === cats
    );
    const category = found?.attributes?.name;
    // console.log(id);
    let slug = attributes?.slug as string;
    if (info.title !== attributes?.title) {
      const randomString = uuidv4();
      slug = customSlugify(
        info.title + randomString.slice(0, 6)
      ).toLowerCase();
    }
    const seoUrl = `${url}/activities/${category.toLowerCase()}/${slug.toLowerCase()}`;
    const splitData = {
      title: info.title,
      body: content,
      category: cats,
      slug,
      description: info.description,
      startDate: info.startDate,
      endDate: info.endDate,
      startTime: info.startTime,
      endTime: info.endTime,
      price: info.price,
      link: info.link,
      venue: info.venue,
      linkButtonText: info.linkButtonText,
      Location: {
        name: info.name,
        street: info.street,
        town: info.town,
        postCode: info.postCode,
        longitude: state.longitude,
        latitude: state.latitude,
      },
    };
    const seo = {
      title: info.title,
      description: info.description,
      url: seoUrl,
      type: 'activity',
      author: user?.orgName ? user?.orgName : user?.fullName || user?.username,
      keywords: info.title.split(' ').join(', '),
    };
  
    if (!info.listImage) {
      // console.log('going down: ');
      const data = {
        ...splitData,
        listImage: uploadImg,
        SEO: {
          ...seo,
          image: uploadImg,
        },
      };

      await axios
        .post('/api/list/update', {
          data: {
            data,
            entityId: id,
            formType,
          },
        })
        .then(async (res) => {
          // console.log('the fucking res: ',res)
          if (res.status === 200) {
            router.push(seoUrl);
          }
        })
        .catch((_err) => {
          // console.log('the raas error: ',err.response)
          resolveError();
        });
    } else {
      const { listImage } = info;
      const name = listImage?.name;

      let form = new FormData();
      form.append('file', uploadImg, name);

      try {
        const uploadApi = await axios(`/api/upload`, {
          method: 'post',
          headers: {
            Accept: 'multipart/form-data',
          },
          data: form as any,
        });

        if (uploadApi?.data?.content?.url) {
          // console.log(uploadApi?.data?.content?.url)
          const data = {
            ...splitData,
            listImage: uploadApi?.data?.content?.url,
            SEO: {
              ...seo,
              image: uploadApi?.data?.content?.url,
            },
          };
          await axios
            .post('/api/list/update', {
              data: {
                data,
                entityId: id,
                formType,
              },
            })
            .then(async (res) => {
              // console.log(res.data.data)
              if (res.status === 200) {
                router.push(seoUrl);
              } 
            })
            .catch(async(_err) => {
              // console.log(err.response.data)
              await axios.post('/api/upload/delete', {
                data: { id: uploadApi?.data?.content?.id },
              });
              resolveError();
            });
        } else {
          resolveError('Issue uploading image, please try again later');
        }
      } catch (err) {
        console.log(err);
        resolveError('Issue uploading image, please try again later');
      }
    }
  };

  const onChangeAddress = (data: {
    address_components: any;
    name: string;
    geometry: { location: { lat: () => boolean; lng: () => boolean } };
  }) => {
    const add = data.address_components;
    const location = {
      name: data.name || '',
      street: add[0]?.long_name || '',
      town: add[1]?.long_name || '',
      postCode: add[5]?.long_name || '',
      longitude: data.geometry.location.lng() || (0 as number),
      latitude: data.geometry.location.lat() || (0 as number),
    };
    // setAddress({ ...location });
    dispatch({
      type: 'CHANGE_VALUE',
      payload: { ...location },
    });
  };

  // console.log('state', state);
  return (
    <PageContainer style={{ minHeight: '100vh' }}>
      <InnerContainer>
        <FormWrapper>
          <InnerFormWrapper>
            <Title
              style={{
                lineHeight: '1.6',
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              Edit Listing
            </Title>
            {error && <ErrorMsg>{msg}</ErrorMsg>}
            <FormWrap onSubmit={handleSubmit(onSubmit)}>
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    value={attributes?.title}
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
                        // labelId='category-select-label'
                        name="category"
                        value={cats}
                        // disabled
                        // defaultValue={attributes?.category?.data?.attributes?.name as string}
                        // {...register('category', { required: true })}
                        onChange={(e) => setCats(e.target.value)}
                      >
                        <option value={cats} selected>
                          {
                            attributes?.category?.data?.attributes
                              ?.name as string
                          }
                        </option>
                        {categories &&
                          categories?.map(
                            (c: {
                              id: string;
                              attributes: { slug: string };
                            }) => (
                              <option
                                key={c?.id}
                                value={(c?.id as string) || ''}
                              >
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
                  label="Description"
                  multiline
                  fullWidth
                  value={attributes?.description}
                  rows={2}
                  {...register('description', { required: true })}
                />
                {errors.description && (
                  <span style={{ color: 'red' }}>Description is required</span>
                )}
              </FormGroup>
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>Start Date</UploadLabel>
                    <FormInput
                      value={attributes?.startDate}
                      type="date"
                      {...register('startDate', { required: true })}
                    />
                    {errors.startDate && (
                      <span style={{ color: 'red' }}>
                        Start Date is required
                      </span>
                    )}
                  </FormGroup>
                </Column>

                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>End Date</UploadLabel>
                    <FormInput
                      value={attributes?.endDate}
                      type="date"
                      {...register('endDate', { required: true })}
                    />
                    {errors.endDate && (
                      <span style={{ color: 'red' }}>End Date is required</span>
                    )}
                  </FormGroup>
                </Column>
              </Row>
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>Start Time</UploadLabel>
                    <FormInput
                      value={attributes?.startTime as string}
                      type="time"
                      {...register('startTime', { required: true })}
                    />
                    {errors.startTime && (
                      <span style={{ color: 'red' }}>
                        Start Date is required
                      </span>
                    )}
                  </FormGroup>
                </Column>
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>End Time</UploadLabel>
                    <FormInput
                      value={attributes?.endTime as string}
                      type="time"
                      {...register('endTime', { required: true })}
                    />
                    {errors.endTime && (
                      <span style={{ color: 'red' }}>End Time is required</span>
                    )}
                  </FormGroup>
                </Column>
              </Row>
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    defaultValue={attributes?.price}
                    {...register('price')}
                  />
                </Column>
                <Column className="only-horizontal-padding">
                  <TextField
                    fullWidth
                    label="Link"
                    variant="outlined"
                    defaultValue={attributes?.link}
                    {...register('link', { required: true })}
                  />
                </Column>
              </Row>
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>Please select button text</UploadLabel>
                    <FormControl fullWidth>
                      <InputLabel>Button Text</InputLabel>
                      <Select
                        labelId="link-button-select-label"
                        label="Link Button"
                        defaultValue={attributes?.linkButtonText?.replace(
                          '_',
                          ' '
                        )}
                        {...register('linkButtonText', { required: true })}
                      >
                        <MenuItem value="Buy Tickets">Buy Tickets</MenuItem>
                        <MenuItem value="Learn More">Learn More</MenuItem>
                        <MenuItem value="Register">Register</MenuItem>
                        <MenuItem value="Visit Us">Visit Us</MenuItem>
                        <MenuItem value="Buy Now">Buy Now</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                </Column>
                <Column className="only-horizontal-padding">
                  <UploadLabel>Please select venue option</UploadLabel>
                  <FormGroup>
                    <FormControl fullWidth>
                      <InputLabel>Venue Options</InputLabel>
                      <Select
                        labelId="venue-select-label"
                        label="Venue Location"
                        defaultValue={attributes?.venue}
                        {...register('venue')}
                      >
                        <MenuItem value="location">On Site</MenuItem>
                        <MenuItem value="online">Online</MenuItem>
                        <MenuItem value="both">Online and On Site</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                </Column>
              </Row>
              <br />
              <UploadLabel>
                Search <strong>Location</strong>
              </UploadLabel>
              <GoogleMap>
                <SearchBox onPlace={onChangeAddress}></SearchBox>
              </GoogleMap>

              {state.showInput && (
                <>
                  <Row className="horizontal">
                    <Column className="only-horizontal-padding">
                      <FormGroup>
                        <UploadLabel>
                          Venue <strong>Name</strong>
                        </UploadLabel>
                        <input
                          // fullWidth
                          // label="name"
                          // variant="outlined"
                          defaultValue={state.name}
                          placeholder="Venue Name"
                          // value={state.name}
                          // name="name"
                          // onChange={(e) => handleChange(e)}
                          {...register('name')}
                        />
                        {state.name === '' && state.venue !== 'online' && (
                          <span style={{ color: 'red' }}>
                            Venue name is required
                          </span>
                        )}
                      </FormGroup>
                    </Column>
                    <Column className="only-horizontal-padding">
                      <FormGroup>
                        <UploadLabel>
                          <strong>Street</strong>
                        </UploadLabel>
                        <input
                          // fullWidth
                          // label="Street"
                          // variant="outlined"
                          defaultValue={state.street}
                          placeholder="Street"
                          // name="street"
                          // onChange={(e) => handleChange(e)}
                          {...register('street')}
                        />
                        {state.street === '' && state.venue !== 'online' && (
                          <span style={{ color: 'red' }}>
                            Street is required
                          </span>
                        )}
                      </FormGroup>
                    </Column>
                  </Row>
                  <Row className="horizontal">
                    <Column className="only-horizontal-padding">
                      <FormGroup>
                        <UploadLabel>
                          <strong>Town</strong>
                        </UploadLabel>
                        <input
                          // fullWidth
                          // label="Town"
                          // variant="outlined"
                          defaultValue={state.town}
                          placeholder="Town"
                          // name="town"
                          // onChange={(e) => handleChange(e)}
                          {...register('town')}
                        />
                        {errors.town &&
                          state.town === '' &&
                          state.venue !== 'online' && (
                            <span style={{ color: 'red' }}>
                              Town is required
                            </span>
                          )}
                      </FormGroup>
                    </Column>

                    <Column className="only-horizontal-padding">
                      <FormGroup>
                        <UploadLabel>
                          <strong>Post Code</strong>
                        </UploadLabel>
                        <input
                          // fullWidth
                          // label="Post Code"
                          // variant="outlined"
                          defaultValue={state.postCode}
                          placeholder="Post Code"
                          // name="postCode"
                          // onChange={(e) => handleChange(e)}
                          {...register('postCode')}
                        />
                        {state.postCode === '' && state.venue === 'online' && (
                          <span style={{ color: 'red' }}>
                            Post Code is required
                          </span>
                        )}
                      </FormGroup>
                    </Column>
                  </Row>
                  {/* <Row className="horizontal">
                      <Column className="only-horizontal-padding">
                        <FormGroup>
                          <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            defaultValue={state.name as string}
                            {...register('name', { required: true })}
                          />
                          {errors.name && (
                            <span style={{ color: 'red' }}>
                              Number or name is required
                            </span>
                          )}
                        </FormGroup>
                      </Column>
                      <Column className="only-horizontal-padding">
                        <FormGroup>
                          <TextField
                            fullWidth
                            label="Street"
                            variant="outlined"
                            defaultValue={state.street as string}
                            {...register('street', { required: true })}
                          />
                          {errors.street && (
                            <span style={{ color: 'red' }}>
                              Street is required
                            </span>
                          )}
                        </FormGroup>
                      </Column>
                    </Row>
                    <Row className="horizontal">
                      <Column className="only-horizontal-padding">
                        <FormGroup>
                          <TextField
                            fullWidth
                            label="Town"
                            variant="outlined"
                            defaultValue={state.town as string}
                            {...register('town', { required: true })}
                          />
                          {errors.town && (
                            <span style={{ color: 'red' }}>
                              Town is required
                            </span>
                          )}
                        </FormGroup>
                      </Column>

                      <Column className="only-horizontal-padding">
                        <FormGroup>
                          <TextField
                            fullWidth
                            label="Post Code"
                            variant="outlined"
                            defaultValue={state.postCode as string}
                            {...register('postCode', { required: true })}
                          />
                          {errors.postCode && (
                            <span style={{ color: 'red' }}>
                              Post Code is required
                            </span>
                          )}
                        </FormGroup>
                      </Column>
                    </Row> */}
                </>
              )}
              {state.showInput !== true && <br />}

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
                  <TextField
                    style={{ display: 'none' }}
                    fullWidth
                    type="file"
                  />
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
                                name="listImage"
                                type="file"
                                onChange={(e) => handleImageChange(e)}
                              />
                              <Edit />
                            </EditButton>
                          </ActionButton>
                          <ActionButton
                            onClick={() => {
                              setUploadImg('');
                              setValue('listImage', null);
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
                          name="listImage"
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
              <EditorTextWrapper>
                <PostEditor
                  // id={user?.id as string}
                  // editorState={editorState}
                  body={content}
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
      </InnerContainer>
    </PageContainer>
  );
};

export default EditActivityForm;
