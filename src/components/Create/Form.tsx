import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import slugify from "slugify"
import axios from "axios";
import { FormData } from "formdata-node";
import { InputLabel, MenuItem, TextField, Select, FormControl } from '@mui/material';

import {
    useCategoriesQuery,
    Exact,
    CategoriesQuery,
    CategoriesDocument
} from "generated/graphql";
import { QueryResult, useQuery } from "@apollo/client";

// import { storage } from "lib/admin";
// import {
//     uploadBytes,
//     ref,
//     getDownloadURL,
// } from "firebase/storage";

import { Controller, useForm } from "react-hook-form"
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";


// import PostEditor from 'components/Editor/PostEditor';
const PostEditor: any = dynamic(() => import("components/Editor/PostEditor"), {
    ssr: false,
});

import { Error, ErrorMsg } from "../Input";
import Button from 'components/Auth/Button';
import { FormWrapper, InnerFormWrapper, FormWrap, FormGroup, FormInput, CategoryOptions, UploadWrapper, UploadLabel, UploadIcon, UploadInput, EditorTextWrapper, UploadImage } from './styles';
import { Column, Row, InnerContainer, Title } from 'styles/common.styles';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Image, Label, ActionButton, CoverPictureUploaderWrapper, CoverPictureWrapper, EditButton, ImageActions, NoCoverPictureWrapper, SelectCoverPictureButton } from 'components/EditProfile/editProfile.styles';
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
}

type FileType = {
    lastModified: any;
    lastModifiedDate: {};
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}


const Form = ({ formType, id }: form) => {
    const router = useRouter();
    let [upload] = useState<FileType | null>(null);

    const { data } = useQuery(CategoriesDocument, {})
    const categories = data?.categories?.data
    // console.log(categories)
    // const [uploadImg, setUploadImg] = useState<FileType | string>('/default-list-img.jpg');

    const [editorState, setEditorState] = useState<EditorState>(
        EditorState.createEmpty()
    );
    const [content, setContent] = useState<string>("");
    const [imgSizeErr, setImgSizeErr] = useState(false)
    const [uploadImg, setUploadImg] = useState<FileType | string>(null);
    const [submitting, setSubmitting] = useState(false)
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm<FormProps>();

    const handleImageChange = (_name: string) => async (event: { target: { files: {}[] } } | File | any) => {
        const upload = event.target.files[0] as FileType;
        const size = upload?.size as number;
        setImgSizeErr(false);
        if (size > 209715200) {
            event.target.value = []
            setMsg("File size cannot exceed more than 256MB");
            setImgSizeErr(true);
            setTimeout(() => {
                setImgSizeErr(false);
            }, 8000);

        }
        setValue("listImage", upload as FileType);
        const base64 = await toBase64(event.target.files[0]);
        console.log('base64', base64)
        setUploadImg(base64);
    };


    const onSubmit = async (info: FormProps) => {
        setSubmitting(true)
        if (upload == null) {
            setMsg("Please provide an image");
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 10000);
        }

        if (info.body == '') {
            setMsg("Please provide listing information");
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 10000);
        }

        let name

        if (upload != null && info.body != '' ) {
            setLoading(true)
            const url = process.env.NEXT_PUBLIC_SITE_URL
            // const folder = process.env.NEXT_PUBLIC_LIST_FOLDER
            const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
            const category = info.category.split(" ")
            // console.log(category[1]);


            const slug: string = slugify(info.title)
            const eventUrl = `${url}/events/${category[0]}/${slug}`
            const activityUrl = `${url}/activities/${category[0]}/${slug}`
            // console.log(activityUrl);

            // const name  = upload!.name as string
            if (upload !== null) {name = upload.name}
            // console.log(name);
            // const testingRef = ref(storage, `${folder}/${name}`)
            // const file = upload;

            const form = new FormData();
            form.append("files", upload as any, name);

            const res = await fetch(`${baseUrl}/upload`, {
                method: "post",
                body: form as any,
            });
            const fileUrl = await res.json();

            // const fileUrl = await uploadBytes(testingRef, file as any).then(async () => {
            //     return getDownloadURL(testingRef);

            // });

            // console.log(fileUrl[0].url)

            const data = {
                title: info.title,
                body: info.body,
                category: category[1],
                host: id,
                slug,
                description: info.description,
                startDate: info.startDate,
                endDate: info.endDate,
                startTime: info.startTime,
                endTime: info.endTime,
                listImage: fileUrl[0].url,
                Location: {
                    numberOrName: info.numberOrName,
                    street: info.street,
                    town: info.town,
                    postCode: info.postCode,
                },
                SEO: {
                    title: info.title,
                    description: info.description,
                    image: fileUrl[0].url,
                    url: formType === "event" ? eventUrl : activityUrl,
                    type: formType === "event" ? 'event' : 'activity'
                }

            }

            await axios.post('/api/list', {
                data
            })
                .then((res) => {
                    console.log(res.data.data)
                    if (res.status === 200) {
                        setSubmitting(false)
                        if (formType === 'events') {
                            router.push(eventUrl)
                        } else router.push(activityUrl)
                    }
                })
                .catch((err) => {
                    console.log(err.response.data)
                    setMsg("Sorry something went wrong please try again later.");
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 10000);
                })
        }
        
    };
    return (
        <InnerContainer>
            <FormWrapper>
                <InnerFormWrapper>
                    <Title style={{ lineHeight: '1.6', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>New Listing</Title>
                    {error && <ErrorMsg>{msg}</ErrorMsg>}
                    <FormWrap onSubmit={handleSubmit(onSubmit)}>                       
                        <FormGroup>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span>Title is required</span>}
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                label="Description"
                                multiline
                                fullWidth
                                rows={2}
                                {...register("description", { required: true })}
                            />
                            {errors.description && <span>Description is required</span>}
                        </FormGroup>
                        <FormGroup>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    labelId="category-select-label"
                                    label="Category"
                                >
                                    {categories && categories?.map((c: { id: string; attributes: { slug: string }; }) => (
                                        <MenuItem key={c?.id} value={c?.id as string}>{c?.attributes?.slug}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {/* <Select {...register("category", { required: true })}>
                                <CategoryOptions>Please select a category</CategoryOptions>
                                {categories && categories?.map((c: { id: string; attributes: { slug: string }; }) => (
                                    <CategoryOptions key={c?.id} value={c?.id as string}>{c?.attributes?.slug}</CategoryOptions>
                                ))}
                            </Select> */}
                            {errors.category && <span>Category is required</span>}
                        </FormGroup>
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <Controller
                                        {...register("startDate", { required: true })}
                                        control={control}
                                        render={({ field, ...props }) => {
                                            return (
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="Start Date"
                                                        value={field.value}
                                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                                        onChange={(date) => {
                                                            field.onChange(date);
                                                        }}
                                                        inputFormat="DD/MM/YYYY"
                                                    />
                                                </LocalizationProvider>
                                            );
                                        }}
                                    />
                                    {errors.startDate && <span>Start Date is required</span>}
                                </FormGroup>
                            </Column>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <Controller
                                        {...register("endDate", { required: true })}
                                        control={control}
                                        render={({ field, ...props }) => {
                                            return (
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="End Date"
                                                        value={field.value}
                                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                                        onChange={(date) => {
                                                            field.onChange(date);
                                                        }}
                                                        inputFormat="DD/MM/YYYY"
                                                    />
                                                </LocalizationProvider>
                                            );
                                        }}
                                    />
                                    {errors.endDate && <span>End Date is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <Controller
                                        {...register("startTime", { required: true })}
                                        control={control}
                                        render={({ field, ...props }) => {
                                            return (
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <TimePicker
                                                        label="Start Time"
                                                        value={field.value}
                                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                                        onChange={(date) => {
                                                            field.onChange(date);
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                            );
                                        }}
                                    />
                                    {errors.startTime && <span>Start Date is required</span>}
                                </FormGroup>
                            </Column>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <Controller
                                        {...register("endTime", { required: true })}
                                        control={control}
                                        render={({ field, ...props }) => {
                                            return (
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <TimePicker
                                                        label="End Time"
                                                        value={field.value}
                                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                                        onChange={(date) => {
                                                            field.onChange(date);
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                            );
                                        }}
                                    />
                                    {errors.endTime && <span>End Time is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>

                        <UploadLabel>Location</UploadLabel>
                        <FormGroup>
                            <TextField
                                fullWidth
                                label="Number or name"
                                variant="outlined"
                                {...register("numberOrName", { required: true })}
                            />
                            {errors.numberOrName && <span>Number or name is required</span>}
                        </FormGroup>
                        <Row className='horizontal'>
                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label="Street"
                                        variant="outlined"
                                        {...register("street", { required: true })}
                                    />
                                    {errors.street && <span>Street is required</span>}
                                </FormGroup>
                            </Column>

                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label="Town"
                                        variant="outlined"
                                        {...register("town", { required: true })}
                                    />
                                    {errors.town && <span>Town is required</span>}
                                </FormGroup>
                            </Column>

                            <Column className='only-horizontal-padding'>
                                <FormGroup>
                                    <TextField
                                        fullWidth
                                        label="Post Code"
                                        variant="outlined"
                                        {...register("postCode", { required: true })}
                                    />
                                    {errors.postCode && <span>Post Code is required</span>}
                                </FormGroup>
                            </Column>
                        </Row>

                        <FormGroup style={{ marginTop: '0.5rem' }}>
                            {imgSizeErr && <ErrorMsg>{msg}</ErrorMsg>}
                            <CoverPictureUploaderWrapper>
                                <Label>Upload</Label>
                                <TextField
                                style={{ display: 'none' }}
                                fullWidth
                                type="file"
                                />
                                { uploadImg ? (
                                <>
                                    <CoverPictureWrapper>
                                        <div className="overlay"></div>
                                        <Image className='contain' src={uploadImg} alt="upload picture" />
                                        <ImageActions>
                                            <ActionButton>
                                                <EditButton htmlFor="upload-listImage-photo">
                                                    <input
                                                    style={{ display: "none" }}
                                                    id="upload-listImage-photo"
                                                    name="listImage"
                                                    type="file"
                                                    onChange={handleImageChange("listImage")}
                                                />
                                                    <Edit />
                                                </EditButton>
                                            </ActionButton>
                                            <ActionButton onClick={() => { setUploadImg(null); setValue("listImage", null); }}>
                                                <BsTrash />
                                            </ActionButton>
                                        </ImageActions>
                                    </CoverPictureWrapper>
                                </>
                                ) : (
                                    <NoCoverPictureWrapper>
                                        <EditButton htmlFor="upload-listImage-photo">
                                            <input
                                                style={{ display: "none" }}
                                                id="upload-listImage-photo"
                                                type="file"
                                                name="listImage"
                                                onChange={handleImageChange("listImage")}
                                            />
                                            <SelectCoverPictureButton>
                                            <BsCloudArrowUp />
                                            Select a picture
                                            </SelectCoverPictureButton>
                                        </EditButton>
                                    </NoCoverPictureWrapper>
                                ) }
                            </CoverPictureUploaderWrapper>
                        </FormGroup>
                        <EditorTextWrapper>
                            <PostEditor
                                // id={user?.id as string}
                                editorState={editorState}
                                onEditorStateChange={(newState: EditorState) => {
                                    setEditorState(newState);
                                    setContent(
                                        draftToHtml(convertToRaw(newState.getCurrentContent()))
                                    );
                                    setValue("body", content);
                                }}
                            />
                        </EditorTextWrapper>
                        <FormGroup className='submit-button'>
                            <Button content="Sign up" type="submit"
                                disabled={submitting} loading={loading}
                            />
                        </FormGroup>
                    </FormWrap>
                </InnerFormWrapper>
            </FormWrapper>
        </InnerContainer>
    )
}

export default Form
