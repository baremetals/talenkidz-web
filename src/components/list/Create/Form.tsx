import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ChangeEvent, useReducer, useState } from 'react';

import { useQuery } from '@apollo/client';
import { CategoriesDocument } from 'generated/graphql';

import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useForm } from 'react-hook-form';

// import PostEditor from 'components/Editor/PostEditor';
const PostEditor: any = dynamic(
  () => import('components/utilities/Editor/PostEditor'),
  {
    ssr: false,
  }
);

import Button from 'components/users/Auth/Button';
import { Column, InnerContainer, Row, Title } from 'styles/common.styles';
import { ErrorMsg } from 'components/widgets/Input';
import {
  EditorTextWrapper,
  FormGroup,
  FormInput,
  FormWrap,
  FormWrapper,
  InnerFormWrapper,
  UploadLabel,
} from './styles';

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
// import { toBase64 } from 'src/utils/base64';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from 'public/assets/icons/Edit';

import GoogleMap from 'components/utilities/Google/GoogleMap';
import SearchBox from 'components/utilities/Google/SearchBox';
import { formReducer, INITIAL_STATE } from './formReducer';
import slugify from 'slugify';
import axios from 'axios';
import { FormProps } from 'src/types';
import { handleImgChange } from 'src/utils';



type form = {
  formType: string;
  id: string;
};

export type addressType = {
  name: string;
  street: string;
  town: string;
  postCode: string;
  longtitude: number | boolean;
  latitude: number | boolean;
  linkButtonText: string;
  venue: string;
};

const Form = ({ formType, id }: form) => {
  const router = useRouter();

  const { data } = useQuery(CategoriesDocument, {});
  const categories = data?.categories?.data;
//   console.log(id);
  // const [uploadImg, setUploadImg] = useState<FileType | string>('/default-list-img.jpg');

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>('');
  const [imgSizeErr, setImgSizeErr] = useState(false);
  const [uploadImg, setUploadImg] = useState<File | null>(null);
  const [displayImg, setDisplayImg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [image, setImageError] = useState(false);
  const [body, setBodyError] = useState(false);

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>();

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {

      console.log('we here');
      const res = await handleImgChange({ event, setUploadImg, setDisplayImg });
      if (res?.error) {
        console.log('my - niggerrrrr!', res.error);
        setMsg(res.error);
        setImgSizeErr(true);
        setTimeout(() => {
          setImgSizeErr(false);
        }, 8000);
      }
      setValue('listImage', uploadImg as File);
    };

  const onSubmit = async (info: FormProps) => {
    // console.log('going down: ',);
    // console.log('the rass info: ', info);
    // console.log('the rass state: ', state);
    setSubmitting(true);
    if (info.listImage == null) {
      setImageError(true);
      setSubmitting(false);
      setTimeout(() => {
        setImageError(false);
      }, 10000);
    }

    if (!info.body) {
      setBodyError(true);
      setSubmitting(false);
      setTimeout(() => {
        setBodyError(false);
      }, 10000);
    }

    if (info.listImage != null && info.body) {
      // console.log(uploadImg);
      const { listImage } = info;
      const url = process.env.NEXT_PUBLIC_SITE_URL;

      const found = categories.find(
        (element: { id: string }) => element.id === info.category
      );
      const category = found?.attributes?.name;
      // console.log(found);

      const slug: string = slugify(info.title);
      const eventUrl = `${url}/events/${category.toLowerCase()}/${slug.toLowerCase()}`;
      const activityUrl = `${url}/activities/${category.toLowerCase()}/${slug.toLowerCase()}`;
      // console.log(activityUrl);

      let form = new FormData();
      form.append('file', uploadImg as Blob, listImage.name);

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
            title: info.title,
            body: info.body,
            category: info.category,
            host: id,
            slug: slug.toLowerCase(),
            description: info.description,
            startDate: info.startDate,
            endDate: info.endDate,
            startTime: info.startTime,
            endTime: info.endTime,
            price: info.price,
            link: info.link,
            venue: info.venue,
            linkButtonText: info.linkButtonText,
            listImage: uploadApi?.data?.content?.url,
            Location: {
              name: info.name,
              street: info.street,
              town: info.town,
              postCode: info.postCode,
              longtitude: state.longtitude,
              latitude: state.latitude,
            },
            SEO: {
              title: info.title,
              description: info.description,
              image: uploadApi?.data?.content?.url,
              url: formType === 'event' ? eventUrl : activityUrl,
              type: formType === 'event' ? 'event' : 'activity',
            },
          };
          await axios
            .post('/api/list', {
              data,
            })
            .then(async (res) => {
              console.log(res.data)
              if (res.status === 200) {
                setSubmitting(false);
                setUploadImg(null);
                if (formType === 'event') {
                  router.push(eventUrl);
                } else router.push(activityUrl);
              } else {
                setSubmitting(false);
                await axios.post('/api/upload/delete', {
                  data: { id: uploadApi?.data?.content?.id },
                });
              }
            })
            .catch((_err) => {
              // console.log(err.response.data)
              setSubmitting(false);
              setMsg('Sorry something went wrong please try again later.');
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 10000);
            });
        } else {
          setSubmitting(false);
          setMsg('Issue uploading image');
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 10000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onChangeAddress = (data: {
    address_components: any;
    name: string;
    geometry: { location: { lat: () => boolean; lng: () => boolean } };
  }) => {
    // console.log('address', data);
    const add = data.address_components;
    const location = {
      name: data.name || '',
      street: add[0]?.long_name || '',
      town: add[1]?.long_name || '',
      postCode: add[5]?.long_name || '',
      longtitude: data.geometry.location.lng() || (0 as number),
      latitude: data.geometry.location.lat() || (0 as number),
    };
    dispatch({
        type: 'CHANGE_VALUE',
        payload: {...location}
    })

    //   console.log('state', state);

  };

//   const handleChange = (e: { target: { name: string; value: string | number; }; }) => {
//     console.log(e.target.value)
//     dispatch({
//         type: 'CHANGE_VALUE',
//         payload: {
//             name: e.target.name, value: e.target.value
//         }
//     })
//   }
    // console.log('state', state);
//   console.log('address', address);


  return (
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
            New Listing
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
                    <InputLabel>Category</InputLabel>
                    <Select
                      labelId="category-select-label"
                      label="Category"
                      defaultValue=""
                      // value=""
                      {...register('category', { required: true })}
                    >
                      {categories &&
                        categories?.map(
                          (c: { id: string; attributes: { slug: string } }) => (
                            <MenuItem
                              key={c?.id}
                              value={(c?.id as string) || ''}
                            >
                              {c?.attributes?.slug}
                            </MenuItem>
                          )
                        )}
                    </Select>
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
                    type="date"
                    {...register('startDate', { required: true })}
                  />
                  {errors.startDate && (
                    <span style={{ color: 'red' }}>Start Date is required</span>
                  )}
                </FormGroup>
              </Column>

              <Column className="only-horizontal-padding">
                <FormGroup>
                  <UploadLabel>End Date</UploadLabel>
                  <FormInput
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
                    type="time"
                    {...register('startTime', { required: true })}
                  />
                  {errors.startTime && (
                    <span style={{ color: 'red' }}>Start Date is required</span>
                  )}
                </FormGroup>
              </Column>
              <Column className="only-horizontal-padding">
                <FormGroup>
                  <UploadLabel>End Time</UploadLabel>
                  <FormInput
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
                  defaultValue={'0'}
                  {...register('price')}
                />
              </Column>
              <Column className="only-horizontal-padding">
                <TextField
                  fullWidth
                  label="Link"
                  variant="outlined"
                  defaultValue="www.talentkids.io"
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
                      defaultValue={state.linkButtonText}
                      {...register('linkButtonText', { required: true })}
                    >
                      <MenuItem value="Buy Tickets">Buy Tickets</MenuItem>
                      <MenuItem value="Learn More" selected>
                        Learn More
                      </MenuItem>
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
                      defaultValue={state.venue}
                      {...register('venue')}
                    >
                      <MenuItem value="location" selected>
                        On Site
                      </MenuItem>
                      <MenuItem value="online">Online</MenuItem>
                      <MenuItem value="both">Online and On Site</MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
              </Column>
            </Row>
            <br />
            <UploadLabel>Location</UploadLabel>
            <GoogleMap>
              <SearchBox onPlace={onChangeAddress}></SearchBox>
            </GoogleMap>

            {state.showInput && (
              <>
                <Row className="horizontal">
                  <Column className="only-horizontal-padding">
                    <FormGroup>
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
                      {state.name === '' && state.venue === 'location' && (
                        <span style={{ color: 'red' }}>
                          Venue name is required
                        </span>
                      )}
                    </FormGroup>
                  </Column>
                  <Column className="only-horizontal-padding">
                    <FormGroup>
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
                      {state.street === '' && state.venue === 'location' && (
                        <span style={{ color: 'red' }}>Street is required</span>
                      )}
                    </FormGroup>
                  </Column>
                </Row>
                <Row className="horizontal">
                  <Column className="only-horizontal-padding">
                    <FormGroup>
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
                        state.venue === 'location' && (
                          <span style={{ color: 'red' }}>Town is required</span>
                        )}
                    </FormGroup>
                  </Column>

                  <Column className="only-horizontal-padding">
                    <FormGroup>
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
                      {state.postCode === '' && state.venue === 'location' && (
                        <span style={{ color: 'red' }}>
                          Post Code is required
                        </span>
                      )}
                    </FormGroup>
                  </Column>
                </Row>
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
                              name="listImage"
                              type="file"
                              // onChange={handleImageChange('listImage')}
                              onChange={(e) => handleImageChange(e)}
                            />
                            <Edit />
                          </EditButton>
                        </ActionButton>
                        <ActionButton
                          onClick={() => {
                            setUploadImg(null);
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
                        // onChange={handleImageChange('listImage')}
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
    </InnerContainer>
  );
};

export default Form;
