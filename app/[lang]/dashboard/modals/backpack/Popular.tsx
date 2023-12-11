"use client";
import capitalizeString from "@/common/utils/CapitalizeString";
import { ImageProps } from "@/types";
import { DocumentData } from "firebase/firestore/lite";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaComment, FaHeart, FaRocket } from "react-icons/fa";

export const Popular = ({
  images,
  dictionary,
  lang,
}: {
  images: any;
  dictionary: any;
  lang: any;
}) => {
  const cloneImages = [...images];
  const sortedByPopularity = cloneImages
    ?.filter((image: ImageProps) => image.likes !== 0 || image.comments.length)
    .sort((a, b) => b.likes - a.likes);

  return (
    <>
      <div className="flex flex-col sm:pr-3 overflow-x-hidden mt-2 sm:mt-0">
        <div className="flex flex-row items-center text-xl mb-2">
          <FaRocket className="text-blue-600" />{" "}
          <span className="ml-1 not-italic font-light">
            {dictionary.popular}
          </span>
        </div>
        {sortedByPopularity.length ? (
          <div className="bg-purple-800 p-2 rounded-md">
            {sortedByPopularity?.map((image, idx) => (
              <div
                key={idx}
                className={`${
                  idx > 3 && "hidden"
                } flex hover:bg-purple-600 w-full cursor-pointer mt-1 group truncate rounded-md`}
              >
                <div className={`flex items-start min-h-[60px] min-w-[60px]`}>
                  <Image
                    width={60}
                    height={60}
                    alt=""
                    src={image.src}
                    className="w-max h-max z-20 rounded-md"
                  />
                </div>
                <div className="h-max flex flex-col justify-between">
                  <div className="px-2 hover:-animate-translate-x-100 flex flex-row">
                    {idx === 0 && (
                      <div className="w-max">
                        <FaAward className="w-4 h-4 mr-px mt-1 text-yellow-400" />
                      </div>
                    )}
                    <span className="w-3/4 ">
                      {capitalizeString(image.prompt)}
                    </span>
                  </div>
                  <div className="flex flex-row w-full mt-2 ml-2">
                    <span className="flex flex-row items-center">
                      <FaHeart className="mr-1" />
                      {image.likes}
                    </span>
                    <span className="flex flex-row items-center ml-2">
                      <FaComment className="mr-1" /> {image.comments?.length}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-purple-800 w-full h-max flex items-center justify-center p-3 sm:p-3 lg:p-3 text-sm ">
            <div className="flex flex-col lg:flex-row w-full items-center">
              <div className="w-full lg:w-3/4 text-lg sm:text-sm flex items-center">
                {dictionary.gain_popularity}
              </div>
              <Link
                href={`/community`}
                className="mt-2 py-2 lg:py-1 lg:mt-0 lg:ml-3 w-full lg:w-max text-center rounded-xl bg-gradient-to-tr from-purple-900 via-rose-500  to-purple-900 hover:from-purple-800 hover:via-rose-500 hover:to-purple-800 duration-75 ease-in px-3 shadow-sm shadow-purple-950 h-full"
              >
                <span className="mr-1 px-3 sm:py-2 flex items-center justify-center font-bold not-italic">
                  {dictionary.community}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
