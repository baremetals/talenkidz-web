import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useReducer, useState } from 'react';
import { customSlugify, handleImgChange } from 'src/utils';
import { v4 as uuidv4 } from 'uuid';

import { useQuery } from '@apollo/client';
import { CategoriesDocument } from 'generated/graphql';

import axios from 'axios';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useForm } from 'react-hook-form';

import { formReducer, INITIAL_STATE } from 'components/users/posts/formReducer';

import { FormControl, TextField } from '@mui/material';
import Button from 'components/users/Auth/Button';
import {
  ActionButton,
  CoverPictureUploaderWrapper,
  CoverPictureWrapper,
  EditButton,
  Image,
  ImageActions,
  // Label,
  NoCoverPictureWrapper,
  SelectCoverPictureButton,
} from 'components/users/EditProfile/editProfile.styles';
import GoogleMap from 'components/utilities/Google/GoogleMap';
import SearchBox from 'components/utilities/Google/SearchBox';
import { ErrorMsg } from 'components/widgets/Input';
import { Edit } from 'public/assets/icons/Edit';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { AuthContext } from 'src/features/auth/AuthContext';
import { closeModal } from 'src/features/modal';
import { FormProps, mimeTypes } from 'src/types';
import { Column, InnerContainer, Row, Title } from 'styles/common.styles';
import CreatePost from '../../CreatePost';
import {
  AlignCentered,
  // DismissIcon,
  EditorTextWrapper,
  FormGroup,
  FormInput,
  FormWrap,
  FormWrapper,
  InnerFormWrapper,
  UploadLabel,
} from '../../createpost.styles';
import Link from 'next/link';
import SelectArrow from 'public/assets/icons/SelectArrow';
// import PencilIcon from 'components/users/Account/PencilIcon';
// import { CrossRounded } from 'public/assets/icons/CrossRounded';

const PostEditor: any = dynamic(
  () => import('components/utilities/Editor/PostEditor'),
  {
    ssr: false,
  }
);

// const styles = (theme) => ({
//   notchedOutline: {
//     borderWidth: '1px',
//     borderColor: 'yellow !important',
//   },
// });

const EventForm = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { data } = useQuery(CategoriesDocument, {});
  const categories = data?.categories?.data;
  // console.log(categories)
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
  const [image, setImageError] = useState(false);
  const [body, setBodyError] = useState(false);

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>();

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const mimeType = event.target.files![0].type;
    // console.log('In the function', event.target.files![0].type);
    if (!mimeTypes.includes(mimeType)) {
      setMsg('wrong file type, please only. jpg, png gif allowed.');
      setImgSizeErr(true);
      setTimeout(() => {
        setDisplayImg('');
      }, 1000);
      setTimeout(() => {
        setImgSizeErr(false);
      }, 10000);
    }
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
      console.log('The Error Is: ', error);
    }
  };

  const onSubmit = async (info: FormProps) => {
    setSubmitting(true);
    if (info.listImage == null) {
      setImageError(true);
      setSubmitting(false);
      setTimeout(() => {
        setImageError(false);
      }, 10000);
    } else if (!info.body) {
      setBodyError(true);
      setSubmitting(false);
      setTimeout(() => {
        setBodyError(false);
      }, 10000);
    } else {
      const { listImage } = info;
      const url = process.env.NEXT_PUBLIC_SITE_URL;

      const found = categories.find(
        (element: { id: string }) => element.id === info.category
      );
      const randomString = uuidv4();
      const category = found?.attributes?.name;
      // console.log(found);

      const slug: string = customSlugify(
        info.title + randomString.slice(0, 6)
      ).toLowerCase();
      const eventUrl = `${url}/events/${category.toLowerCase()}/${slug.toLowerCase()}`;
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
            host: user?.id,
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
              longitude: state.longitude,
              latitude: state.latitude,
            },
            SEO: {
              title: info.title,
              description: info.description,
              image: uploadApi?.data?.content?.url,
              url: eventUrl,
              type: 'event',
              author: user?.orgName
                ? user?.orgName
                : user?.fullName || user?.username,
              keywords: info.title.split(' ').join(', '),
            },
          };
          await axios
            .post('/api/list', {
              data,
            })
            .then(async (res) => {
              // console.log(res.data);
              if (res.status === 200) {
                dispatch(closeModal());
                router.push(eventUrl);
              }
            })
            .catch(async (err) => {
              console.log(err.response.data);
              setSubmitting(false);
              setMsg('Sorry something went wrong please try again later.');
              setError(true);
              await axios.post('/api/upload/delete', {
                data: { id: uploadApi?.data?.content?.id },
              });
              setTimeout(() => {
                setError(false);
              }, 10000);
            });
        } else {
          setSubmitting(false);
          setMsg('Issue uploading image, please try again later.');
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 10000);
        }
      } catch (err) {
        console.log(err);
        setSubmitting(false);
        setMsg('something is wrong. please try again alter');
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 10000);
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
      longitude: data.geometry.location.lng() || (0 as number),
      latitude: data.geometry.location.lat() || (0 as number),
    };
    dispatch({
      type: 'CHANGE_VALUE',
      payload: { ...location },
    });

    //   console.log('state', state);
  };

  const [count, setCount] = useState(0);

  return (
    <CreatePost formType={'event'}>
      <InnerContainer>
        <FormWrapper>
          <InnerFormWrapper className="create-post">
            <Title
              style={{
                lineHeight: '1.6',
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              Create something new
            </Title>
            <AlignCentered>
              <Link passHref href={'/account/create/activities'}>
                <div className="link-block">
                  <span></span>Activity
                </div>
              </Link>
              <Link passHref href={'/account/create/events'}>
                <div className="link-block">
                  <span className="active"></span>Event
                </div>
              </Link>
            </AlignCentered>

            {error && <ErrorMsg>{msg}</ErrorMsg>}
            <FormWrap onSubmit={handleSubmit(onSubmit)}>
              {/* Title and Category */}
              <Row className="horizontal">
                {/* Title */}
                <Column className="only-horizontal-padding">
                  <TextField
                    fullWidth
                    placeholder="Title"
                    variant="outlined"
                    {...register('title', { required: true })}
                  />
                  {errors.title && (
                    <span style={{ color: 'red' }}>Title is required</span>
                  )}
                </Column>
                {/* Category */}
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <FormControl fullWidth>
                      {/* <InputLabel>Category</InputLabel> */}
                      <select
                        // labelId="category-select-label"
                        // label="Category"
                        defaultValue=""
                        // value=""
                        {...register('category', { required: true })}
                      >
                        <option value={'Please select a category'}>
                          Please select a category
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
                      <span className="selectArrow">
                        <SelectArrow />
                      </span>
                    </FormControl>
                    {errors.category && (
                      <span style={{ color: 'red' }}>Category is required</span>
                    )}
                  </FormGroup>
                </Column>
              </Row>
              {/* Description */}
              <FormGroup>
                <TextField
                  placeholder="Describe your activity in a few sentences"
                  multiline
                  fullWidth
                  rows={4}
                  inputProps={{ maxLength: 250 }}
                  {...register('description', { required: true })}
                  onChange={(e) => setCount(e.target.value.length)}
                />
                <p className="count-block">{count} / 250 </p>
                {errors.description && (
                  <span style={{ color: 'red' }}>Description is required</span>
                )}
              </FormGroup>
              {/* Start Date and Start Time */}
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Choose the <strong>start date</strong>
                    </UploadLabel>
                    <FormInput
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
                    <UploadLabel>
                      Set the <strong>start time</strong>
                    </UploadLabel>
                    <FormInput
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
              </Row>
              {/* End Date and End Time */}
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Choose the <strong>end date</strong>
                    </UploadLabel>
                    <FormInput
                      type="date"
                      {...register('endDate', { required: true })}
                    />
                    {errors.endDate && (
                      <span style={{ color: 'red' }}>End Date is required</span>
                    )}
                  </FormGroup>
                </Column>
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Set the <strong>end time</strong>
                    </UploadLabel>
                    <FormInput
                      type="time"
                      {...register('endTime', { required: false })}
                    />
                    {errors.endTime && (
                      <span style={{ color: 'red' }}>End Time is required</span>
                    )}
                  </FormGroup>
                </Column>
              </Row>
              {/* Price and Button Text */}
              <Row className="horizontal">
                {/* Price */}
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Set the <strong>PRICE</strong>
                    </UploadLabel>
                    <input
                      type="text"
                      defaultValue={"0"}
                      {...register('price')}
                    />
                  </FormGroup>
                </Column>
                {/* Button text */}
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Select <strong>Button Text</strong>
                    </UploadLabel>
                    <FormControl fullWidth>
                      {/* <InputLabel> Choose Button Text</InputLabel> */}
                      <select
                        // labelId="link-button-select-label"
                        // label="Link Button"
                        defaultValue={state.linkButtonText}
                        {...register('linkButtonText', { required: true })}
                      >
                        <option value="Choose the BUTTON TEXT">
                          Choose the BUTTON TEXT
                        </option>
                        <option value="Buy Tickets">Buy Tickets</option>
                        <option value="Learn More">Learn More</option>
                        <option value="Register">Register</option>
                        <option value="Visit Us">Visit Us</option>
                        <option value="Buy Now">Buy Now</option>
                      </select>
                    </FormControl>
                  </FormGroup>
                </Column>
              </Row>
              {/* Event Link and Venue Type */}
              <Row className="horizontal">
                {/* Venue type */}
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Select <strong>Venue Type</strong>
                    </UploadLabel>
                    <FormControl fullWidth>
                      {/* <InputLabel>Venue Options</InputLabel> */}
                      <select
                        // labelId="venue-select-label"
                        // label="Venue Location"
                        defaultValue={state.venue}
                        {...register('venue')}
                      >
                        <option value="Choose the Venue">
                          {' '}
                          Choose the Venue
                        </option>
                        <option value="location">On Site</option>
                        <option value="online">Online</option>
                        <option value="both">Online and On Site</option>
                      </select>
                    </FormControl>
                  </FormGroup>
                </Column>
                {/* Activity Link */}
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Add event <strong>LINK</strong>
                    </UploadLabel>
                    <input
                      defaultValue="www.talentkids.io"
                      {...register('link', { required: true })}
                    />
                  </FormGroup>
                </Column>
              </Row>
              {/* Location Search */}
              <Row className="horizontal">
                <Column className="only-horizontal-padding">
                  <FormGroup>
                    <UploadLabel>
                      Search <strong>Location</strong>
                    </UploadLabel>
                    <GoogleMap>
                      <SearchBox onPlace={onChangeAddress}></SearchBox>
                    </GoogleMap>
                  </FormGroup>
                </Column>
              </Row>
              {/* Enter Location */}
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
                        {state.name === '' && state.venue === 'location' && (
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
                        {state.street === '' && state.venue === 'location' && (
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
                          state.venue === 'location' && (
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
                        {state.postCode === '' &&
                          state.venue === 'location' && (
                            <span style={{ color: 'red' }}>
                              Post Code is required
                            </span>
                          )}
                      </FormGroup>
                    </Column>
                  </Row>
                </>
              )}
              {/* {state.showInput !== true && ''} */}
              {/* Image Upload */}
              <FormGroup style={{ marginTop: '0.5rem' }}>
                <UploadLabel>
                  Add an <strong>Image</strong> (No Videos)
                </UploadLabel>
                <>
                  {image && (
                    <ErrorMsg style={{ color: 'red' }}>
                      An image is required
                    </ErrorMsg>
                  )}
                </>
                {imgSizeErr && <ErrorMsg>{msg}</ErrorMsg>}

                <CoverPictureUploaderWrapper>
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
                                // onChange={handleImageChange('listImage')}
                                onChange={(e) => handleImageChange(e)}
                              />
                              <Edit />
                            </EditButton>
                          </ActionButton>
                          <ActionButton
                            onClick={() => {
                              setDisplayImg('');
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
                          Click to upload an image of the activity
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
              <UploadLabel>
                Add <strong>Information</strong> (You can add video or YouTube
                links)
              </UploadLabel>
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
              <p>
                *with Standard status the activity will be in the list only for
                5 days. After that it will be deleted. To create unlimited
                position, change the option in Settings.
              </p>
              <FormGroup className="submit-button">
                <Button
                  content={submitting ? 'submitting.......' : 'Create'}
                  type="submit"
                  disabled={submitting}
                  loading={submitting}
                />
              </FormGroup>
            </FormWrap>
          </InnerFormWrapper>
        </FormWrapper>
        {/* <StripeForm purchaseType={formType} /> */}
      </InnerContainer>
    </CreatePost>
  );
};
export default EventForm;
