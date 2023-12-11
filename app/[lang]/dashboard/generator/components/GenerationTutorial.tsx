"use client";
import { useState } from "react";
import arrayPaginate from "array-paginate";
import { Locale } from "@/common/i18n/i18n-config";
type TutorialStep = {
  step: number;
  title: {
    en: string;
    cs: string;
    de: string;
    nl: string;
    pl: string;
  };
  description: {
    en: string;
    cs: string;
    de: string;
    nl: string;
    pl: string;
  };
};

interface TutorialWindow {
  steps: TutorialStep[];
  tutorialHeadline: string;
  isTutorialOpen: boolean;
  setTutorialOpen: (arg: boolean) => void;
  locale: Locale;
  dictionary: any;
}

export const GenerationTutorial = ({
  steps,
  tutorialHeadline,
  isTutorialOpen,
  setTutorialOpen,
  locale,
  dictionary,
}: TutorialWindow) => {
  const [currentTutorialPage, setCurrentTutorialPage] = useState(1);
  const paginatedItems = arrayPaginate(steps, currentTutorialPage, 3);
  return (
    <>
      {isTutorialOpen && (
        <div className="z-[1001] fixed w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[95vw] min-h-[30vh] sm:w-[75vw] lg:w-[40vw] bg-purple-900 flex flex-col px-3 py-3 sm:px-5 sm:py-5 font-sans rounded-md">
            <div className="flex flex-col">
              <span className="w-max mx-auto text-2xl text-white py-2">
                {tutorialHeadline}
              </span>
              <div className="w-full flex flex-row justify-between text-white items-center my-3">
                <span className="w-full h-px bg-purple-600"></span>
                <span className="italic font-light px-5">
                  {dictionary.Tutorial.tutorial}
                </span>
                <span className="w-full h-px bg-purple-600"></span>
              </div>
            </div>
            <div className="flex flex-col max-h-[90vh] ">
              {paginatedItems.docs.map((step: TutorialStep, idx: number) => (
                <div key={idx} className="mt-3">
                  <span className="text-gray-50 text-lg">
                    {dictionary.Tutorial.step} {step.step}.
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent text-lg ">
                    {step.title[locale]}
                  </span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-gray-50 text-lg leading-relaxed">
                    {step.description[locale]}
                  </span>
                </div>
              ))}
              <div
                className={`grid ${
                  currentTutorialPage > 1 ? "grid-cols-2 gap-3" : "grid-cols-1"
                } mt-3 
              text-white`}
              >
                {currentTutorialPage > 1 && (
                  <button
                    className=" hover:bg-zinc-700 bg-zinc-500 w-full px-2 py-2 rounded-md"
                    onClick={() =>
                      setCurrentTutorialPage(currentTutorialPage - 1)
                    }
                  >
                    {dictionary.Tutorial.previous}
                  </button>
                )}
                {currentTutorialPage < paginatedItems.totalPages && (
                  <button
                    className="bg-gradient-to-r from-purple-600 to-rose-600 w-full px-2 py-2 rounded-md hover:from-purple-500 hover:to-rose-500"
                    onClick={() =>
                      setCurrentTutorialPage(currentTutorialPage + 1)
                    }
                  >
                    {dictionary.Tutorial.next}
                  </button>
                )}
                {currentTutorialPage === paginatedItems.totalPages && (
                  <button
                    className="bg-green-500 w-full px-2 py-2 rounded-md hover:bg-green-700"
                    onClick={() => {
                      setTutorialOpen(false), setCurrentTutorialPage(1);
                    }}
                  >
                    {dictionary.Tutorial.finish_tutorial}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
