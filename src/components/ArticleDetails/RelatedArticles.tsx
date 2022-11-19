import React, { ReactElement } from 'react'
import dayjs from "dayjs";
import Link from 'next/link'

import { useFilteredArticlesQuery, ArticleEntity } from "generated/graphql";

import {
    MediaObject,
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
    Image,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    // WidgetPanelLink
} from "../../styles/common.styles";


// type articleProps = {
//     id: string;
//     attributes: {
//         body: string;
//         category: {
//             data: {
//                 id: string;
//                 attributes: {
//                     // name: string;
//                     slug: string;
//                 };
//             };
//         };
//         createdAt: Date;
//         slug: string;
//         title: string;
//         blurb: string;
//         author: {
//             data: {
//                 id: string;
//                 attributes: {
//                     fullName: string;
//                     // slug: string;
//                     // img: string;
//                 };
//             };
//         };
//         heroImage: {
//             data: {
//                 id: string;
//                 attributes: {
//                     url: string;
//                     // slug: string;
//                     // img: string;
//                 };
//             };
//         };
//     };
// };

type propType = {
    category: string
};

function RelatedArticles({ category }: propType): ReactElement {

    const { data } = useFilteredArticlesQuery({
        variables: {
            filters: {
                category: {
                    slug: {
                        eq: category,
                    },
                }
            },
        },
    });

    // console.log(data?.articles?.data)
    // console.log(category)
    const arty = data?.articles?.data as ArticleEntity[]


    return (
        <>
            <WidgetPanel>
                <WidgetPanelTitle style={{ backgroundColor: '#8152cd' }}>Related Articles</WidgetPanelTitle>
                <WidgetPanelListing>
                    <MediaObject>
                        {arty?.map((art, id) => (
                            <MediaObjectItem key={id}>
                                <MediaObjectThumb>
                                    <Link href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`} passHref>
                                        <Image src={art?.attributes?.heroImage?.data?.attributes?.url || '/default-list-img.jpg'} alt="post image" />
                                    </Link>
                                </MediaObjectThumb>
                                <MediaObjectBody>
                                    <MediaObjectDate>{dayjs(art?.attributes?.createdAt).format('DD MMMM YYYY')}</MediaObjectDate>
                                    <Link passHref href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}>
                                    <MediaObjectTitle>{art?.attributes?.title}</MediaObjectTitle>
                                    </Link>
                                </MediaObjectBody>
                            </MediaObjectItem>
                        ))}
                    </MediaObject>
                </WidgetPanelListing>
            </WidgetPanel>
        </>
    );
}

export default RelatedArticles
