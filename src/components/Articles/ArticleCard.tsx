import React from "react";
import Image from "next/image";
type pageProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  author: string;
  date: string;
};

export default function ArticleCard({
  i,
  title,
  description,
  src,
  author,
  date,
}: pageProps) {
  return (
    <div
      className={`relative w-full rounded-lg overflow-hidden ${
        i == 2 ? "col-span-full" : ""
      }`}
    >
      <img src={src} className="max-h-[450px] w-full" />
      <div className="space-y-4 mt-4">
        <h1 className={`font-bold text-3xl ${i == 1 ? "text-pink-700" : ""}`}>
          {title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-6">{description}</p>
        <div className="flex justify-between pr-6">
          <p className="text-sm text-gray-600 line-clamp-6 ">
            By {author} | {date}
          </p>
          <img
            src="thumb.svg"
            className="w-5 h-5 hover:scale-110 transition duration-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
