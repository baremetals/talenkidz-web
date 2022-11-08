import React from 'react'
import dayjs from "dayjs";
import Link from 'next/link'
import { useArticlesQuery } from "generated/graphql";

import {
    Image,
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
} from "../../../styles/common.styles";

// type cardProps = {
//     image: string;
//     date: string;
//     title: string;
// }
export const NewsCard = () => {

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
            {articles && articles?.map((art, id) => (
                <MediaObjectItem key={id}>
                    <MediaObjectThumb>
                        <Link passHref href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}>
                            <Image src={art?.attributes?.heroImage?.data?.attributes?.url || '/default-list-img.jpg'} alt="post image" />
                        </Link>
                    </MediaObjectThumb>

                    <MediaObjectBody>
                        <MediaObjectDate>{dayjs(art?.attributes?.createdAt).format('DD MMMM YYYY')}</MediaObjectDate>
                        <Link passHref href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}>
                            <MediaObjectTitle>{art?.attributes?.title.slice(0, 55)} ...</MediaObjectTitle>
                        </Link>
                    </MediaObjectBody>
                </MediaObjectItem>
            ))}

        </>
    )
}
