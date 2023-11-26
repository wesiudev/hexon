import Header from "../components/header";
import { FaPhone } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="font-sans overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-purple-900 min-h-screen w-screen">
        <div className="opacity-80 absolute -left-[15%] -top-[15%] bg-purple-900 h-[60vh] w-[60vh] sm:h-[80vh] sm:w-[80vh] rounded-full"></div>
        <div className="flex flex-row w-screen lg:w-[96vw] mx-auto items-center">
          <div className="h-[70vh] w-full flex flex-col justify-evenly z-30 px-10">
            <div className="text-gray-50 text-3xl flex flex-row">
              <div className="rotate-12">
                <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rounded-sm" />
                <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
              </div>
              <span className="ml-3">Contact</span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-50 text-xl">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full lg:w-3/4 mt-3 rounded-md text-white p-2 outline-none bg-purple-700 focus:bg-purple-700 text-xl focus:bg-opacity-80 placeholder:text-gray-50 placeholder:text-opacity-90"
                placeholder="Enter your email here"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-50 text-xl">
                Message
              </label>
              <textarea
                id="message"
                className="w-full lg:w-3/4 mt-3 rounded-md text-white p-2 outline-none bg-purple-700 text-xl placeholder:text-gray-50 focus:bg-opacity-80 focus:bg-purple-600 placeholder:text-opacity-90"
                placeholder="How can we help you?"
              />
            </div>
            <button className="w-full lg:w-3/4 bg-purple-700 p-3 rounded-md text-gray-50 hover:bg-purple-600 text-xl">
              Send message
            </button>
          </div>
          <div className="w-max">
            <div className="hidden lg:flex items-center justify-center z-20 opacity-70 bg-gradient-to-br from-purple-900 to-purple-500 h-[35vw] w-[35vw] rounded-full shadow-sm shadow-black">
              <FaPhone className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
