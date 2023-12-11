"use client";
import Link from "next/link";
import { FaArrowLeft, FaTools } from "react-icons/fa";
import BackpackImageThumbnail from "./components/ImageThumbnail";
import { ImageProps } from "@/types";
import { redirect } from "next/navigation";
import moment from "moment";
import React from "react";
import { Locale } from "@/common/i18n/i18n-config";
import { useUserData } from "@/common/hooks/useUserData";

export default function Backpack({ lang }: { lang: Locale }) {
  const { images, loadingImages } = useUserData();

  if (!images.length && !loadingImages) {
    redirect("/backpack/empty");
  }
  const [preparedData, setPreparedData] = React.useState<any>([]);
  React.useEffect(() => {
    setPreparedData([
      {
        today: images.filter((image: ImageProps) =>
          moment(image?.creationTime).isSame(moment(), "day")
        ),
        yesterday: images.filter((image: ImageProps) =>
          moment(image?.creationTime).isSame(moment().subtract(1, "day"), "day")
        ),
        older: images.filter((image: ImageProps) =>
          moment(image?.creationTime).isBefore(
            moment().subtract(1, "day"),
            "day"
          )
        ),
      },
    ]);
  }, [images]);

  return (
    <div className="w-[90vw] sm:w-3/4 mx-auto font-sans">
      <Link
        href="/dashboard"
        className="pt-[24px] sm:pt-[4vw] hover:underline text-white flex flex-row items-center text-2xl z-50 w-max"
      >
        <FaArrowLeft />
        <span className="ml-1">Dashboard</span>
      </Link>
      <div className="mx-auto pt-12">
        <div className="text-gray-50 text-4xl flex flex-row w-full">
          <div className="ml-2">
            <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
            <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
          </div>
          <div className="w-full ml-3 italic flex flex-col sm:flex-row sm:justify-between text-2xl lg:text-4xl">
            <span>Backpack</span>{" "}
          </div>
          <Link
            href="/dashboard/generator/"
            className="w-max bg-gradient-to-br from-rose-500  to-purple-900 hover:from-rose-400 hover:to-purple-800 duration-75 ease-in  items-center justify-center drop-shadow-sm shadow-black  text-center px-3 text-gray-50 hover:transition-transform sm:w-max text-lg sm:text-2xl rounded-lg flex flex-row py-1"
          >
            <FaTools className="mr-1" />{" "}
            <span className="w-max">Render tools</span>
          </Link>
        </div>
        {/* <Info
          destination="privacy"
          buttonText="Change it here"
          text="In order to share your images, you have to switch your profile
              settings to public."
        /> */}
      </div>

      <div className="mt-12">
        {images.length > 0 && (
          <>
            {preparedData?.map((timestamp: any, idx: number) => (
              <>
                {timestamp.today.length > 0 && (
                  <>
                    <span className="text-3xl font-light text-purple-100">
                      Today
                    </span>
                    <div
                      key={idx}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-6"
                    >
                      {timestamp.today.map((image: ImageProps, idx: number) => (
                        <BackpackImageThumbnail key={idx} src={image?.src} />
                      ))}
                    </div>
                  </>
                )}

                <>
                  {timestamp.yesterday.length > 0 && (
                    <>
                      <span className="text-3xl font-light text-purple-200">
                        Yesterday
                      </span>
                      <div
                        key={idx}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-6"
                      >
                        {timestamp.yesterday.map(
                          (image: ImageProps, idx: number) => (
                            <BackpackImageThumbnail
                              key={idx}
                              src={image?.src}
                            />
                          )
                        )}
                      </div>
                    </>
                  )}
                </>
                <>
                  {timestamp.older.length > 0 && (
                    <>
                      <span className="text-3xl font-light text-purple-200">
                        {timestamp.older.length &&
                        (timestamp.yesterday.length || timestamp.today.length)
                          ? "Older"
                          : "Older than two days"}
                      </span>
                      <div
                        key={idx}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-6"
                      >
                        {timestamp.older.map(
                          (image: ImageProps, idx: number) => (
                            <BackpackImageThumbnail
                              key={idx}
                              src={image?.src}
                            />
                          )
                        )}
                      </div>
                    </>
                  )}
                </>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
