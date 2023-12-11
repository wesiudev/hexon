"use client";
import { BsBodyText } from "react-icons/bs";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import tutorial from "./tutorial.json";
import { useState } from "react";
import { CreateImageRequestSizeEnum } from "openai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GenerateButton from "../../backpack/empty/GenerateButton";
import { GenerationTutorial } from "../components/GenerationTutorial";
import { Locale } from "@/common/i18n/i18n-config";
import FirstGenerationPopup from "../../backpack/empty/FirstGenerationPopup";

export default function RenderFromText({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
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
  return (
    <>
      <GenerationTutorial
        steps={tutorial.tutorial}
        tutorialHeadline="Render From Text"
        isTutorialOpen={isTutorialOpen}
        setTutorialOpen={setTutorialOpen}
        locale={lang}
        dictionary={dictionary}
      />
      <div className="w-3/4 mx-auto font-sans min-h-[90vh] flex items-center relative pt-28 pb-28 sm:pb-36 lg:pb-12 ">
        <BsBodyText className="text-gray-50 w-[80px] h-[80px] sm:h-[15vw] sm:w-[15vw] lg:w-[125px] lg:h-[125px] opacity-20 absolute -left-[20px] top-10 sm:-left-[40px] sm:top-[50px]" />
        <div className="text-white text-3xl h-max w-screen sm:gap-x-12 lg:gap-x-12 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col mt-0 lg:mt-12">
            <span>Render an image from text</span>
            <span className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mt-6 text-xl italic font-light">
              With this tool, you can bring your ideas to life by generating
              images based on your description.
            </span>
            <div className="flex sm:flex-col">
              <button
                onClick={() => setTutorialOpen(true)}
                className="flex flex-row items-center group mt-6 sm:mt-8 w-max"
              >
                <FaInfoCircle className="text-gray-50 w-5 h-5 mr-1" />
                <div className="text-lg w-max outline-white border-white italic font-light">
                  Tutorial
                </div>
                <FaArrowRight className="invisible w-3 h-3 ml-2 group-hover:scale-150 group-hover:translate-x-1 group-hover:visible ease-in duration-75" />
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[40vw] pb-12">
            <span className="mb-6 text-3xl mt-12 lg:mt-0">
              Describe your image
            </span>
            <div className="flex flex-row h-max mt-5">
              <FaArrowRight className="mr-1" />
              <textarea
                placeholder="Enter your prompt here"
                className="z-20 w-full p-2 rounded-md text-xl lg:text-xl min-h-[25vh] bg-gray-50 text-black bg-opacity-80 placeholder:text-gray-500 outline-none resize-none"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
              />
            </div>
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

        <div className="hidden sm:block absolute bottom-20 left-12 h-12 w-12 rounded-full bg-purple-500 bg-opacity-30 hue-rotate-30"></div>
        <div className="hidden sm:block absolute bottom-10 -left-6 h-[60px] w-[60px] rotate-45 bg-purple-500 bg-opacity-30 hue-rotate-60"></div>
      </div>
    </>
  );
}
