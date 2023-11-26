"use client";
import { useState } from "react";
import CountingAnimation from "@/app/components/levelsystem/CountingAnimation";
import { useUserData } from "@/app/hooks/useUserData";
import {
  FaCoins,
  FaHome,
  FaScrewdriver,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { calculateLevel } from "@/app/components/levelsystem/CalculateLevel";
import Link from "next/link";

export const LevelAnimation = () => {
  const { userData } = useUserData();
  const { pointsNeeded } = calculateLevel(
    userData.accountLevel,
    userData.accountExperience,
    6
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <>
      {isMenuOpen === false && (
        <div
          className={`fixed bottom-10 right-3 w-[90%] mx-auto h-1/5 flex items-center justify-center z-[53]
          
        `}
        >
          <div className="relative h-full">
            <div className="absolute -left-[100%] -translate-x-[99%] flex flex-col gap-y-2 items-center justify-center h-full text-white font-sans z-0">
              <div
                className={`bg-gradient-to-r from-rose-500 to-purple-700 rounded-l-md w-full flex justify-start items-center px-3 py-2 cursor-pointer 
              ${active === 0 && "from-rose-700 to-purple-700"}`}
              >
                <FaUser className="w-5 h-5 mr-1 lg:block" />{" "}
                <span className="hidden lg:block w-max"> Your Account</span>
              </div>
              <Link
                href="/generator"
                className={`bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 rounded-l-md w-full flex justify-start items-center px-3 py-2 cursor-pointer 
                ${active === 1 && "from-rose-700 to-purple-700"}`}
              >
                <FaTools className="w-5 h-5 mr-1 lg:block" />{" "}
                <span className="hidden lg:block w-max">Tools</span>
              </Link>
              <div
                className={`bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 rounded-l-md w-full flex justify-start items-center px-3 py-2 cursor-pointer 
                ${active === 2 && "from-rose-700 to-purple-700"}`}
              >
                <FaCoins className="w-5 h-5 mr-1 lg:block" />{" "}
                <span className="hidden lg:block w-max"> Get coins </span>
              </div>
            </div>
          </div>
          <div className="w-4/5 sm:w-3/4 lg:w-1/3 bg-gradient-to-tr from-rose-500 to-purple-800 rounded-md p-6 text-white font-sans drop-shadow-md shadow-black">
            <span className="pb-4 flex flex-row items-center">
              <FaUser /> <span className="ml-2">{userData.email}</span>
            </span>
            <div className="w-full pb-3 flex flex-row justify-between">
              <span className="italic">Lv. {userData.accountLevel}</span>
              <span className="italic">Lv. {userData.accountLevel + 1}</span>
            </div>
            <CountingAnimation
              start={0}
              end={(userData.accountExperience / pointsNeeded) * 100}
              duration={2000}
            />
          </div>
        </div>
      )}
    </>
  );
};
