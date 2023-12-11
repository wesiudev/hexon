"use client";
import {
  FaArrowAltCircleRight,
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";
import GenerateButton from "./GenerateButton";
import { useState } from "react";
import { CreateImageRequestSizeEnum } from "openai";
import FirstGenerationPopup from "./FirstGenerationPopup";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/navigation";

import { Locale } from "@/common/i18n/i18n-config";
import tutorial from "../../generator/render-from-text/tutorial.json";
import { GenerationTutorial } from "../../generator/components/GenerationTutorial";
import { useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";
import { useUserData } from "@/common/hooks/useUserData";
export default function EmptyBackpack({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
  const { images } = useUserData();
  const { userData } = useUserData();
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  const [isGenerationPending, setIsGenerationPending] =
    useState<boolean>(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [size, setSize] = useState<CreateImageRequestSizeEnum>("1024x1024");
  const [hasImage, setHasImage] = useState(false);
  const [imageResponse, setImageResponse] = useState("");
  const [isError, setIsError] = useState<boolean | string>("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isGenerationTriggered, setIsGenerationTriggered] = useState(false);
  const displayError = (errorMessage: any) => {
    toast.error(errorMessage, {
      onClose: () => (setIsError(false), setIsGenerationTriggered(false)),
    });
  };

  if (images?.length > 0) {
    redirect("/backpack");
  }

  return (
    <>
      <GenerationTutorial
        steps={tutorial.tutorial}
        tutorialHeadline={dictionary.Tutorial.render_from_text}
        isTutorialOpen={isTutorialOpen}
        setTutorialOpen={setTutorialOpen}
        locale={lang}
        dictionary={dictionary}
      />
      <div className="font-sans relative">
        {userData && (
          <Link
            href="/dashboard"
            className="absolute hover:underline left-[24px] top-[48px] sm:left-[4vw] sm:top-[4vw]  text-white flex flex-row items-center text-2xl z-50"
          >
            <FaArrowLeft /> <span className="ml-1 font-light">Dashboard</span>
          </Link>
        )}
        {!hasImage && (
          <div className="lg:w-full min-h-screen w-full flex flex-col justify lg:flex-row lg:items-center mx-auto from-zinc-900 to-purple-900 bg-gradient-to-br">
            <div className="h-full w-full flex items-center relative mt-[122px] lg:mt-10">
              <div className="absolute bottom-6 left-24 bg-purple-400 hue-rotate-[45] w-16 h-16 rounded-full bg-opacity-0 lg:bg-opacity-50" />
              <div className="absolute bottom-24 left-12 bg-purple-500 hue-rotate-30 w-12 h-12 rounded-full bg-opacity-0 lg:bg-opacity-50" />
              <div className="flex flex-col justify-evenly min-h-[30vh] w-[90vw] lg:w-[45vw] pl-[4vw] pr-10 py-5 lg:py-10 lg:pr-12 bg-purple-700 rounded-r-full drop-shadow-md shadow-black">
                <div className="text-xl sm:text-2xl text-gray-50 lg:text-left pr-6">
                  <div className="mx-auto">
                    {dictionary.Empty.hello_it_seems_like_your}{" "}
                    <strong className="bg-gradient-to-r from-rose-600 to-purple-400 bg-clip-text text-transparent font-bold">
                      {" "}
                      {dictionary.Empty.backpack}
                    </strong>{" "}
                    {dictionary.Empty.is_empty}
                  </div>
                </div>
                <div className="lg:text-left text-xl sm:text-2xl lg:text-2xl text-gray-50 w-full sm:w-4/5 lg:w-4/5 mt-6">
                  {dictionary.Empty.specify_the_scenerio_for}{" "}
                  <span className="bg-gradient-to-r from-rose-600 to-purple-400 bg-clip-text text-transparent font-bold">
                    AI
                  </span>
                  {" - "}
                  {dictionary.Empty.tell_it_what_you_want_to_see_on_your_first}
                  <span className="bg-gradient-to-r from-rose-600 to-purple-400 bg-clip-text text-transparent font-bold">
                    {" "}
                    {dictionary.Empty.generation}
                  </span>
                  .
                </div>
              </div>
            </div>
            <div className="w-[90%] lg:w-[100%] min-h-[60vh] flex flex-col mx-auto pt-12 lg:pt-[175px] relative">
              <div className="absolute w-12 h-12 bg-purple-400 bg-opacity-70 -top-3 lg:top-10 lg:right-16 right-1 hue-rotate-30 rotate-45" />
              <div className="absolute w-6 h-6 bg-purple-800 bg-opacity-70 top-16 lg:top-32 lg:right-28 right-12 hue-rotate-30 -rotate-12" />
              <div className="text-gray-50 text-3xl lg:mt-0 mt-16">
                {dictionary.Empty.step_1}{" "}
                <strong className="bg-gradient-to-r from-purple-400 to-rose-600 bg-clip-text text-transparent">
                  {dictionary.Empty.generate}{" "}
                </strong>{" "}
                {dictionary.Empty.your_first_image}{" "}
              </div>
              <div className="bg-opacity-50 w-full lg:w-[90%] mt-12">
                <div className="flex flex-row w-full relative">
                  <div className="flex flex-col w-full relative">
                    <FaArrowAltCircleRight className="w-5 h-5 mr-2 text-white absolute left-3 top-3" />
                    <textarea
                      onChange={(e) => setUserPrompt(e.target.value)}
                      value={userPrompt}
                      placeholder={dictionary.Generator.write_your_prompt_here}
                      className="cursor-default font-bold pl-9 pt-2 text-gray-100 z-20 w-full rounded-t-xl text-xl lg:text-xl min-h-[25vh] bg-purple-400 bg-opacity-80 placeholder:text-purple-300 outline-none resize-none"
                    />
                    <GenerateButton
                      place="generator"
                      setIsGenerationPending={setIsGenerationPending}
                      setImageLoaded={setImageLoaded}
                      setImageResponse={setImageResponse}
                      setHasImage={setHasImage}
                      setIsError={setIsError}
                      userPrompt={userPrompt}
                      size={size}
                      hasImage={hasImage}
                      isGenerationPending={isGenerationPending}
                      imageResponse={imageResponse}
                      setIsGenerationTriggered={setIsGenerationTriggered}
                      displayError={displayError}
                      isError={isError}
                      dictionary={dictionary}
                    />
                  </div>
                </div>
                <div className="w-full h-max pb-12">
                  <div className="text-xl text-gray-50 flex flex-row items-center mt-5">
                    <button
                      onClick={() => setTutorialOpen(true)}
                      className="flex flex-row items-center group mt-6 sm:mt-8 w-max"
                    >
                      <FaInfoCircle className="text-gray-50 w-5 h-5 mr-1" />
                      <div className="text-lg w-max outline-white border-white italic font-light">
                        {dictionary.Tutorial.tutorial}
                      </div>
                      <FaArrowRight className="invisible w-3 h-3 ml-2 group-hover:scale-150 group-hover:translate-x-1 group-hover:visible ease-in duration-75" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isError && (
          <FirstGenerationPopup
            isGenerationTriggered={isGenerationTriggered}
            setIsGenerationTriggered={setIsGenerationTriggered}
            isLoading={isGenerationPending}
            hasImage={hasImage}
            imageResponse={imageResponse}
            userPrompt={userPrompt}
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
            displayError={displayError}
            isError={isError}
            setHasImage={setHasImage}
            dictionary={dictionary}
          />
        )}
      </div>
    </>
  );
}
