import React, { useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { fetchStrapiUser, updateStrapiUserBookMarks } from 'src/helpers';
import { openModal } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';
import { AuthContext } from 'src/features/auth/AuthContext';
import { TBookMark } from 'src/types';


type Props = {
  detailsPage?: boolean;
  id: string;
  title: string;
  slug: string;
  image: string;
  width: number;
  height: number;
  userName: string;
  date: string;
  category: string;
  type: string;
  readingTimeOrPrice: string;
  userImage: string;
  time?: string;
  venueName?: string;
  venue?: string;
  blurb?: string;
  location?: string;
};
const BookMarkIcon = ({
  id,
  title,
  slug,
  image,
  detailsPage = false,
  width = 25,
  height = 25,
  type,
  userImage,
  userName,
  date,
  category,
  readingTimeOrPrice,
  venueName,
  time,
  venue,
  blurb,
  location
}: Props) => {
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
    data?.data.forEach((item: { slug: string }) => marks.push(item.slug));
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
    if (bookmarks.includes(slug)) {
      setBookedMarked(true);
    } else {
      setBookedMarked(false);
    }
  }, [bookmarks, slug]);

  // Bookmark and item
  const saveArticle = useCallback(async () => {
    // console.log(bookedMarked);
    // console.log(bookmarks);
    if (user === null) {
      // console.log(id, title, slug, image);
      dispatch(openModal('LOGIN_FORM'));
    } else {
      if (bookmarks.includes(slug)) {
        const filteredMarks = myBookMarks.filter((item) => item?.slug !== slug);
        await updateStrapiUserBookMarks(filteredMarks);
        await getMe();
      } else {
        console.log('summer house', userImage);
        await updateStrapiUserBookMarks([
          ...myBookMarks,
          {
            itemId: id,
            title,
            slug,
            image,
            type,
            userImage,
            userName,
            date,
            category,
            readingTimeOrPrice,
            venueName,
            time,
            venue,
            blurb,
            location,
          },
        ]);
        await getMe();
      }
    }

    // console.log('saving articles');
  }, [
    userImage,
    bookmarks,
    category,
    dispatch,
    date,
    readingTimeOrPrice,
    getMe,
    id,
    image,
    userName,
    myBookMarks,
    slug,
    title,
    type,
    user,
    venueName,
    time,
    venue,
    blurb,
    location,
  ]);
  return (
    <div
      className={bookedMarked ? 'active' : 'inactive'}
      style={{ cursor: 'pointer' }}
    >
      {bookedMarked ? (
        <div className="bookmarkActive">
          <Image
            src={
              detailsPage
                ? '/assets/svgs/bookmark-plus-filled.svg'
                : '/assets/svgs/bookmark-active.svg'
            }
            alt="bookmark icon"
            width={width}
            height={height}
            onClick={saveArticle}
          />
        </div>
      ) : (
        <div className="bookmark">
          <Image
            src={
              detailsPage
                ? '/assets/svgs/bookmark-plus.svg'
                : '/assets/svgs/bookmar.svg'
            }
            alt="bookmark icon"
            width={width}
            height={height}
            onClick={saveArticle}
          />
        </div>
      )}
    </div>
  );
};

export default BookMarkIcon