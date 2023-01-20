import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import Dropdown, {
  // CommentHorizontalRule,
  CommentCard,
  CommentWrapper,
  CommentLeftWrap,
  UserProfileImge,
  CommentText,
  CommentDate,
  CommentTopRightWrap,
  ExpandIcon,
  PostDropdown,
  UserName,
  DeleteIcon,
  EditIcon,
  ItemText,
  ItemWrapper,
} from '../styles';
import Link from 'next/link';
// import { getFirebaseComments, commentsListener } from 'src/helpers/firebase';
import { collection, db, DocumentData, limit, onSnapshot, orderBy, query, where } from 'src/lib/firebase';


export interface ICommentThread {
  firebaseId: string;

}
const CommentThread: React.FC<ICommentThread> = ({firebaseId}) => {
  const [showDropdown, setShowDropdown] = useState<number | boolean>(-1);
  // const [showEditor, setShowEditor] = useState(true);
  // const [showEditEditor, setShowEditEditor] = useState(false);
  const [comments, setComments] = useState<DocumentData>([]);
  
  const toggleDropdown = (id: number) => {
    // console.log(id)
    if (id === showDropdown) {
      // console.log('i am equal to the id')
      setShowDropdown(false);
    } 
    else {
      // console.log('i am not equal', id);
      setShowDropdown(id);
    }
  };

  // console.log(comms)

  const toggleEditor = (body: string, id: string): void => {
    // setShowEditor(false);
    // setShowEditEditor(true);
    // setEditContent(body);
    // console.log(editContent);
  };
  // console.log(comments)


  // useEffect(() => {
  //   const getComments = async() => {
  //     const res = await getFirebaseComments(firebaseId);
  //     setComments((prev: DocumentData[]) => ([...prev, res]));
  //   }
  //   const listen = getComments();
  //   return () => {
  //     listen;
  //   };
  // }, [firebaseId]);

  useEffect(() => {
    const getNewComment = async () => {
      const q = query(
        collection(db, 'comments'),
        where('entityFirebaseId', '==', firebaseId),
        orderBy('createdAt', 'desc'),
        limit(4)
      );

      onSnapshot(q, (querySnapshot) => {
        const comms: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.data())
          comms.push(doc.data());
        });
        // console.log('checking to see how many items it brings: ', comms)
        setComments(comms);
      });
      //  const res = await commentsListener(firebaseId);
      // await commentsListener(firebaseId).then((res) => {
      //   console.log(res);
      // })
      
      // setComments(res);
    };
    const listen = getNewComment();
    return () => {
      listen;
    };
  }, [firebaseId]);

  const handleDelete = async (id: string) => {
    // const res = await deleteComment({
    //   variables: { deleteCommentId: id },
    // });
    // if (res.data) {
    //   // console.log(res);
    // } else {
    //   // toast.error('something went wrong your message was not deleted.');
    // }
  };
  return (
    <CommentCard>
      <div>
        {comments.map(
          (
            com: {
              entityStrapiId: string;
              username: string;
              avatar: string;
              updatedAt: { seconds: number };
              body: string;
            },
            i: number
          ) => (
            <CommentWrapper key={i}>
              <CommentLeftWrap>
                <Link passHref href={`user-profile/${com.username}`}>
                  <UserProfileImge alt="user image" src={com.avatar} />
                </Link>

                <CommentText>
                  <Link passHref href={`user-profile/${com.username}`}>
                    <UserName>{com.username}</UserName>
                  </Link>
                  <CommentDate>
                    {dayjs.unix(com.updatedAt?.seconds).fromNow()}
                  </CommentDate>
                  <div
                  // dangerouslySetInnerHTML={{
                  //   __html: body,
                  // }}
                  >
                    {com.body}
                  </div>
                </CommentText>
              </CommentLeftWrap>
              <CommentTopRightWrap>
                <PostDropdown>
                  <ExpandIcon onClick={() => toggleDropdown(i)} />
                  <Dropdown
                    onClick={() => toggleDropdown(i)}
                    showDropdown={showDropdown === i}
                  >
                    <ItemWrapper>
                      <div onClick={() => toggleEditor('body', '2')}>
                        <EditIcon />
                        <ItemText onClick={() => toggleEditor('body', '2')}>
                          Edit
                        </ItemText>
                      </div>
                    </ItemWrapper>
                    <ItemWrapper>
                      <div onClick={() => handleDelete('2')}>
                        <DeleteIcon />
                        <ItemText onClick={() => handleDelete('2')}>
                          Delete
                        </ItemText>
                      </div>
                    </ItemWrapper>
                  </Dropdown>
                </PostDropdown>
              </CommentTopRightWrap>
            </CommentWrapper>
          )
        )}
      </div>

      {/* {showEditor && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.body && <span>text is required</span>}
          <PostEditor
            content={content}
            editorState={editorState}
            onEditorStateChange={(newState: EditorState) => {
              setEditorState(newState);
              setContent(
                draftToHtml(convertToRaw(newState.getCurrentContent()))
              );
              setValue('body', content);
            }}
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      )} */}
    </CommentCard>
  );
};

export default CommentThread;
