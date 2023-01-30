import React, { ReactElement } from 'react'
import dayjs from "dayjs";
import Link from 'next/link'
import Image from 'next/image';
import { useArticlesQuery } from "generated/graphql";
import { useRouter } from 'next/router';

import {
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
} from "styles/common.styles";


function NewsCard(): ReactElement {
  const router = useRouter();
    const { data, loading, error } = useArticlesQuery({
        variables: {
            pagination: {
                start: 0,
                limit: 3,
            },
            sort: "createdAt:desc",
        },
    });

    if (!data || loading) {
        return <div>loading...</div>;
    }
    if (error) return <div>No data found</div>;

    // console.log(data?.articles?.data);

    const articles = data?.articles?.data

    return (
      <>
        {articles &&
          articles?.map((art, id) => (
            <MediaObjectItem key={id}>
              <MediaObjectThumb
                onClick={() =>
                  router.push(
                    `/activities/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`
                  )
                }
              >
                {/* <Link
                  passHref
                  href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}
                > */}
                  <Image
                    src={
                      art?.attributes?.heroImage?.data?.attributes?.url ||
                      '/default-list-img.jpg'
                    }
                    alt="post image"
                    width={80}
                    height={80}
                  />
                  {/* <Img
                    src={
                      art?.attributes?.heroImage?.data?.attributes?.url ||
                      '/default-list-img.jpg'
                    }
                    alt="post image"
                  /> */}
                {/* </Link> */}
              </MediaObjectThumb>

              <MediaObjectBody>
                <MediaObjectDate>
                  {dayjs(art?.attributes?.createdAt).format('DD MMMM YYYY')}
                </MediaObjectDate>
                <Link
                  passHref
                  href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}
                >
                  <MediaObjectTitle>
                    {art?.attributes?.title.slice(0, 55)} ...
                  </MediaObjectTitle>
                </Link>
              </MediaObjectBody>
            </MediaObjectItem>
          ))}
      </>
    );
}
export default NewsCard