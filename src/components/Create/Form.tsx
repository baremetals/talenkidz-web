import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import slugify from "slugify";
import axios from "axios";

import { storage } from "lib/admin";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { useForm } from "react-hook-form";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import PostEditor from "components/Editor/PostEditor";

import { Error, ErrorMsg } from "../Input";
import Button from "components/Auth/Button";
import {
  FormWrapper,
  InnerFormWrapper,
  FormWrap,
  FormGroup,
  FormInput,
  Select,
  CategoryOptions,
  TextArea,
  UploadWrapper,
  UploadLabel,
  UploadIcon,
  UploadInput,
  EditorTextWrapper,
  UploadImage,
} from "./styles";
import { Column, Row, InnerContainer, Title } from "styles/common.styles";

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
};

// const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const Form = ({ formType, id }: form) => {
  const router = useRouter();
  let [upload] = useState<FileType>({
    lastModified: 0,
    lastModifiedDate: {},
    name: "",
    size: 0,
    type: "",
    webkitRelativePath: "",
  });

  // const [uploadImg, setUploadImg] = useState<FileType | string>('/default-list-img.jpg');

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>("");
  const [imgSizeErr, setImgSizeErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { _errors },
  } = useForm<FormProps>();

  const handleImageChange =
    (_name: string) => (event: { target: { files: {}[] } } | File | any) => {
      upload = event.target.files[0];
      setImgSizeErr(false);
      // console.log(upload.name);
      if (upload?.size > 10240000) {
        event.target.value = [];
        setMsg("File size cannot exceed more than 10MB");
        setImgSizeErr(true);
        setTimeout(() => {
          setImgSizeErr(false);
        }, 8000);
      }
      setValue("listImage", upload as FileType);
      // setUploadImg(upload)
    };

  const onSubmit = async (info: FormProps) => {
    setSubmitting(true);
    const category = info.category.split(" ");
    // console.log(category[1]);
    const slug: string = slugify(info.title);
    const eventUrl = `http://localhost:5300/events/${category[0]}/${slug}`;
    const activityUrl = `http://localhost:5300/activities/${category[0]}/${slug}`;
    // console.log(activityUrl);

    const { name } = upload;
    // console.log(name);
    const testingRef = ref(storage, `testing folder/${name}`);
    const file = upload;

    const fileUrl = await uploadBytes(testingRef, file as any).then(
      async () => {
        return getDownloadURL(testingRef);
      }
    );

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
      listImage: fileUrl,
      Location: {
        numberOrName: info.numberOrName,
        street: info.street,
        town: info.town,
        postCode: info.postCode,
      },
      SEO: {
        title: info.title,
        description: info.description,
        image: fileUrl,
        url: formType === "event" ? eventUrl : activityUrl,
        type: formType === "event" ? "event" : "activity",
      },
    };

    await axios
      .post("/api/list", {
        data,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status === 200) {
          setSubmitting(false);
          if (formType === "events") {
            router.push(eventUrl);
          } else router.push(activityUrl);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        // setMsg("Sorry something went wrong please try again later.");
        // setError(true);
        // setTimeout(() => {
        //     setError(false);
        // }, 10000);
      });
  };
  return (
    <InnerContainer>
      <FormWrapper>
        <InnerFormWrapper>
          <Title
            style={{
              lineHeight: "1.6",
              fontSize: "1.5rem",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            New Activity
          </Title>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Please provide a title"
                {...register("title", { required: true })}
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                placeholder="Please provide description"
                {...register("description", { required: true })}
              />
            </FormGroup>
            <FormGroup>
              <Select {...register("category", { required: true })}>
                <CategoryOptions>Please select a category</CategoryOptions>
                <CategoryOptions value="drama 2">Drama</CategoryOptions>
                <CategoryOptions value="music 3">Music</CategoryOptions>
              </Select>
            </FormGroup>
            <Row>
              <Column>
                <FormGroup>
                  <UploadLabel>Start Date</UploadLabel>
                  <FormInput
                    type="date"
                    {...register("startDate", { required: true })}
                  />
                </FormGroup>
              </Column>
              <Column>
                <FormGroup>
                  <UploadLabel>End Date</UploadLabel>
                  <FormInput
                    type="date"
                    {...register("endDate", { required: true })}
                  />
                </FormGroup>
              </Column>
            </Row>
            <Row>
              <Column>
                <FormGroup>
                  <UploadLabel>Start Date</UploadLabel>
                  <FormInput
                    type="time"
                    {...register("startTime", { required: true })}
                  />
                </FormGroup>
              </Column>
              <Column>
                <FormGroup>
                  <UploadLabel>End Date</UploadLabel>
                  <FormInput
                    type="time"
                    {...register("endTime", { required: true })}
                  />
                </FormGroup>
              </Column>
            </Row>

            <UploadLabel>Location</UploadLabel>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Number or name"
                {...register("numberOrName", { required: true })}
              />
            </FormGroup>
            <Row>
              <Column>
                <FormGroup>
                  <FormInput
                    type="text"
                    placeholder="street"
                    {...register("street", { required: true })}
                  />
                </FormGroup>
              </Column>

              <Column>
                <FormGroup>
                  <FormInput
                    type="text"
                    placeholder="town"
                    {...register("town", { required: true })}
                  />
                </FormGroup>
              </Column>

              <Column>
                <FormGroup>
                  <FormInput
                    type="text"
                    placeholder="post code"
                    {...register("postCode", { required: true })}
                  />
                </FormGroup>
              </Column>
            </Row>

            <FormGroup>
              {imgSizeErr && <ErrorMsg>{msg}</ErrorMsg>}
              <UploadLabel>upload</UploadLabel>
              <UploadWrapper>
                {/* <UploadIcon /> */}
                <UploadInput
                  type="file"
                  onChange={handleImageChange("listImage")}
                  name="listImage"
                />
              </UploadWrapper>
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
            <FormGroup className="submit-button">
              <Button
                content="Sign up"
                type="submit"
                disabled={submitting}
                loading={submitting}
              />
            </FormGroup>
          </FormWrap>
        </InnerFormWrapper>
      </FormWrapper>
    </InnerContainer>
  );
};

export default Form;
