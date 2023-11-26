import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

type InterfaceBlock = {
  title: string;
  Icon: IconType;
  description: string;
  destination: string;
};

export default function InterfaceBlock({
  title,
  Icon,
  description,
  destination,
}: InterfaceBlock) {
  return (
    <Link
      href={`/generator/${destination}`}
      className="group aspect-square bg-purple-800 cursor-pointer rounded-lg shadow-sm shadow-black"
    >
      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
        <Icon className="w-28 h-28 text-gray-100 absolute sm:w-20 sm:h-20 left-3 top-3 lg:left-3 lg:top-3 opacity-30" />
        <span className="text-gray-100 text-2xl sm:text-xl text-center px-3">
          {title}
        </span>
        <span className="bg-black h-max w-full bg-opacity-70 text-white text-sm lg:text-lg p-2 sm:p-3 absolute bottom-0 rounded-b-lg group-hover:translate-y-[0%] sm:translate-y-[100%]">
          {description}
        </span>
      </div>
    </Link>
  );
}
