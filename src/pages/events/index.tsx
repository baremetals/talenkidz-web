import React, { SetStateAction, useState, useEffect } from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
  EventEntity,
  EventsDocument,
  EventsQueryResult,
  CategoriesQueryResult,
  CategoriesDocument,
  CategoryEntity,
} from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";
import Events from "components/Events";

import NavBar from "components/NavBar";
import EventCard from "components/Events/EventCard";
import Search from "components/FilterInputs/Search";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

type pageProps = {
  eve: { events: { data: EventEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

const EventsPage = (props: pageProps) => {
  const { cats, eve } = props;
  const [Category, setCategory] = useState("");
  const [FilteredEvents, setFilteredEvents] = useState([]);
  const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredEvents(
      eve?.events?.data.filter((event) =>
        event?.attributes?.title
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) as SetStateAction<never[]>
    );
  };
  useEffect(
    () => setFilteredEvents(eve?.events?.data as SetStateAction<never[]>),
    [eve]
  );
  useNoAuthPages();
  return (
    <>
      <Head>
        <title>Talentkids | Events</title>
        <meta property="og:title" content="Talentkids | Events" key="title" />
        <meta name="description" content="Events" />
        <meta property="og:url" content="https://talentkids.io/events" />
        <meta property="og:type" content="events" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href="https://talentkids.io/events" />
      </Head>{" "}
      <NavBar />
      <div className="relative  w-full h-[400px]   py-8 ">
        <img
          src="/inner-banner.jpg"
          className="absolute w-full h-full inset-0"
        />
        <div className="relative w-full h-full grid place-items-center  z-40">
          <div className="text-center space-y-2">
            <h1 className="font-bold text-5xl">Latest Events</h1>
            <p className="font-semibold text-lg">Home / Events</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pb-16  lg:grid-cols-6 max-w-[1330px] ">
        <div className="order-last lg:order-1  lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-2 px-4 mt-16">
          {FilteredEvents?.map((event: any, i: number) => (
            <a
              href={`/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`}
              className={`${
                FilteredEvents.length % 2 != 0 && i == FilteredEvents.length - 1
                  ? "col-span-full"
                  : ""
              }`}
              key={i}
            >
              <EventCard
                i={i}
                src={event?.attributes?.listImage || "/default-list-img.jpg"}
                host={event?.attributes?.host?.data?.attributes?.name}
                date={`${dayjs(event?.attributes?.startDate).format(
                  "DD MMMM YYYY"
                )} - ${dayjs(event?.attributes?.endDate).format(
                  "DD MMMM YYYY"
                )}`}
                title={event?.attributes?.title}
                description={event?.attributes?.description}
              />
            </a>
          ))}
        </div>
        <div className="order-1 lg:order-last py-6 rounded-lg  xl:col-span-2 md:order-last lg:mt-9 px-3 cursor-pointer space-y-9 flex flex-col flex-1">
          {/* Take this into a component */}
          <div className="w-full bg-[#FFC000]  py-8 px-5 rounded-xl  max-h-[250px]">
            <div className="relative">
              <img
                src="/search.svg"
                className="w-6 h-6 absolute left-1 top-2"
              />
              <input
                placeholder="Search"
                className="pl-8 py-3 rounded-lg text-md placeholder-black "
                onChange={(e) => Search(e)}
              />
            </div>
          </div>
          {/* Take this into a component */}
          <div className="cursor-pointer">
            <div className="p-4  rounded-t-xl bg-[#1AB9FF] border-t-1 border-gray-500 ">
              <p className="font-semibold text-white text-center text-xl rounded-t-lg">
                Categories
              </p>
            </div>
            <div className="border border-b rounded-b-xl border-gray-400 space-y-2 py-7">
              {cats?.data?.categories?.data?.map((category: any, i) => (
                <div key={i} className="flex ml-3 items-center space-x-4">
                  <Image src="/checkbox.svg" width={15} height={15} />
                  <a
                    href={`/articles/${category?.attributes?.slug}`}
                    className="capitalize"
                  >
                    {category?.attributes?.slug}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Events events={eve?.events?.data} categories={cats?.data?.categories?.data} /> */}
    </>
  );
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const { data } = await client.query<EventsQueryResult>({
    query: EventsDocument,
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
    props: { eve: data, cats }, // will be passed to the page component as props
  };
}

export default EventsPage;
