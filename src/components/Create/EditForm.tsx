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
    ListingEntity,
    Maybe,
    Listing,
    Event
} from 'generated/graphql';
import { QueryResult, useQuery } from '@apollo/client';


import { Controller, useForm } from 'react-hook-form';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// import PostEditor from 'components/Editor/PostEditor';
const PostEditor: any = dynamic(() => import('components/Editor/EditEditor'), {
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
import { Column, Row, InnerContainer, Title, PageContainer, AlignCentered } from 'styles/common.styles';

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
import { addressType } from './Form';
// import { Modal } from 'components/Modal';

export type EditFormProps = {
    id: string;
    formType: string;
    attributes: Maybe<Listing> | Maybe<Event>
};

type formProps = {
    formType: string;
    id: string;
    slug: string;
    title: string;
    description: string;
    body: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    listImage: FileType | string;
    category: string;
    name: string;
    street: string;
    town: string;
    postCode: string;
    

    // openModal: boolean;
};

type FileType = {
    lastModified: any;
    lastModifiedDate: {};
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}

const EditForm = ({ id, attributes, formType }: EditFormProps) => {
    const router = useRouter();

    const { data } = useQuery(CategoriesDocument, {});
    const categories = data?.categories?.data;
    // console.log(attributes?.slug)
    // const [uploadImg, setUploadImg] = useState<FileType | string>('/default-list-img.jpg');
    const [content, setContent] = useState<string>(attributes?.body as string || '');
    const [, setEditorState] = useState<EditorState>(
        EditorState.createEmpty()
    );

    type imagetype = FileType | string
    
    const [imgSizeErr, setImgSizeErr] = useState(false);
    const [uploadImg, setUploadImg] = useState<FileType | string | null>(attributes?.listImage as string);
    const [displayImg, setDisplayImg] = useState<imagetype>(attributes?.listImage as string);
    const [submitting, setSubmitting] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);
    const [image, setImageError] = useState(false);
    const [body, setBodyError] = useState(false);
    const [cats, setCats] = useState(attributes?.category?.data?.id as string);
    // console.log(attributes)
    const [address, setAddress] = useState<addressType>({
        name: attributes?.Location?.name as string,
        street: attributes?.Location?.street as string,
        town: attributes?.Location?.town as string,
        postCode: attributes?.Location?.postCode as string,
    });

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm<formProps>();

    const handleImageChange =
        (_name: string) =>
            async (event: { target: { files: {}[] } } | File | any) => {
                const img = event.target.files[0];
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
                setValue('listImage', img);
                const base64 = await toBase64(event.target.files[0]);
                setDisplayImg(base64)
                // console.log('base64', upload)
                setUploadImg(event.target.files[0] as any);
            };

    const onSubmit = async (info: formProps) => {
        // console.log('going down: ', info.listImage);
        // console.log(uploadImg)


        // console.log(listImage.name);

        setSubmitting(true)
        if (uploadImg == '') {
            setImageError(true);
            setSubmitting(false)
            setTimeout(() => {
                setImageError(false);
            }, 10000);
        }

        if (content === '') {
            setBodyError(true);
            setSubmitting(false)
            setTimeout(() => {
                setBodyError(false);
            }, 10000);
        }

        const url = process.env.NEXT_PUBLIC_SITE_URL

        const found = categories.find((element: { id: string; }) => element.id === cats)
        const category = found?.attributes?.name
        // console.log(found);
        let slug = attributes?.slug as string;
        if (info.title !== attributes?.title) {
            slug = slugify(info.title)
        }
        const seoUrl = `${url}/${formType}/${category}/${slug.toLowerCase()}`
        const seoType = formType === "events" ? 'event' : 'activity'


        if (!info.listImage) {
            console.log('going down: ');
            // console.log(uploadImg)
            const data = {
                title: info.title,
                body: content,
                category: cats,
                host: id,
                slug,
                description: info.description,
                startDate: info.startDate,
                endDate: info.endDate,
                startTime: info.startTime,
                endTime: info.endTime,
                listImage: uploadImg,
                Location: {
                    name: info.name,
                    street: info.street,
                    town: info.town,
                    postCode: info.postCode,
                },
                SEO: {
                    title: info.title,
                    description: info.description,
                    image: uploadImg,
                    url: seoUrl,
                    type: seoType
                }

            }

            await axios.post('/api/list/update', {
                data: {
                    data,
                    entityId: id,
                    formType
                }
            })
                .then(async (res) => {
                    console.log('the fucking res: ',res)
                    if (res.status === 200) {
                        setSubmitting(false)
                        setUploadImg(null)
                        router.push(seoUrl)
                    } else {
                        setSubmitting(false)
                    }
                })
                .catch((err) => {
                    console.log('the raas error: ',err.response)
                    setMsg("Sorry something went wrong please try again later.");
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 10000);
                })
        } else {
            const { listImage } = info;
            const {name} = listImage as FileType

            let form = new FormData()
            form.append('file', uploadImg, name)

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
                        body: content,
                        category: cats,
                        host: attributes?.host?.data?.id,
                        slug,
                        description: info.description,
                        startDate: info.startDate,
                        endDate: info.endDate,
                        startTime: info.startTime,
                        endTime: info.endTime,
                        listImage: uploadApi?.data?.content?.url,
                        Location: {
                            name: info.name,
                            street: info.street,
                            town: info.town,
                            postCode: info.postCode,
                        },
                        SEO: {
                            title: info.title,
                            description: info.description,
                            image: uploadApi?.data?.content?.url,
                            url: seoUrl,
                            type: seoType
                        }

                    }
                    await axios.post('/api/list/update', {
                        data: {
                            data,
                            entityId: id,
                            formType
                        }
                    })
                        .then(async (res) => {
                            // console.log(res.data.data)
                            if (res.status === 200) {
                                setSubmitting(false)
                                setUploadImg(null)
                                router.push(seoUrl)
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

    const onChangeAddress = (address: any) => {
        console.log('address', address.address_components)

        const add = address.address_components

        const location = {
            name: address.name || '',
            street: add[0].long_name || '',
            town: add[1].long_name || '',
            postCode: add[5].long_name || '',
        }

        setAddress(location)
    }
    return (
        <PageContainer style={{ minHeight: '100vh' }}>
                {/* <InnerContainer>
                    <AlignCentered>
                        <Button className={formType !== 'activity' ? 'primary-outline' : ''} style={{ margin: '0 .5rem', minWidth: '180px' }} onClick={() => setFormType('activity')}>List An Activity</Button>
                        <Button className={formType !== 'event' ? 'primary-outline' : ''} style={{ margin: '0 .5rem', minWidth: '180px' }} onClick={() => setFormType('event')}>List An Event</Button>
                    </AlignCentered>
                </InnerContainer> */}
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
                            <Row className='horizontal'>
                                <Column className='only-horizontal-padding'>
                                    <TextField
                                        fullWidth
                                        label='Title'
                                        variant='outlined'
                                        value={attributes?.title}
                                        {...register('title', { required: true })}
                                    />
                                    {errors.title && <span style={{ color: 'red' }} >Title is required</span>}
                                </Column>
                                <Column className='only-horizontal-padding'>
                                    <FormGroup>
                                        <FormControl fullWidth>
                                            {/* <InputLabel>Category</InputLabel> */}
                                            <select
                                                // labelId='category-select-label'
                                                name='category'
                                                value={cats}
                                                // disabled
                                                // defaultValue={attributes?.category?.data?.attributes?.name as string}
                                                // {...register('category', { required: true })}
                                                onChange={((e) => setCats(e.target.value))}
                                            >
                                                <option value={cats} selected>
                                                    {attributes?.category?.data?.attributes?.name as string}
                                                </option>
                                                {categories &&
                                                    categories?.map(
                                                        (c: { id: string; attributes: { slug: string } }) => (
                                                            <option key={c?.id} value={(c?.id as string) || ''} >
                                                                {c?.attributes?.slug}
                                                            </option>
                                                        )
                                                    )}
                                                {/* {categories &&
                                                    categories?.map(
                                                        (c: { id: string; attributes: { slug: string } }) => (
                                                            <MenuItem key={c?.id} value={(c?.id as string) || ''}>
                                                                {c?.attributes?.slug}
                                                            </MenuItem>
                                                        )
                                                    )} */}
                                            </select>
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
                                    value={attributes?.description}
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
                                            value={attributes?.startDate}
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
                                            value={attributes?.endDate}
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
                                            value={attributes?.startTime as string}
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
                                            value={attributes?.endTime as string}
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
                                            label='Name'
                                            variant='outlined'
                                            value={address.name as string}
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name && (
                                            <span style={{ color: 'red' }} >Number or name is required</span>
                                        )}
                                    </FormGroup>
                                </Column>
                                <Column className='only-horizontal-padding'>
                                    <FormGroup>
                                        <TextField
                                            fullWidth
                                            label='Street'
                                            variant='outlined'
                                            value={address.street as string}
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
                                            value={address.town as string}
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
                                            value={address.postCode as string}
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
                                                            setValue('listImage', '');
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
            </PageContainer>
        
    );
};

export default EditForm;
