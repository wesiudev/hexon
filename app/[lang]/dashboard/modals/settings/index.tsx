import { FaCog } from "react-icons/fa";

export const SettingsModal = () => {
  return (
    <div className="flex flex-col bg-purple-900 text-gray-100 p-5 rounded-md not-italic font-bold">
      <div className="text-2xl sm:text-3xl flex flex-row items-center">
        <FaCog className=" mr-1 mt-1" /> Settings
      </div>
      <div className="grid grid-cols-2 gap-3 text-center mt-6 rounded-md">
        <div className="text-gray-100 bg-purple-700 hover:bg-purple-800 p-3 cursor-pointer rounded-md">
          Email
        </div>
        <div className="text-gray-100 bg-purple-700 hover:bg-purple-800 p-3 cursor-pointer rounded-md">
          Password
        </div>
        <div className="text-gray-100 bg-purple-700 hover:bg-purple-800 p-3 cursor-pointer rounded-md">
          Privacy
        </div>
      </div>
      <div className="mt-20 h-full w-full flex items-end">
        <button className="w-full h-12 bg-red-500 hover:bg-red-600 flex items-center justify-center font-light rounded-md">
          Delete account
        </button>
      </div>
    </div>
  );
};
