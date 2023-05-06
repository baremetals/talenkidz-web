import PremiumBanner from 'components/users/Account/PremiumBanner';
import { ArticleEntity, useFilteredArticlesLazyQuery } from 'generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';
import ArticleItemCard from '../../Account/ArticleItemCard';
import Editor from '../../Account/Editor';
import PostLimits from '../../Account/PostLimits';
import { useRouter } from 'next/router';

const ArticleSection = () => {
  const router = useRouter();
  const { user: user } = useAppSelector(isUser);
  const [entity, setEntities] = useState<ArticleEntity[]>([]);
  const pageOwner = router.query.username? router.query.username :user?.username;
  const [loadArticles, { data }] = useFilteredArticlesLazyQuery({
    variables: {
      filters: {
        creator: {
          username: {
            eq: pageOwner as string,
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

  console.log(user?.id);
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
      {user?.membership == 'basic' &&
      pageOwner == (user?.username as string) ? (
        <>
          {/* Account status notes */}
          <PostLimits limit={'unlimited'} />

          {/* Become a premium member */}
          <PremiumBanner />

          {/* Write a new article */}
          <Editor
            status={user?.membership == 'basic'? 'basic': 'article'}
            componentName={'ARTICLE_FORM_MODAL'}
          />
        </>
      ) : null}

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
            (item?.attributes?.creator?.data?.attributes?.username as string)
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
