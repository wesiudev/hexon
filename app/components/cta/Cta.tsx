"use client";
import RecruitmentForm from "./RecruitmentForm";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisible } from "@/common/redux/slices/actionSlice";

export default function Cta({
  styleType,
  label,
}: {
  styleType: string;
  label: string;
}) {
  const dispatch = useDispatch();
  const { action } = useSelector((state: any) => state.action);

  function setModalVisibility(action: string) {
    dispatch(setModalVisible(action));
  }
  return (
    <>
      <button
        onClick={() => setModalVisibility("client")}
        className={`${
          styleType === "white" &&
          "py-3 px-5 text-sm lg:text-base xl:pl-0 mt-4 xl:mt-0 w-max sm:w-auto hover:scale-110 duration-200 in-out text-white rounded-lg cursor-pointer"
        } ${
          styleType === "colored" &&
          "py-3 px-5 w-max text-base mt-6 bg-gradient-to-br from-[#C5FF17] to-[#33E5CF] hover:scale-110 duration-200 ease-in-out text-zinc-800 rounded-lg cursor-pointer font-bold"
        }`}
      >
        {label}
      </button>

      {action === "recruitment" && <RecruitmentForm />}
    </>
  );
}
