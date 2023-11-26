"use client";
import * as Scroll from "react-scroll";

import { FaLink } from "react-icons/fa";

export default function ScrollTo({
  destination,
  title,
}: {
  destination: string;
  title: string;
}) {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      to={destination}
      smooth={true}
      duration={750}
      className="py-3 pr-5 w-max sm:w-auto hover:underline hover:underline-offset-1 rounded-lg sm:text-xl text-gray-100 cursor-pointer"
    >
      {title}
    </ScrollTo>
  );
}
