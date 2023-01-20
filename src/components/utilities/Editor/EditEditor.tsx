import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type editorProps = {
    onEditorStateChange: any;
    body: string
};

const EditEditor = ({ onEditorStateChange, body }: editorProps) => {

    const [content] = useState(body);
    // console.log(body)
    const blocksFromHtml = htmlToDraft(content);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
    );
    const [editorState, setEditorState] = useState<EditorState>(
        EditorState.createWithContent(contentState)
    );
  return (
      <Editor
        //   {...props}
          editorState={editorState}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={(newState: EditorState) => {
              setEditorState(newState);
              onEditorStateChange(newState);
          }}
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
            //   image: {
            //       urlEnabled: true,
            //       uploadEnabled: true,
            //       uploadCallback: uploadImageCallBack,
            //       previewImage: true,
            //       alt: { present: false, mandatory: false },
            //   },
          }}
      />
  )
}

export default EditEditor
