import React from "react";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { Organisation } from "generated/graphql";

import NavBar from "components/NavBar";
import {
  Row,
  Column,
  Text,
  InnerContainer,
  Title,
  Widget,
  WidgetTitle,
  WidgetBody,
} from "styles/common.styles";
import Button from "components/Auth/Button";

import {
  Dashboard,
  ProfileCoverImage,
  UserProfileImage,
  ProfileInfo,
  UserName,
  UserDescription,
  ProfileButtons,
  SendButton,
  ActiveUsers,
  Image,
  ProfileContent,
} from "../ProfilePage/profile.styles";
import { NavCard } from "./NavCard";
import { Card } from "./Card";

import { BookMarkBorder } from "../../../public/assets/icons/BookMarkBorder";
import { BriefcaseBorder } from "../../../public/assets/icons/BriefcaseBorder";
import { Send } from "../../../public/assets/icons/Send";
import MusicCard from "components/ProfilePage/MusicCard";
import CardStats from "components/ProfilePage/CardStats";

const Organisations = (props: { props: Organisation }) => {
  const { user: user } = useAppSelector(isUser);

  console.log(props);

  const { logo, name, slug, createdAt } = props?.props;
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 pb-10">
        <div className="xl:container xl:mx-auto min-h-[500px] w-full relative">
          <img
            src="/lights.jpg"
            className="absolute z-10 inset-0 h-[500px]  w-full"
          />
          <div className="absolute z-10 inset-x-0 bg-gradient-to-t from-black  to-transparent bottom-0 h-[200px]"></div>
          <div className="absolute z-20 flex space-x-5 -bottom-4  sm:-bottom-[80px] left-0  px-4 ">
            <div className=" rounded-full col-span-1 p-5 z-20  bg-gradient-to-t  from-black via-gray-900 to-transparent   ">
              {/* TODO: get profile pic src make this part more responsive > */}
              <img
                src="/profilepic.jpg"
                className="z-20 rounded-full  w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]  border-4 p-1 border-[#8df1e6]"
              />
            </div>

            <div className="flex flex-col pt-9 ">
              <div className="flex items-center  space-x-5 ">
                <p className="text-gray-300 font-semibold text-lg">
                  Karmen Pedaru
                </p>
                <div className="relative cursor-pointer group">
                  <div className="p-2 hidden absolute z-40 group-hover:block -left-11 -top-10 text-white bg-black  text-sm rounded-lg ">
                    {" "}
                    Achievements
                  </div>
                  <img src="/profile.svg" className="w-6 h-6" />
                </div>
                <img src="/flag.svg" className="w-6 h-6" />
              </div>

              <div className="flex items-center pl-2 space-x-5 mt-3 ">
                <div className="flex space-x-1 items-center  space-x-4 text-gray-300">
                  <div className="flex items-center">
                    <img src="/tie.svg" className="w-6 h-6" />
                    <p className="text-sm font-semibold cursor-pointer">
                      Singer and Musician
                    </p>
                  </div>

                  <p className="text-sm font-semibold cursor-pointer">
                    Country
                  </p>
                  <a
                    href="#"
                    className="text-sm font-semibold underline cursor-pointer"
                  >
                    website.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          7
        </div>
        <div className="relative xl:container xl:pl-[300px] lg:mx-auto items-center  px-7  grid grid-cols-1 md:flex justify-between w-full pt-24 xl:pt-8 bg-white">
          <div className="flex space-x-16">
            <span className="flex flex-col items-center">
              <p className="text-gray-400 font-mono uppercase">Age</p>
              <p className="font-bold ">24</p>
            </span>

            <span className="flex flex-col items-center">
              <p className="text-gray-400 font-mono  uppercase">Member since</p>
              <p className="font-bold ">Nov 24,2019</p>
            </span>

            <span className="flex flex-col items-center">
              <p className="text-gray-400 font-mono uppercase">weeks score</p>
              <p className="font-bold ">6785</p>
            </span>

            <span className="flex flex-col ">
              <div className="text-gray-400 font-mono uppercase">exp level</div>
              <div className="flex items-center space-x-3 font-bold">
                <p>36</p>
                <div className="flex">
                  {Array(Math.floor(4.6))
                    .fill(null)
                    .map((_, index) => (
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        key={index}
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="#32CA42"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />{" "}
                      </svg>
                    ))}
                </div>
              </div>
            </span>
          </div>

          <div className="bg-green-500 flex space-x-2 py-2 max-w-[200px] mt-5 lg:mt-0 justify-center cursor-pointer px-4 text-white rounded-md font-mono mb-3">
            <img src="/upload.svg" />
            <p>Add Friend</p>
          </div>
        </div>
        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-1  sm:grid-cols-5 gap-4 px-4 mb-9">
            <div className="space-y-10">
              <div className="bg-white rounded-lg shadow-xl p-8 space-y-2 ">
                <h1 className="font-semibold text-2xl">Bio</h1>

                <p className="uppercase font-mono text-lg text-gray-500">
                  Test User
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className=" sm:col-span-4 lg:col-span-3   rounded-lg ">
              <div className="bg-white flex justify-evenly items-center  rounded-lg pt-14 pb-4  ">
                <div className="flex items-center space-x-2 font-semibold cursor-pointer ">
                  <img src="/Activity.svg" className="mt-3 w-9 h-9" />
                  <p>Activity</p>
                </div>

                <div className="flex space-x-2 items-center font-semibold cursor-pointer">
                  <img src="/camera.svg" className="mt-3 w-9 h-9" />
                  <p>Event</p>
                </div>
                <div className="flex space-x-2 items-center font-semibold cursor-pointer">
                  <img src="/messages.svg" className=" w-7 h-7" />
                  <p>About</p>
                </div>

                <button className="bg-pink-500 px-7 py-2 text-white font-semibold">
                  Create
                </button>
              </div>
            </div>

            {/* right Section */}
            <div className="space-y-10"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 px-4">
            {/* left Section */}
            <div className="space-y-10">
              <div className="bg-white rounded-lg p-4 space-y-10 py-9">
                <h1 className="font-semibold text-2xl">Collection</h1>
                <div className="space-y-2">
                  <p className="uppercase font-mono text-lg text-gray-500">
                    top genres
                  </p>

                  {/* TODO: Replace these tags with ones from the server */}

                  <div className="grid grid-cols-3 gap-x-4 gap-y-1 px-2 font-semibold w-full">
                    <p className="bg-gray-200  p-1 text-gray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="uppercase font-mono text-lg text-gray-500">
                    top artists
                  </p>

                  {/* TODO: Replace these tags with ones from the server */}

                  <div className="grid grid-cols-3 gap-x-4 gap-y-1 px-2 font-semibold">
                    <p className="bg-gray-200  p-1 text-gray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                    <p className="bg-gray-200  p-1 textgray-600 rounded-md text-center">
                      Rock
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2  font-semibold text-gray-600">
                <p>FAQ &#183;</p>
                <p>Terms of use &#183;</p>
                <p>Contact Us</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="sm:col-span-3   rounded-lg space-y-9">
              {/* TODO: Loop on just one element */}

              {Array(3)
                .fill(null)
                .map((i) => (
                  <CardStats key={i} />
                ))}
            </div>

            {/* right Section */}
            <div className="space-y-10">
              <div className="bg-white rounded-lg p-4 space-y-10 py-9">
                <h1 className="font-semibold text-2xl ">Top Challenges</h1>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <MusicCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Organisations;
