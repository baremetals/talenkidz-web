import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import slugify from 'slugify';
import axios from 'axios';
import { FormData } from 'formdata-node';
import {
    InputLabel,
    MenuItem,
    TextField,
    Select,
    FormControl,
} from '@mui/material';

import {
    useCategoriesQuery,
    Exact,
    CategoriesQuery,
    CategoriesDocument,
} from 'generated/graphql';
import { QueryResult, useQuery } from '@apollo/client';

// import { storage } from "lib/admin";
// import {
//     uploadBytes,
//     ref,
//     getDownloadURL,
// } from "firebase/storage";

import { Controller, useForm } from 'react-hook-form';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// import PostEditor from 'components/Editor/PostEditor';
const PostEditor: any = dynamic(() => import('components/Editor/PostEditor'), {
    ssr: false,
});

import { Error, ErrorMsg } from '../Input';
import Button from 'components/Auth/Button';
import {
    FormWrapper,
    InnerFormWrapper,
    FormWrap,
    FormGroup,
    FormInput,
    CategoryOptions,
    UploadWrapper,
    UploadLabel,
    UploadIcon,
    UploadInput,
    EditorTextWrapper,
    UploadImage,
} from './styles';
import { Column, Row, InnerContainer, Title } from 'styles/common.styles';
import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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
} from 'components/EditProfile/editProfile.styles';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from '../../../public/assets/icons/Edit';
import { toBase64 } from 'components/EditProfile/utils';

export type FormProps = {
    title: string;
    description: string;
    category: string;
    body: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    listImage: FileType;
    numberOrName: string;
    street: string;
    town: string;
    postCode: string;
    id: string;
};

type form = {
    formType: string;
    id: string;
};

type FileType = {
    lastModified: any;
    lastModifiedDate: {};
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
} | null;

const Form = ({ formType, id }: form) => {
    const router = useRouter();

    const { data } = useQuery(CategoriesDocument, {});
    const categories = data?.categories?.data;
    // console.log(categories)
    // const [uploadImg, setUploadImg] = useState<FileType | string>('/default-list-img.jpg');

    const [editorState, setEditorState] = useState<EditorState>(
        EditorState.createEmpty()
    );
    const [content, setContent] = useState<string>('');
    const [imgSizeErr, setImgSizeErr] = useState(false);
    const [uploadImg, setUploadImg] = useState<FileType | string | null>(null);
    const [displayImg, setDisplayImg] = useState<FileType | string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);
    const [image, setImageError] = useState(false);
    const [body, setBodyError] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm<FormProps>();

    const handleImageChange =
        (_name: string) =>
            async (event: { target: { files: {}[] } } | File | any) => {
                const img = event.target.files[0] as FileType;
                const size = img?.size as number;
                setImgSizeErr(false);
                if (size > 209715200) {
                    event.target.value = [];
                    setMsg('File size cannot exceed more than 256MB');
                    setImgSizeErr(true);
                    setTimeout(() => {
                        setImgSizeErr(false);
                    }, 8000);
                }
                setValue('listImage', img as FileType);
                const base64 = await toBase64(event.target.files[0]);
                setDisplayImg(base64)
                // console.log('base64', upload)
                setUploadImg(event.target.files[0] as any);
            };

    const onSubmit = async (info: FormProps) => {
        // console.log('going down: ',);
        
        
        // console.log(listImage.name);

        setSubmitting(true)
        if (info.listImage == null) {
            setImageError(true);
            setSubmitting(false)
            setTimeout(() => {
                setImageError(false);
            }, 10000);
        }

        if (!info.body) {
            setBodyError(true);
            setSubmitting(false)
            setTimeout(() => {
                setBodyError(false);
            }, 10000);
        }

        if (info.listImage != null && info.body) {
            // console.log(uploadImg);
            const { listImage } = info;
            const url = process.env.NEXT_PUBLIC_SITE_URL

            const found = categories.find((element: { id: string; }) => element.id === info.category)
            const category = found?.attributes?.name
            // console.log(found);

            const slug: string = slugify(info.title)
            const eventUrl = `${url}/events/${category}/${slug.toLowerCase()}`
            const activityUrl = `${url}/activities/${category}/${slug.toLowerCase()}`
            // console.log(activityUrl);

            let form = new FormData()
            form.append('file', uploadImg, listImage.name)

            try {
                const uploadApi = await axios(`/api/upload`, {
                    method: "post",
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
                        slug,
                        description: info.description,
                        startDate: info.startDate,
                        endDate: info.endDate,
                        startTime: info.startTime,
                        endTime: info.endTime,
                        listImage: uploadApi?.data?.content?.url,
                        Location: {
                            numberOrName: info.numberOrName,
                            street: info.street,
                            town: info.town,
                            postCode: info.postCode,
                        },
                        SEO: {
                            title: info.title,
                            description: info.description,
                            image: uploadApi?.data?.content?.url,
                            url: formType === "event" ? eventUrl : activityUrl,
                            type: formType === "event" ? 'event' : 'activity'
                        }

                    }
                    await axios.post('/api/list', {
                        data
                    })
                        .then(async(res) => {
                            // console.log(res.data.data)
                            if (res.status === 200) {
                                setSubmitting(false)
                                setUploadImg(null)
                                if (formType === 'events') {
                                    router.push(eventUrl)
                                } else router.push(activityUrl)
                            } else {
                                setSubmitting(false)
                                await axios.post('/api/upload/delete', {
                                    data: { id: uploadApi?.data?.content?.id }
                                })
                            }
                        })
                        .catch((err) => {
                            // console.log(err.response.data)
                            setMsg("Sorry something went wrong please try again later.");
                            setError(true);
                            setTimeout(() => {
                                setError(false);
                            }, 10000);
                        })

                } else {
                    setSubmitting(false)
                    setMsg("Issue uploading image");
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 10000);
                }
            } catch (err) {
                console.log(err)
            }
        }
    };
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
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <TextField
                                    fullWidth
                                    label='Title'
                                    variant='outlined'
                                    {...register('title', { required: true })}
                                />
                                {errors.title && <span style={{ color: 'red' }} >Title is required</span>}
                            </Column>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    labelId='category-select-label'
                                    label='Category'
                                    defaultValue="please select category"
                                    {...register('category', { required: true })}
                                >
                                    {categories &&
                                        categories?.map(
                                            (c: { id: string; attributes: { slug: string } }) => (
                                                <MenuItem key={c?.id} value={(c?.id as string) || ''}>
                                                    {c?.attributes?.slug}
                                                </MenuItem>
                                            )
                                        )}
                                </Select>
                            </FormControl>
                                    {errors.category && <span style={{ color: 'red' }} >Category is required</span>}
                        </FormGroup>
                            </Column>
                        </Row>

                        <FormGroup>
                            <TextField
                                label='Description'
                                multiline
                                fullWidth
                                rows={2}
                                {...register('description', { required: true })}
                            />
                            {errors.description && <span style={{ color: 'red' }} >Description is required</span>}
                        </FormGroup>
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <UploadLabel>Start Date</UploadLabel>
                                    <FormInput
                                        type='date'
                                        {...register('startDate', { required: true })}
                                    />
                                    {errors.startDate && <span style={{ color: 'red' }} >Start Date is required</span>}
                                </FormGroup>
                            </Column>

                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <UploadLabel>End Date</UploadLabel>
                                    <FormInput
                                        type='date'
                                        {...register('endDate', { required: true })}
                                    />
                                    {errors.endDate && <span style={{ color: 'red' }} >End Date is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <UploadLabel>Start Time</UploadLabel>
                                    <FormInput
                                        type='time'
                                        {...register('startTime', { required: true })}
                                    />
                                    {errors.startTime && <span style={{ color: 'red' }} >Start Date is required</span>}
                                </FormGroup>
                            </Column>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <UploadLabel>End Time</UploadLabel>
                                    <FormInput
                                        type='time'
                                        {...register('endTime', { required: true })}
                                    />
                                    {errors.endTime && <span style={{ color: 'red' }} >End Time is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>
                        <UploadLabel>Location</UploadLabel>
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label='Number or name'
                                        variant='outlined'
                                        {...register('numberOrName', { required: true })}
                                    />
                                    {errors.numberOrName && (
                                        <span style={{color: 'red'}} >Number or name is required</span>
                                    )}
                                </FormGroup>
                            </Column>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label='Street'
                                        variant='outlined'
                                        {...register('street', { required: true })}
                                    />
                                    {errors.street && <span style={{ color: 'red' }} >Street is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>
                        <Row className='horizontal'>                          
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label='Town'
                                        variant='outlined'
                                        {...register('town', { required: true })}
                                    />
                                    {errors.town && <span style={{ color: 'red' }} >Town is required</span>}
                                </FormGroup>
                            </Column>

                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label='Post Code'
                                        variant='outlined'
                                        {...register('postCode', { required: true })}
                                    />
                                    {errors.postCode && <span style={{ color: 'red' }} >Post Code is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>

                        <FormGroup style={{ marginTop: '0.5rem' }}>
                            <>
                                {image && <ErrorMsg style={{ color: 'red' }} >An image is required</ErrorMsg>}
                            </>
                            {imgSizeErr && <ErrorMsg>{msg}</ErrorMsg>}
                            
                            <CoverPictureUploaderWrapper>
                                <Label>Upload</Label>
                                <TextField style={{ display: 'none' }} fullWidth type='file' />
                                {displayImg ? (
                                    <>
                                        <CoverPictureWrapper>
                                            <div className='overlay'></div>
                                            <Image
                                                className='contain'
                                                src={displayImg as any}
                                                alt='upload picture'
                                            />
                                            <ImageActions>
                                                <ActionButton>
                                                    <EditButton htmlFor='upload-listImage-photo'>
                                                        <input
                                                            style={{ display: 'none' }}
                                                            id='upload-listImage-photo'
                                                            name='listImage'
                                                            type='file'
                                                            onChange={handleImageChange('listImage')}
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
                                        <EditButton htmlFor='upload-listImage-photo'>
                                            <input
                                                style={{ display: 'none' }}
                                                id='upload-listImage-photo'
                                                type='file'
                                                name='listImage'
                                                onChange={handleImageChange('listImage')}
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
                            {body && <ErrorMsg style={{ color: 'red' }} >Body is required</ErrorMsg>}
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
                        <FormGroup className='submit-button'>
                            <Button
                                content='Send'
                                type='submit'
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
