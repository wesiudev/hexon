"use client";
import InfoHover from "@/app/components/infohover";
import { useUserData } from "@/app/hooks/useUserData";
import { FaImages, FaReadme } from "react-icons/fa";
import * as Scroll from "react-scroll";
export const GalleryModal = () => {
  const { userData } = useUserData();
  let Element = Scroll.Element;
  return (
    <div className="flex flex-col text-white relative">
      <Element className="absolute -top-44" name="tutorialStep02"></Element>
      <div className="flex flex-col bg-purple-900 text-gray-100 p-5 rounded-md">
        <div className="text-2xl sm:text-3xl flex flex-row items-center">
          <FaImages
            className={`mr-1 mt-1 font-bold not-italic ${
              userData.tutorialStep === 2 && "z-50"
            }`}
          />
          <div className={`${userData.tutorialStep === 2 && "z-50"} relative`}>
            <span className={`${userData.tutorialStep === 2 && "z-[999]"}`}>
              Gallery
            </span>{" "}
            {userData.tutorialStep === 2 && (
              <InfoHover
                title="Your Gallery"
                description="If you have a collection of images that share similar styles or colors, you have the perfect opportunity to create your very own gallery. Visit this section if you have over 20 images in your backpack."
                side="L"
                destination="tutorialStep03"
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col bg-purple-900 text-gray-100 p-5 rounded-md">
        <div className="flex-col text-center text-2xl text-gray-400 mt-1 mb-4 h-full flex items-center justify-center sm:px-5 min-h-[30vh]">
          <FaReadme className="h-16 w-16 opacity-40" />
          <span className="w-full sm:w-3/4">
            Render at least 20 pictures to create your first gallery
          </span>
        </div>
      </div>
    </div>
  );
};
