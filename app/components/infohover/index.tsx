import { useUserData } from "@/app/hooks/useUserData";
import { updateUserTutorial } from "@/common/firebase";
import { setUser, setUserTutorial } from "@/common/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import * as Scroll from "react-scroll";

interface InfoHover {
  title: string;
  description?: string;
  destination?: string | undefined;
  side?: string; // Specify on which side is the element to point at. R-right L-left
  scroll?: number;
}

export default function InfoHover({
  title,
  description,
  destination,
  side,
  scroll,
}: InfoHover) {
  const { userData } = useUserData();
  const dispatch = useDispatch();
  const alignElement = () => {
    switch (side) {
      case "L":
        return {
          element: {
            classname:
              "top-[65px] sm:left-[100%] sm:translate-x-[10%] sm:translate-y-[-50%] sm:top-[50%]",
          },
          arrow: {
            classname:
              "top-[-12px] left-[15px] sm:left-[-20px] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:top-[50%]",
          },
        };
      case "R":
        return {
          element: {
            classname:
              "top-[65px] right-[-10%] sm:right-[100%] sm:translate-x-[-10%] sm:translate-y-[-50%] sm:top-[50%]",
          },
          arrow: {
            classname:
              "top-[-12px] right-[15px] sm:right-[-20px] sm:translate-x-[50%] sm:translate-y-[-50%] sm:top-[50%]",
          },
        };

      default:
        break;
    }
  };
  let ScrollLink = Scroll.Link;
  return (
    <>
      <div className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-60 z-30"></div>
      {/* ELEMENT */}
      <div
        className={`${
          alignElement()?.element.classname
        } absolute h-max w-[75vw] sm:w-[325px] lg:w-[375px] bg-purple-600 rounded-lg px-3 sm:px-5 z-50`}
      >
        <div className=" flex flex-col py-3 text-sm relative">
          {/* ARROW */}
          <div
            className={`${
              alignElement()?.arrow.classname
            } absolute w-6 h-6 bg-purple-600 rotate-45`}
          ></div>
          <div
            className={`${
              description ? "text-center" : "text-left"
            } z-50 text-xl font-bold`}
          >
            {title}
          </div>
          {description && (
            <>
              <div className="flex flex-row justify-between items-center my-2">
                <div className="w-2/5 h-[2px] bg-purple-950"></div>
                <div className="w-3 h-3 bg-purple-950 rounded-full"></div>
                <div className="w-2/5 h-[2px] bg-purple-950"></div>
              </div>
              <div className="text-left z-50 text-lg sm:text-md">
                {description}
              </div>
              <ScrollLink
                to={destination}
                smooth={true}
                duration={500}
                delay={200}
                onClick={() => {
                  updateUserTutorial({
                    email: userData.email,
                    tutorial: userData.tutorialStep + 1,
                  }),
                    dispatch(setUserTutorial(userData.tutorialStep + 1));
                }}
                className="font-normal cursor-pointer text-center text-xl py-2 px-3 w-full bg-gradient-to-r from-blue-900 to-rose-600  hover:from-blue-800 hover:to-rose-500 mt-3 rounded-md"
              >
                Next
              </ScrollLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
