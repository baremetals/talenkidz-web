import axios from 'axios';
import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const siteUrl: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios({
    method: 'GET',
    url: `${baseUrl}/events?populate[0]=category`,
    headers: {
      Accept: 'application/json',
    },
  });
  const events = response.data.data;
  const fields: ISitemapField[] = events.map(
    (item: { attributes: { slug: string; updatedAt: string; category: { data: {attributes: { slug: string}}} } }) => ({
      loc: `${siteUrl}/events/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`,
      lastmodified: item?.attributes?.updatedAt,
    })
  );
  return getServerSideSitemap(ctx, fields);
};

export default function EventSiteMap() {}
