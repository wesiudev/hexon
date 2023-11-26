"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = ({
  faqs,
  isFaqOpen,
  setFaqOpen,
  dictionary,
}: {
  faqs: FaqItem[];
  isFaqOpen: boolean;
  setFaqOpen: Function;
  dictionary: any;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`fixed h-[70vh] w-[90vw] duration-500 delay-500 -translate-x-[50%]  left-[50%] bg-gradient-to-br from-zinc-500 via-purple-300 to-purple-500 pb-12 drop-shadow-lg shadow-black text-zinc-700 flex flex-col items-start prose overflow-y-scroll scrollbar ${
        isFaqOpen
          ? "-translate-y-[50%] scale-100 top-[50%]"
          : "-translate-y-[20%] scale-50 top-[100%]"
      }`}
    >
      <button
        className="bg-gray-600 duration-100 text-white py-2 px-4 rounded flex flex-row items-center mx-auto mt-12"
        onClick={() => setFaqOpen(false)}
      >
        <FaArrowLeft className="mr-3" /> {dictionary.Header.back}
      </button>
      <div className="flex flex-col items-center justify-center space-y-3 space-x-3 mt-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-gray-600 text-white  w-[90%] prose font-sans p-3 ${
              index === 0 && "ml-3"
            }`}
          >
            <button
              className="text-left"
              onClick={() => handleItemClick(index)}
            >
              <span className="font-bold">{dictionary.Header.question}</span>:{" "}
              {faq.question}
            </button>
            {activeIndex === index && (
              <div>
                <p className="bg-gray-500 p-2">
                  <span className="font-bold text-green-500">
                    {dictionary.Header.answer}
                  </span>
                  : {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}{" "}
        <button
          className="bg-gray-600 duration-100 text-white py-2 px-4 rounded flex flex-row items-center mb-12"
          onClick={() => setFaqOpen(false)}
        >
          <FaArrowLeft className="mr-3" /> {dictionary.Header.back}
        </button>
      </div>
    </div>
  );
};

export default Faq;
