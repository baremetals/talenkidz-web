import React from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type editorProps = {
  onEditorStateChange: any
  editorState: EditorState
}

const ModalEditor = ({ editorState, onEditorStateChange, ...props }: editorProps) => {
    
  // const uploadImageCallBack = async (file: File) => {
  //   console.log(file);
  // };

  return (
    <Editor
      {...props}
      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={onEditorStateChange}
      // toolbarOnFocus
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "fontFamily",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "embedded",
          "emoji",
          "image",
          "history",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        // image: {
        //   urlEnabled: true,
        //   uploadEnabled: true,
        //   uploadCallback: uploadImageCallBack,
        //   previewImage: true,
        //   alt: { present: false, mandatory: false },
        // },
      }}
    />
  );
};

export default ModalEditor;

export const uploadInlineImageForModal = async (
  file: File,

) => {
  try {
    console.log(file)
  } catch (e) {
    console.error(e);
    return null;
  }
};
