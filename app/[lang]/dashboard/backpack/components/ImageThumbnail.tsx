"use client";
import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";

interface BackpackThumbnail {
  src: string;
}

export default function BackpackImageThumbnail(props: BackpackThumbnail) {
  const [isLoading, setIsLoading] = React.useState(true);
  const { src } = props;
  return (
    <div className="relative">
      <Image
        className={`rounded-md ${
          isLoading ? "bg-purple-800 animate-pulse" : ""
        }`}
        priority
        width={512}
        height={512}
        src={src}
        alt=""
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA"
        placeholder="blur"
        onLoad={() => setIsLoading(false)}
      />
      <div
        className={`rounded-md flex flex-col w-max h-max ${
          isLoading
            ? "absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-12 w-12 text-white"
            : "hidden"
        }`}
      >
        <FaImage
          className={`rounded-md absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-12 w-12 text-white`}
        />
        <span className="pt-16 text-purple-200">Loading...</span>
      </div>
    </div>
  );
}
