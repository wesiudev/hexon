"use client";
import { RootState } from "@/common/redux/store";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

interface CountingAnimationProps {
  start: number;
  end: number;
  duration: number;
}

const CountingAnimation: React.FC<CountingAnimationProps> = ({
  start,
  end,
  duration,
}) => {
  const wasLevelUp = useSelector((state: RootState) => state.user.wasLevelUp);
  const [count, setCount] = useState<number>(start);
  const total = start + end;

  useEffect(() => {
    const range = total <= 100 ? end - start : 100 - start;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = elapsedTime / duration;

      if (progress >= 1) {
        if (total >= 100) {
          const surplus = total - 100;
          setCount(Math.floor(progress * surplus));
        } else {
          setCount(end);
        }
        clearInterval(interval);
        if (end >= 100) {
          setCount(0);
        }
      } else {
        setCount(
          total <= 100
            ? Math.floor(progress * range) + start
            : Math.floor(progress * 100)
        );
      }
    }, 16);

    return () => {
      clearInterval(interval);
    };
  }, [duration, end, start, total]);

  return (
    <div className="w-full h-full flex flex-col items-center font-sans mx-auto ">
      <div className="w-full h-6 bg-gray-400 rounded-full relative overflow-hidden">
        <div
          style={{
            transform: `translateX(${count}%)`,
          }}
          className={`bg-gradient-to-r from-green-600 to-green-500 absolute top-0 h-6 w-full -left-[100%]`}
        >
          {" "}
        </div>

        <div className="flex flex-row pb-2 relative w-full">
          <div className="absolute top-0 h-3 left-[50%] -translate-x-[50%]">
            <span>
              {" "}
              {count.toFixed(0)}
              {"%"}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`absolute -top-6 left-[50%] -translate-x-[50%] translate-y-8 bg-green-500 p-3 scale-0 duration-200 ${
          wasLevelUp === true &&
          "scale-150 duration-300 translate-y-[-30px] rounded-md"
        }`}
      >
        <span>Level up!</span>
      </div>
    </div>
  );
};

export default CountingAnimation;
