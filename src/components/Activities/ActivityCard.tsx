import React from "react";

type pageProps = {
  i: number;
  title: string;
  description: string;
};
export default function ActivityCard({ i, title, description }: pageProps) {
  return (
    <div className="grid relative grid-cols-1 place-items-center rounded-lg h-full p-14 space-y-4 border border-gray-400 ">
      <div className="absolute flex items-center space-x-2 -top-7 bg-white">
        <img src="/toggle.svg" className="w-10 h-14" />
        <p className="font-semibold">Logo</p>
      </div>

      <h1 className={`font-bold text-xl ${i == 1 ? "text-pink-700" : ""}`}>
        {title}
      </h1>
      <p className="text-center line-clamp-6">{description}</p>
    </div>
  );
}
