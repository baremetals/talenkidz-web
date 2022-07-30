import React, { useState } from "react";
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

type pageProps = {
  eve: { events: { data: EventEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

const EventsPage = (props: pageProps) => {
  const { cats, eve } = props;
  const [Category, setCategory] = useState("");

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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-6 max-w-[1600px] py-16 px-6 ">
        <div className="order-last md:order-1  lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-5 mt-16">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <EventCard
                key={i}
                i={i}
                src="./blog-post01.jpg"
                host="Pepsi Ltd"
                date="14 april 2022"
                title="title sample"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eius odit nobis, blanditiis ea fugiat accusantium. Voluptate repellendus sequi labore provident molestiae, alias distinctio minus ratione inventore sit maiores numquam sapiente vel nesciunt cum praesentium debitis iste suscipit consectetur non, quam veniam error delectus! Ducimus voluptates unde excepturi! Voluptate, quibusdam?"
              />
            ))}
        </div>
        <Search setCategory={setCategory} />
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
