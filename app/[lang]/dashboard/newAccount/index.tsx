"use client";
import { updateUser } from "@/common/firebase";
import { useUserData } from "@/common/hooks/useUserData";
import { setUser } from "@/common/redux/slices/userSlice";
import { redirect } from "next/navigation";
import { useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaCheckCircle,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
const diacritic = require("diacritic");
export default function NewAccount({
  dictionary,
  user,
}: {
  dictionary: any;
  user: any;
}) {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState({
    name: "",
    description: "",
  });
  const { images, loadingImages } = useUserData();
  function replaceSpecialCharacters(input: any) {
    const withoutDiacritics = diacritic.clean(input);

    let result = withoutDiacritics;

    return result.replace(/[^a-zA-Z0-9 -  " "]*/g, "");
  }
  if (!images.length && !loadingImages) {
    redirect("/backpack/empty");
  }
  return (
    <>
      {step <= 2 && (
        <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-black bg-opacity-90 z-[1200]">
          <div className="bg-white text-zinc-800 drop-shadow-lg shadow-black p-4 lg:p-6 w-[90vw] lg:w-max lg:h-max relative rounded-md not-italic duration-1000">
            <div className="text-3xl drop-shadow-lg shadow-black pb-3 flex flex-row items-center">
              {dictionary.configure_profile}
            </div>
            <div className="flex flex-col h-full border-t border-gray-400 pt-3 w-full items-center ">
              <div className="h-max p-2">
                {step === 1 && (
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl drop-shadow-lg shadow-black flex flex-row items-center not-italic font-bold text-center">
                      {dictionary.set_user_name}
                    </div>
                    <div className="text-lg mt-2 lg:text-xl drop-shadow-lg shadow-black flex flex-row items-center not-italic font-bold text-gray-500 w-3/4 text-center">
                      {dictionary.about_user_name}
                    </div>
                    <input
                      value={userInput.name}
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          name: replaceSpecialCharacters(e.target.value),
                        })
                      }
                      placeholder={`eg. ${dictionary.name}`}
                      type="text"
                      className="mt-6 bg-gradient-to-tr from-zinc-700 to-purple-700 text-white font-bold rounded-md h-18 w-[300px] lg:w-[450px] text-2xl lg:text-4xl p-3 lg:p-6"
                    />
                    <p className="h-5 text-red-500 opacity-80 font-bold mt-2">
                      {error && error}
                    </p>
                    <button
                      disabled={
                        userInput.name.length < 3 || userInput.name.length > 16
                      }
                      onClick={() => setStep(step + 1)}
                      className={`rounded-full mt-4 disabled:cursor-not-allowed ${
                        userInput.name.length >= 3 &&
                        userInput.name.length <= 16
                          ? "bg-green-500"
                          : " hover:bg-red-500"
                      }
                      ${userInput.name.length > 16 ? "!bg-red-500" : ""}`}
                    >
                      <FaArrowCircleRight className="w-16 h-16" />
                    </button>
                  </div>
                )}
                {step === 2 && (
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl drop-shadow-lg shadow-black flex flex-row items-center not-italic font-bold text-center">
                      {dictionary.about}
                    </div>
                    <div className="text-sm sm:text-lg mt-2 lg:text-xl drop-shadow-lg shadow-black flex flex-row items-center not-italic font-bold text-gray-500 sm:w-3/4 text-center">
                      {dictionary.about_section}
                    </div>
                    <textarea
                      value={userInput.description}
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          description: e.target.value,
                        })
                      }
                      rows={5}
                      placeholder={`eg. ${dictionary.description}`}
                      className="mt-6 bg-gradient-to-tr from-zinc-700 to-purple-700 text-white font-bold rounded-md h-18 w-[300px] lg:w-[450px] text-lg p-3"
                    />
                    <div className="flex flex-row items-center space-x-3">
                      <button
                        onClick={() => setStep(step - 1)}
                        className={`rounded-full mt-4 hover:bg-blue-500`}
                      >
                        <FaArrowCircleLeft className="w-16 h-16" />
                      </button>
                      <button
                        onClick={() => {
                          updateUser(user, {
                            ...user,
                            userName: userInput.name,
                            description: userInput.description,
                          }).then((res: any) =>
                            res?.error === "userName-Taken"
                              ? (setError(dictionary.user_name_taken),
                                setStep(step - 1))
                              : (dispatch(setUser(res[0])), setStep(step + 1))
                          );
                        }}
                        className={`rounded-full mt-4 bg-green-500`}
                      >
                        <FaCheckCircle className="w-16 h-16" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
