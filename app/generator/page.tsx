import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import InterfaceBlock from "./components/InterfaceBlock";
import { BsBodyText } from "react-icons/bs";
import { TbPrompt } from "react-icons/tb";

export default function Generator() {
  return (
    <div className="w-[90vw] sm:w-3/4 mx-auto font-sans pb-96">
      <Link
        href="/backpack"
        className="pt-[24px] sm:pt-[4vw] hover:underline text-white flex flex-row items-center text-2xl z-50 w-max"
      >
        <FaArrowLeft /> <span className="ml-1 font-light">Backpack</span>
      </Link>
      <div className="mx-auto pt-12">
        <div className="text-gray-50 text-4xl flex flex-row w-full">
          <div className="ml-2">
            <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
            <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
          </div>
          <div className="ml-3">Render tools</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        <InterfaceBlock
          title="Render image from text"
          Icon={BsBodyText}
          description="You can render an image by writing a description for our generator."
          destination="render-from-text"
        />
        <InterfaceBlock
          title="Render image with Prompter"
          Icon={TbPrompt}
          description="Use prompter to render images by describing details step by step."
          destination="render-with-prompter"
        />
      </div>
    </div>
  );
}
