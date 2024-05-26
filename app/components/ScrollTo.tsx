"use client";
import * as Scroll from "react-scroll";
export default function ScrollTo() {
  let ScrollTo = Scroll.Link;

  return (
    <ScrollTo
      to="about"
      smooth={true}
      duration={750}
      className="lg:ml-3 py-3 px-5 w-max text-base sm:w-auto bg-gradient-to-br from-[#C5FF17] to-[#33E5CF] hover:scale-110 duration-200 ease-in-out text-zinc-800 rounded-lg cursor-pointer font-bold"
    >
      DOFINANSOWANIE
    </ScrollTo>
  );
}
