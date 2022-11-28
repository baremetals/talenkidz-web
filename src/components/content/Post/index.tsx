/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";
import { EditorState } from "draft-js";
import axios from "axios";

import { useAppSelector } from "src/app/hooks";
import { isUser } from "src/features/auth";

import { AiFillCloseCircle } from "react-icons/ai";
import Modal from 'components/utilities/Modal'
// import ModalEditor from '../Modal/ModalEditor'
// const ModalEditor = dynamic(() => import('../Modal/ModalEditor'), {
//     ssr: false,
// });
import {
    TitleInput,
    InputFormGroupRow,
    InputFormGroup,
    InputContainer,
    ButtonContainer,
    CloseButton,
    SubmitButton,
    MainContainer,
    FormWrap,
    CloseButtonWrap,
    CardText,
    BodyTextWrapper,
    UploadWrapper,
    Label,
    UploadIcon,
    UploadInput,
    Select,
    CategoryOptions,
    BodyText
} from "./styles";

type FormInput = {
    mediaLink: string;
    postType: string;
    description: string;
    id?: string;
};

const Post = ({ closeM,
    showModal,
    setShowModal }: any) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();

    const [_editorState, _setEditorState] = useState<EditorState>(
        EditorState.createEmpty()
    );
    const [content, setContent] = useState<string>("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [msg, setMsg] = useState("");
    const { user: user } = useAppSelector(isUser);

    const onSubmit = async (info: FormInput) => {
        await axios.post("/api/posts", {
            data: {
                mediaUrl: info.mediaLink,
                description: info.description,
                postType: info.postType,
                user: user?.id as string,
            },
        })
            .then(() => {
                setShowModal(false);
                setMsg("Post created successfully");
                setSuccess(true);
            })
            .catch((err) => {
                setMsg("Sorry something went wrong please try again later.");
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 10000);
            })
    }

    return (
        <Modal showModal={showModal}
            closeM={() => setShowModal(false)}
            setShowModal={setShowModal}
        >
            <FormWrap onSubmit={handleSubmit(onSubmit)}>
                <MainContainer>
                    <CloseButtonWrap>
                        <AiFillCloseCircle onClick={closeM} />
                    </CloseButtonWrap>
                    <CardText>Create Post</CardText>
                    <InputContainer>
                        <InputFormGroupRow>
                            {/* <InputFormGroup>
                                <TitleInput placeholder="title"
                                    type="text"
                                    name="title"></TitleInput>
                            </InputFormGroup> */}
                            <InputFormGroup>
                                <Select {...register("postType", { required: true })}>
                                    <CategoryOptions>Please select post type</CategoryOptions>
                                    <CategoryOptions>text</CategoryOptions>
                                    <CategoryOptions>image</CategoryOptions>
                                    <CategoryOptions>video</CategoryOptions>
                                </Select>
                            </InputFormGroup>
                            <InputFormGroup>
                                <TitleInput placeholder="media url"
                                    {...register("mediaLink")}
                                    type="text"
                                    name="mediaLink"></TitleInput>
                            </InputFormGroup>
                            <InputFormGroup>
                                <UploadWrapper>
                                    <UploadIcon />
                                    <Label>Upload Media</Label>
                                    <UploadInput type="file" />
                                </UploadWrapper>
                            </InputFormGroup>
                            
                        </InputFormGroupRow>
                        <BodyTextWrapper>
                            <Label>Description</Label>
                            <BodyText {...register("description")} name="description" />
                            {/* <ModalEditor
                                // id={user?.id as string}
                                editorState={editorState}
                                onEditorStateChange={(newState: EditorState) => {
                                    setEditorState(newState);
                                    setContent(
                                        draftToHtml(convertToRaw(newState.getCurrentContent()))
                                    );
                                    setValue("body", content);
                                }}
                            /> */}
                        </BodyTextWrapper>
                    </InputContainer>
                    <ButtonContainer>
                        <CloseButton onClick={closeM} type="button">
                            close
                        </CloseButton>
                        <SubmitButton type="submit">submit</SubmitButton>
                    </ButtonContainer>
                </MainContainer>
            </FormWrap>

        </Modal>
    )
}

export default Post
