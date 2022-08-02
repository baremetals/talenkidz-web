/* tslint:disable */
import React from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type editorProps = {
  onEditorStateChange: any;
  editorState: EditorState;
};

const PostEditor = ({
  onEditorStateChange,
  editorState,
  ...props
}: editorProps) => {
  // const blocksFromHtml = htmlToDraft(content);
  // const { contentBlocks, entityMap } = blocksFromHtml;
  // const contentState = ContentState.createFromBlockArray(
  //   contentBlocks,
  //   entityMap
  // );

  // const [editorState, setEditorState] = useState<EditorState>(
  //   EditorState.createWithContent(contentState)
  // );

  // const uploadImageCallBack = async (file: File) => {
  //   const testingRef = ref(storage, `${folder}/${file.name}`);
  //   await uploadInlineImageForModal(file, testingRef);
  //   const url = await getDownloadURL(testingRef);
  //   // console.log(res);
  //   return Promise.resolve({
  //     data: {
  //       link: url
  //     },
  //   });
  // };

  return (
    // <Editor
    //   {...props}
    //   editorState={editorState}
    //   toolbarClassName="toolbar-class"
    //   wrapperClassName="wrapper-class"
    //   editorClassName="editor-class"
    //   onEditorStateChange={onEditorStateChange}
    //   // onEditorStateChange={(newState: EditorState) => {
    //   //   setEditorState(newState);
    //   //   onEditorStateChange(newState);
    //   // }}
    //   // toolbarOnFocus
    //   toolbar={{
    //     options: [
    //       "inline",
    //       "blockType",
    //       "fontSize",
    //       "fontFamily",
    //       "list",
    //       "textAlign",
    //       "colorPicker",
    //       "link",
    //       "embedded",
    //       "emoji",
    //       "history",
    //     ],
    //     inline: { inDropdown: true },
    //     list: { inDropdown: true },
    //     textAlign: { inDropdown: true },
    //     link: { inDropdown: true },
    //     history: { inDropdown: true },
    //     image: {
    //       urlEnabled: true,
    //       uploadEnabled: true,
    //       // uploadCallback: uploadImageCallBack,
    //       previewImage: true,
    //       alt: { present: false, mandatory: false },
    //     },
    //   }}
    // />
    <></>
  );
};

export default PostEditor;

// export const uploadInlineImageForModal = async (
//   file: File,
//   storeRef: StorageReference
// ) => {
//   try {
//     return await uploadBytes(storeRef, file);
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// };
