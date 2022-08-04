import React, { SetStateAction, useEffect, useState } from "react";
import Head from "next/head";
import Articles from "components/Articles";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
  ArticleEntity,
  ArticlesDocument,
  ArticlesQueryResult,
  CategoriesQueryResult,
  CategoriesDocument,
  CategoryEntity,
} from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";

import NavBar from "components/NavBar";
import ArticleCard from "components/Articles/ArticleCard";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
type pageProps = {
  art: { articles: { data: ArticleEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function ArticlesPage(props: pageProps) {
  const { cats, art } = props;
  // console.log(cats?.data?.categories?.data);
  useNoAuthPages();
  const [FilteredArticles, setFilteredArticles] = useState([]);
  const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredArticles(
      art?.articles?.data.filter((article) =>
        article?.attributes?.title
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) as SetStateAction<never[]>
    );
  };
  useEffect(() => {
    setFilteredArticles((art?.articles?.data as SetStateAction<never[]>) || []);
  }, [art]);
  return (
    <>
      <Head>
        <title>Talentkids | Articles</title>
        <meta property="og:title" content="Talentkids | Articles" key="title" />
        <meta name="description" content="Articles" />
        <meta property="og:url" content="https://talentkids.io/articles" />
        <meta property="og:type" content="articles" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href="https://talentkids.io/articles" />
      </Head>
      <NavBar />
      <div className="relative  w-full h-[400px]   py-8 ">
        <img
          src="/inner-banner.jpg"
          className="absolute w-full h-full inset-0"
        />
        <div className="relative w-full h-full grid place-items-center  z-40">
          <div className="text-center space-y-2">
            <h1 className="font-bold text-5xl">Latest Articles</h1>
            <p className="font-semibold text-lg">Home / Articles</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-6 max-w-[1600px] py-16 px-6 ">
        <div className="order-last md:order-1  lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-5 mt-16">
          {FilteredArticles?.map((article: any, i) => (
            <Link
              key={i}
              href={`/articles/${article?.attributes?.category?.data?.attributes?.slug}/${article?.attributes?.slug}`}
              passHref
            >
              <ArticleCard
                i={i}
                src={article?.attributes?.heroImage?.data?.attributes?.url}
                author={article?.attributes?.author?.data?.attributes?.fullName}
                date={dayjs(article?.attributes?.updatedAt).format(
                  "DD MMMM YYYY"
                )}
                title={article?.attributes?.title}
                description={article?.attributes?.blurb}
              />
            </Link>
          ))}
        </div>
        <div className="p-6 rounded-lg space-y-4 md:order-last">
          {/* Take this into a component */}
          <div className="w-full bg-yellow-400  py-6 px-3 rounded-xl  max-h-[250px]">
            <div className="relative">
              <img
                src="/search.svg"
                className="w-6 h-6 absolute left-1 top-2"
              />
              <input
                placeholder="Search"
                className="pl-8 py-2 rounded-lg text-md placeholder-black "
                onChange={(e) => Search(e)}
              />
            </div>
          </div>
          {/* Take this into a component */}
          <div className="">
            <div className="p-4  rounded-t-xl bg-blue-500 border-t-1 border-gray-500 ">
              <p className="font-semibold text-white text-center text-xl rounded-t-lg">
                Categories
              </p>
            </div>
            <div className="border-b border-l border-r border-gray-400 space-y-2 py-7">
              {cats?.data?.categories?.data?.map((category: any, i) => (
                <div key={i} className="flex ml-3 items-center space-x-4">
                  <Image src="/checkbox.svg" width={15} height={15} />
                  <Link href={`/articles/${category?.attributes?.slug}`}>
                    {category?.attributes?.slug}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const { data } = await client.query<ArticlesQueryResult>({
    query: ArticlesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });

  const cats = await client.query<CategoriesQueryResult>({
    query: CategoriesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "slug:asc",
    },
  });

  return {
    props: { art: data, cats }, // will be passed to the page component as props
  };
}

export default ArticlesPage;
