import Link from "next/link";
import { BsInfoCircleFill } from "react-icons/bs";
interface Info {
  text: string;
  destination?: string;
  buttonText?: string;
}
export default function Info({ text, destination, buttonText }: Info) {
  return (
    <div className="py-3 px-3 bg-zinc-700 rounded-lg mt-6 text-white">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-row items-center">
          <BsInfoCircleFill className="h-5 w-5 mr-2" />
          <span className="font-light">{text}</span>
        </div>
        <Link
          href={`/${destination}`}
          className="py-2 lg:py-1 lg:px-2 lg:mt-0 lg:ml-2 w-full lg:w-max text-center mt-2 rounded-lg bg-purple-700 hover:bg-purple-600"
        >
          <span className="ml-1 mr-1 font-bold">{buttonText}</span>
        </Link>
      </div>
    </div>
  );
}
