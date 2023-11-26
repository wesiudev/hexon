import { FaCog, FaImage, FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiLightBackpack } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900 font-sans italic text-lg">
      <div className="mx-auto w-[90vw] pt-12">
        <div className="text-gray-50 text-4xl flex flex-row w-full">
          <div className="ml-2">
            <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
            <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="ml-3">Dashboard</div>
            <div className="sm:hidden flex flex-row items-center text-2xl">
              <FaSignOutAlt className="mt-1 mr-1" /> Sign out
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] mt-12">
        <div className="w-full bg-purple-800 min-h-[40vh] p-6">
          <div className="flex flex-row items-center ">
            <FaUser className="h-8 w-8 mr-2 text-gray-50" />{" "}
            <div className="h-[25px] w-[350px] bg-purple-900"></div>
          </div>
          <div className="border-t-2 border-purple-600 mt-4 mb-2" />
        </div>
        <div className="grid grid-rows gap-y-6 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-1 sm:gap-6 w-full mt-6">
          <div className="bg-purple-800 w-full min-h-[40vh] p-6">
            <div className="flex flex-row items-center ">
              <SlBadge className="w-8 h-8 mr-2 text-gray-50" />
              <div className="h-[25px] w-3/4 bg-purple-900"></div>
            </div>
            <div className="border-t-2 border-purple-600 mt-4 mb-2" />
          </div>
          <div className="bg-purple-800 w-full min-h-[40vh] p-6">
            <div className="flex flex-row items-center ">
              <GiLightBackpack className="w-8 h-8 mr-2 text-gray-50" />
              <div className="h-[25px] w-3/4 bg-purple-900"></div>
            </div>
            <div className="border-t-2 border-purple-600 mt-4 mb-2" />
          </div>
          <div className="bg-purple-800 w-full min-h-[40vh] p-6">
            <div className="flex flex-row items-center ">
              <FaImage className="w-8 h-8 mr-2 text-gray-50" />
              <div className="h-[25px] w-3/4 bg-purple-900"></div>
            </div>
            <div className="border-t-2 border-purple-600 mt-4 mb-2" />
          </div>
          <div className="bg-purple-800 w-full min-h-[40vh] p-6">
            <div className="flex flex-row items-center ">
              <FaCog className="w-8 h-8 mr-2 text-gray-50" />
              <div className="h-[25px] w-3/4 bg-purple-900"></div>
            </div>
            <div className="border-t-2 border-purple-600 mt-4 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
