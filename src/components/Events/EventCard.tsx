import React from "react";
import Image from "next/image";
type pageProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  host: string;
  date: string;
};

export default function EventCard({
  i,
  title,
  description,
  src,
  host,
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

        <p className="text-sm text-gray-600 line-clamp-6 ">
          Date : {host} | {date}
        </p>
      </div>
    </div>
  );
}
