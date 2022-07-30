import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import { useNoAuthPages } from "lib/noAuth";
import {
  ListingEntity,
  ListingsDocument,
  ListingsQueryResult,
  CategoriesQueryResult,
  CategoriesDocument,
  CategoryEntity,
} from "generated/graphql";
import Listings from "components/Listings";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

import ActivityCard from "components/Activities/ActivityCard";

type pageProps = {
  lists: { listings: { data: ListingEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function ListingsPage(props: pageProps) {
  const { cats, lists } = props;
  // console.log(lists)
  useNoAuthPages();
  return (
    <>
      <Head>
        <title>Talentkids | Activities</title>
        <meta
          property="og:title"
          content="Talentkids | Activities"
          key="title"
        />
        <meta name="description" content="Activities" />
        <meta property="og:url" content="https://talentkids.io/activities" />
        <meta property="og:type" content="activities" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href="https://talentkids.io/activities" />
      </Head>
      <NavBar />
      <div className="relative  w-full h-[400px]   py-8 ">
        <img
          src="/inner-banner.jpg"
          className="absolute w-full h-full inset-0"
        />
        <div className="relative w-full h-full grid place-items-center  z-40">
          <div className="text-center space-y-2">
            <h1 className="font-bold text-5xl">Latest Activities</h1>
            <p className="font-semibold text-lg">Home / Activities</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-4 max-w-[1600px] py-16 px-6 ">
        <div className="order-last md:order-1  lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-5 mt-16">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <ActivityCard
                key={i}
                i={i}
                title="title sample"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eius odit nobis, blanditiis ea fugiat accusantium. Voluptate repellendus sequi labore provident molestiae, alias distinctio minus ratione inventore sit maiores numquam sapiente vel nesciunt cum praesentium debitis iste suscipit consectetur non, quam veniam error delectus! Ducimus voluptates unde excepturi! Voluptate, quibusdam?"
              />
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
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex ml-3 items-center space-x-4">
                    <input
                      type="checkbox"
                      className="checked:bg-blue-400 ml-3 p-2 w-5 h-5"
                    />
                    <p className=" text-md">category {i} </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Listings listings={lists?.listings?.data} categories={cats?.data?.categories?.data} /> */}

      <Footer />
    </>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const { data } = await client.query<ListingsQueryResult>({
    query: ListingsDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "createdAt:desc",
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
    props: { lists: data, cats },
  };
}

export default ListingsPage;
