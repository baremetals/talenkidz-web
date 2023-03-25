import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import Dropdown, {
  ExpandIcon,
  ItemText,
  ItemWrapper,
  PostDropdown,
  DeleteIcon,
  EditIcon,
} from '../styles';
import Link from 'next/link';
// import { getFirebaseComments, commentsListener } from 'src/helpers/firebase';
import {
  collection,
  db,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'src/lib/firebase';
import {
  CommentActionWrap,
  CommentUser,
  CommentUserImg,
  CommentUserWrap,
  CommentWrapper,
  DayBlock,
  ReplyBlock,
} from './thread.styles';
import { AuthContext } from 'src/features/auth/AuthContext';
import { deleteAComment } from 'src/helpers/firebase';
import { updateStrapiEntity } from 'src/helpers';
import { useAppDispatch } from 'src/app/hooks';
import { openModalWithContent } from 'src/features/modal';
import DeletesIcon from 'public/assets/icons/DeleteOutline';
import StarIcon from 'public/assets/icons/StarIcon';
import LikeIcon from 'public/assets/icons/LikeIcon';

export interface ICommentThread {
  firebaseId: string;
  totalComments: number;
}
const CommentThread: React.FC<ICommentThread> = ({
  firebaseId,
  totalComments,
}) => {
  const { user } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState<number | boolean>(-1);
  const dispatch = useAppDispatch();
  // const [showEditor, setShowEditor] = useState(true);
  // const [showEditEditor, setShowEditEditor] = useState(false);
  const [comments, setComments] = useState<DocumentData>([]);
  // console.log(comments);

  const toggleDropdown = (id: number) => {
    if (id === showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(id);
    }
  };

  const editComment = (body: string, id: string): void => {
    dispatch(
      openModalWithContent({
        modalComponent: 'EDIT_COMMENT_MODAL',
        content: body,
        entityId: id,
      })
    );
  };

  const deleteComment = (body: string, id: string): void => {
    dispatch(
      openModalWithContent({
        modalComponent: 'DELETE_COMMENT_MODAL',
        content: body,
        entityId: id,
      })
    );
  };

  useEffect(() => {
    const getNewComment = async () => {
      const q = query(
        collection(db, 'comments'),
        where('entityFirebaseId', '==', firebaseId),
        orderBy('createdAt', 'desc'),
        limit(4)
      );

      onSnapshot(q, (querySnapshot) => {
        const comms: React.SetStateAction<DocumentData> = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.id)
          comms.push({ id: doc.id, ...doc.data() });
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

  const handleDelete = async (id: string, strapiId: string) => {
    console.log('starting', id);
    try {
      await deleteAComment(id);
      await updateStrapiEntity('articles', strapiId, {
        totalComments: totalComments - 1,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {comments.length > 0 ? (
        comments.map(
          (
            com: {
              id: string;
              entityStrapiId: string;
              entityFirebaseId: string;
              username: string;
              avatar: string;
              userId: number;
              updatedAt: { seconds: number };
              body: string;
            },
            i: number
          ) => (
            <CommentWrapper key={com.id}>
              <CommentUserWrap>
                <CommentUser>
                  <Link passHref href={`user-profile/${com.username}`}>
                    <CommentUserImg>
                      <Image
                        src={com.avatar}
                        alt="user image"
                        className="bookmar"
                        width={35}
                        height={35}
                      />
                    </CommentUserImg>
                  </Link>

                  <Link passHref href={`user-profile/${com.username}`}>
                    <h3>{com.username}</h3>
                  </Link>
                </CommentUser>
                <div className="BlockIcon">
                  <div className="likeicon">
                    3 liked <LikeIcon />
                  </div>
                  <div className="StarIcon">
                    <StarIcon /> 5,0
                  </div>
                </div>

                {/* {user?.id === com.userId ? (
                  <PostDropdown>
                    <ExpandIcon onClick={() => toggleDropdown(i)} />
                    <Dropdown
                      onClick={() => toggleDropdown(i)}
                      showDropdown={showDropdown === i}
                    >
                      <ItemWrapper
                        onClick={() => editComment(com.body, com.id)}
                      >
                        <div>
                          <EditIcon />
                          <ItemText>Edit</ItemText>
                        </div>
                      </ItemWrapper>
                      <ItemWrapper>
                        <div
                          onClick={() =>
                            handleDelete(com.id, com.entityStrapiId)
                          }
                        >
                          <DeletesIcon />
                          <ItemText
                            onClick={() =>
                              handleDelete(com.id, com.entityStrapiId)
                            }
                          >
                            Delete
                          </ItemText>
                        </div>
                      </ItemWrapper>
                    </Dropdown>
                  </PostDropdown>
                ) : null} */}

                {/* <div className='star'>  <Image
            src={'/assets/svgs/StarIcon.svg'}
            alt="article image"
            width={31}
            height={31}
          /> 5,0</div> */}
              </CommentUserWrap>
              {com.body}
              <CommentActionWrap>
                <DayBlock>
                  {dayjs.unix(com.updatedAt?.seconds).fromNow()}
                </DayBlock>
                <div className="icons-block">
                  <div
                    className="block-icon"
                    onClick={() => editComment(com.body, com.id)}
                  >
                    <EditIcon />
                    <ItemText>Edit</ItemText>
                  </div>
                  <div
                    className="block-icon"
                    onClick={() => deleteComment(com.body, com.id)}
                  >
                    <DeletesIcon />
                    <ItemText>Delete</ItemText>
                  </div>
                </div>
                {/* <ReplyBlock> */}
                {/* <label>reply on</label>
                <Image
                  src={'/assets/svgs/like.svg'}
                  alt="article image"
                  width={24}
                  height={24}
                /> */}
                {/* </ReplyBlock> */}
              </CommentActionWrap>
            </CommentWrapper>
          )
        )
      ) : (
        <CommentWrapper>Leave a comment</CommentWrapper>
      )}

      {/* <CommentBox>
        <CommentUserBox>
          <CommentUser>
              <CommentImg>
                <Image
                    src="/assets/images/kid.png"
                    alt="location icon"
                    className="bookmar"
                    width={35}
                    height={35}
                  />
              </CommentImg>
              <h3>Abby Swhatson </h3>
          </CommentUser>
          <div className='star'>  <Image
            src={'/assets/svgs/StarIcon.svg'}
            alt="article image"
            width={31}
            height={31}
          /> 5,0</div>
      </CommentUserBox>
        <p>From lino cutting to surfing to children’s mental health, their hobbies and interests range far and wide. They are passionate about turning your everyday moments into memories and bringing you inspiring ideas to have fun with your family.</p>
        <CommentAction>
           <DayBlock>2 days ago</DayBlock>
           <Reply>
            <label>1 liked </label> 
            <Image
                  src={'/assets/svgs/like.svg'}
                  alt="article image"
                  width={24}
                  height={24}
              />
            </Reply>
         </CommentAction>
      </CommentBox> */}
    </>
  );
};

export default CommentThread;
