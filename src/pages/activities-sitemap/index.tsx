import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const siteUrl: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios({
    method: 'GET',
    url: `${baseUrl}/listings?populate[0]=category`,
    headers: {
      Accept: 'application/json',
    },
  });
  const activities = response.data.data;
  const fields: ISitemapField[] = activities.map(
    (item: {
      attributes: {
        slug: string;
        updatedAt: string;
        category: { data: { attributes: { slug: string } } };
      };
    }) => ({
      loc: `${siteUrl}/activities/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`,
      lastmodified: item?.attributes?.updatedAt,
    })
  );

  return getServerSideSitemap(ctx, fields);
};

export default function ActivietieSiteMap() {}
