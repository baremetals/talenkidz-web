import React, { useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { fetchStrapiUser, updateStrapiUserBookMarks } from 'src/helpers';
import { openModal } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';
import { AuthContext } from 'src/features/auth/AuthContext';
import { TBookMark } from 'src/types';

type Props = {
  detailsPage?: boolean;
  id: string,
  title: string,
  slug: string,
  image: string,
};
const BookMarkIcon = ({ id, title, slug, image, detailsPage = false }: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useContext(AuthContext);

  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [myBookMarks, setMyBookMarks] = useState<TBookMark[]>([]);
  const [bookedMarked, setBookedMarked] = useState<boolean>(false);

  // fetch the logged in users bookmarks
  const getMe = useCallback(async () => {
    const marks: string[] = [];
    const { data } = await fetchStrapiUser();
    setMyBookMarks(data?.data);
    data?.data.forEach((item: { itemId: string }) => marks.push(item.itemId));
    setBookmarks(marks);
    // console.log('the response', data);
    return data;
  }, []);

  // console.log(bookmarks);

  useEffect(() => {
    if (user) {
      const unsubscribe = getMe();
      return () => {
        unsubscribe;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (bookmarks.includes(id)) {
      setBookedMarked(true);
    } else {
      setBookedMarked(false);
    }
  }, [bookmarks, id]);

  // Bookmark and item
  const saveArticle = useCallback(async () => {
    // console.log(bookedMarked);
    // console.log(bookmarks);
    if (user === null) {
      // console.log(id, title, slug, image);
      dispatch(openModal('LOGIN_FORM'));
    }
    if (bookmarks.includes(id)) {
      const filteredMarks = myBookMarks.filter((item) => item?.itemId !== id);
      await updateStrapiUserBookMarks(filteredMarks);
      await getMe();
    } else {
      // console.log('summer house');
      await updateStrapiUserBookMarks([
        ...myBookMarks,
        { itemId: id, title, slug, image, type: 'article' },
      ]);
      await getMe();
    }
    // console.log('saving articles');
  }, [bookmarks, dispatch, getMe, id, image, myBookMarks, slug, title, user]);
  return (
    <div
      className={bookedMarked ? 'active' : 'inactive'}
      // onClick={handleClick}
    >
      {bookedMarked ? (
        <div className="bookmarkActive">
          <Image
            src={
              detailsPage
                ? '/assets/svgs/comment-plus.svg'
                : '/assets/svgs/bookmark-active.svg'
            }
            alt="bookmark icon"
            width={detailsPage? 34: 25}
            height={detailsPage? 34: 25}
            onClick={saveArticle}
          />
        </div>
      ) : (
        <div className="bookmark">
          <Image
            src={
              detailsPage
                ? '/assets/svgs/comment-plus.svg'
                : '/assets/svgs/bookmark-active.svg'
            }
            alt="bookmark icon"
            width={detailsPage? 34: 25}
            height={detailsPage? 34: 25}
            onClick={saveArticle}
          />
        </div>
      )}
    </div>
  );
};

export default BookMarkIcon