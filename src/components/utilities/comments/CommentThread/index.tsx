import React, { useEffect, useState } from 'react';
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
import { collection, db, DocumentData, limit, onSnapshot, orderBy, query, where } from 'src/lib/firebase';
import { CommentActionWrap, CommentUser, CommentUserImg, CommentUserWrap, CommentWrapper, DayBlock, ReplyBlock } from './thread.styles';


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
    <>
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
              <ReplyBlock>
                <label>reply on</label>
                <Image
                  src={'/assets/svgs/like.svg'}
                  alt="article image"
                  width={24}
                  height={24}
                />
              </ReplyBlock>
            </CommentActionWrap>
          </CommentWrapper>
        )
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
