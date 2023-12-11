"use client";
import { FaArrowRight } from "react-icons/fa";
import { Latest } from "./Latest";
import Link from "next/link";
import { Popular } from "./Popular";
import { DocumentData } from "firebase/firestore/lite";
import { GiLightBackpack } from "react-icons/gi";
import InfoHover from "@/app/components/infohover";
import * as Scroll from "react-scroll";
import { useUserData } from "@/common/hooks/useUserData";

export const BackpackModal = ({
  images,
  dictionary,
  lang,
}: {
  images: DocumentData;
  dictionary: any;
  lang: any;
}) => {
  const { userData } = useUserData();
  let Element = Scroll.Element;

  return (
    <>
      <div className="relative w-full flex flex-row items-center justify-between bg-purple-900 rounded-xl text-gray-100 p-5">
        <div className=" relative">
          <Element className="absolute -top-36" name="tutorialStep01"></Element>
          {userData.tutorialStep === 1 && (
            <InfoHover
              description={dictionary.backpack_tutorial}
              side="L"
              title={dictionary.image_storage}
              destination="tutorialStep02"
            />
          )}
          <Link
            href={`${
              !images.length
                ? "/dashboard/backpack/empty"
                : "/dashboard/backpack"
            }`}
            className="group text-2xl sm:text-3xl flex flex-row items-center w-full relative h-max"
          >
            <div className="flex flex-row items-center">
              <GiLightBackpack
                className={`w-8 h-8 text-gray-50 ${
                  userData.tutorialStep === 1 && "z-50"
                }`}
              />
              <span
                className={`font-bold not-italic mt-1 ${
                  userData.tutorialStep === 1 && "z-50"
                }`}
              >
                {dictionary.backpack}
              </span>
              <FaArrowRight className="scale-150 w-4 h-4 ml-2 mt-1 group-hover:translate-x-1 ease-in duration-75" />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-2 flex flex-col bg-purple-900 rounded-xl text-gray-100 p-5">
        {!images.length ? (
          <div className="text-2xl text-gray-400 mt-1 mb-4 min-h-[30vh] flex items-center justify-center text-center flex-col">
            {dictionary.empty_backpack}
            <Link
              href="/dashboard/backpack/empty/"
              className="p-3 text-center bg-green-500 text-white mt-6 rounded-xl w-max mx-auto"
            >
              {dictionary.generate_first_image}
            </Link>
          </div>
        ) : (
          <div className="grid grid-rows sm:grid-cols-2 gap-x-3">
            <Latest images={images} dictionary={dictionary} lang={lang} />
            <Popular images={images} dictionary={dictionary} lang={lang} />
          </div>
        )}
      </div>
    </>
  );
};
