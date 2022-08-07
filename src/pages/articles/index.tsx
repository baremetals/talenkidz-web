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
import Footer from "components/Footer";

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
      <div className="relative  w-full  py-[80px] ">
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

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pb-16  lg:grid-cols-6 max-w-[1330px] ">
        <div className="order-last lg:order-1  lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-2 px-4 mt-16">
          {FilteredArticles?.map((article: any, i) => (
            <a
              key={i}
              className={`${
                FilteredArticles.length % 2 != 0 &&
                i == FilteredArticles.length - 1
                  ? "col-span-full"
                  : ""
              }`}
              href={`/articles/${article?.attributes?.category?.data?.attributes?.slug}/${article?.attributes?.slug}`}
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
            </a>
          ))}
        </div>

        <div className="order-1 lg:order-last py-6 rounded-lg  xl:col-span-2 md:order-last lg:mt-9 px-3 cursor-pointer space-y-9 flex flex-col flex-1">
          {/* Take this into a component */}
          <div className="w-full bg-[#FFC000]  py-7 px-10 rounded-xl  max-h-[250px]">
            <div className="relative flex items-center overflow-hidden">
              <div className="hover:bg-gray-700 transition duration-500 absolute h-full rounded-2xl px-3 py-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                  className="w-7 h-7 "
                />
              </div>

              <input
                placeholder="Search"
                className="pl-[50px] py-[12px] rounded-xl text-lg placeholder-gray-500  text-gray-100  "
                onChange={(e) => Search(e)}
              />
            </div>
          </div>
          {/* Take this into a component */}
          <div className="">
            <div className="p-4  rounded-t-xl bg-[#1AB9FF] border-t-1 border-gray-500 ">
              <p className="font-semibold text-white  text-2xl rounded-t-lg pl-5">
                Categories
              </p>
            </div>
            <div className="border border-b rounded-b-xl border-gray-400 space-y-2 py-7">
              {cats?.data?.categories?.data?.map((category: any, i) => (
                <div
                  key={i}
                  className="flex ml-9 items-center space-y-1 space-x-2"
                >
                  <Image src="/checkbox.svg" width={23} height={23} />
                  <a
                    href={`/articles/${category?.attributes?.slug}`}
                    className="capitalize text-lg"
                  >
                    {category?.attributes?.slug}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
