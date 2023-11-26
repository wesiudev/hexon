"use client";
import {
  FaArtstation,
  FaPeopleArrows,
  FaRegQuestionCircle,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import Faq from "../faq";
import { useState } from "react";

export default function Header({ dictionary }: { dictionary: any }) {
  const [isFaqOpen, setFaqOpen] = useState<boolean>(false);
  return (
    <header className="fixed left-0 top-6 w-full z-[1000] font-sans">
      <Faq
        faqs={dictionary.Faq}
        isFaqOpen={isFaqOpen}
        setFaqOpen={setFaqOpen}
        dictionary={dictionary}
      />
      <div className="w-[98vw] mx-auto flex flex-row justify-end px-6">
        <div className="flex flex-row items-center hover:scale-110 duration-200 cursor-pointer fixed bottom-[63px] w-max px-4 py-2 left-[50%] -translate-x-[50%] bg-gradient-to-br from-purple-600 to-rose-500 text-white rounded-t-xl text-xl font-bold">
          {dictionary.Header.generate_images}
        </div>
        <div className="fixed w-full h-16 bottom-0 left-0 flex flex-row items-center justify-evenly text-gray-100 bg-purple-800 ">
          {[
            {
              href: "blog",
              icon: <FaArtstation className="h-6 w-6 sm:mr-3" />,
              text: "BLOG",
            },
            {
              href: "community",
              icon: <FaPeopleArrows className="h-6 w-6 sm:mr-3" />,
              text: (
                <span className="text-green-500 animate-pulse">COMMUNITY</span>
              ),
            },
          ].map(({ href, icon, text }) => (
            <Link
              key={href}
              href={href}
              className="flex sm:flex-row flex-col items-center justify-center hover:bg-purple-700 w-full h-full sm:px-12"
            >
              {icon}
              <span>{text}</span>
            </Link>
          ))}
          <button
            onClick={() => setFaqOpen(true)}
            className="flex sm:flex-row flex-col items-center justify-center hover:bg-purple-700 w-full h-full sm:px-12"
          >
            <FaRegQuestionCircle className="h-6 w-6 sm:mr-3" />
            <span>FAQ</span>
          </button>
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center">
          <Link href="/auth">
            <div className="hover:scale-110 duration-200 ease-in-out flex flex-row items-center bg-gradient-to-br from-purple-600 to-rose-500 border-px rounded-lg px-3 py-2">
              <FaUser className="mr-2 h-5 w-5 text-gray-50" />
              <span className="text-gray-50 ">{dictionary.Header.sign_in}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
