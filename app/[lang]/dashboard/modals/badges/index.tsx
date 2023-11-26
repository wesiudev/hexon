import { SlBadge } from "react-icons/sl";

export default function Badges() {
  return (
    <div className="flex flex-col">
      <div className="w-full text-2xl lg:text-3xl text-gray-100">
        <div className="flex flex-row items-center justify-between w-full bg-purple-900 p-5 rounded-md">
          <div className="flex flex-row items-center not-italic font-bold">
            <SlBadge />
            <span className="ml-1">Badges</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col bg-purple-900 text-gray-100 p-5 rounded-md">
        <div className="flex-col text-center text-2xl text-gray-400 mt-1 mb-4 h-full flex items-center justify-center sm:px-5 min-h-[30vh]">
          Comming soon
        </div>
      </div>
    </div>
  );
}
