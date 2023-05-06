import PremiumBanner from 'components/users/Account/PremiumBanner';
import { ArticleEntity, useFilteredArticlesLazyQuery } from 'generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';
import ArticleItemCard from '../../Account/ArticleItemCard';
import Editor from '../../Account/Editor';
import PostLimits from '../../Account/PostLimits';

const ArticleSection = () => {
  const { user: user } = useAppSelector(isUser);
  const [entity, setEntities] = useState<ArticleEntity[]>([]);

  const [loadArticles, { loading, data }] = useFilteredArticlesLazyQuery({
    variables: {
      filters: {
        creator: {
          id: {
            eq: user?.id?.toString(),
          },
        },
      },
      pagination: {
        start: 0,
        limit: 12,
      },
      sort: 'createdAt:desc',
    },
  });

  // console.log(entity);
  useEffect(() => {
    const subscribe = loadArticles();

    return () => {
      subscribe;
    };
  }, [loadArticles]);

  useEffect(() => {
    const subscribe = setEntities(data?.articles?.data as ArticleEntity[]);

    return () => {
      subscribe;
    };
  }, [data?.articles?.data]);
  return (
    <>
      {/* Account status notes */}
      <PostLimits limit={'unlimited'} />

      {/* Become a premium member */}
      <PremiumBanner />

      {/* Write a new article */}
      <Editor companentName={'ARTICLE_FORM_MODAL'} />

      {/* Articles */}
      {entity?.map((item) => (
        <ArticleItemCard
          key={item.id}
          totalLikes={item?.attributes?.totalLikes as number}
          totalComments={item?.attributes?.totalComments as number}
          totalBookmarks={item?.attributes?.totalBookmarks as number}
          id={item.id as string}
          authorImg={
            item?.attributes?.author?.data?.attributes?.avatar?.data?.attributes
              ?.url ||
            (item?.attributes?.creator?.data?.attributes?.avatar as string)
          }
          authorName={
            item?.attributes?.author?.data?.attributes?.fullName ||
            (item?.attributes?.creator?.data?.attributes?.fullName as string)
          }
          articleTitle={item?.attributes?.title}
          articleIntro={item?.attributes?.blurb as string}
          slug={item?.attributes?.slug}
          readingTime={item?.attributes?.readingTime as string}
          createdAt={item?.attributes?.createdAt}
          articleImage={item?.attributes?.heroImage?.data?.attributes?.url}
          category={
            item?.attributes?.category?.data?.attributes?.slug as string
          }
          userId={user?.id?.toString() as string}
          creatorId={item?.attributes?.creator?.data?.id as string}
          keywords={item?.attributes?.SEO?.keywords as string}
          body={item?.attributes?.body as string}
          categoryId={item?.attributes?.category?.data?.id as string}
          heroImageId={item?.attributes?.heroImage?.data?.id as string}
        />
      ))}
    </>
  );
};

export default ArticleSection;
