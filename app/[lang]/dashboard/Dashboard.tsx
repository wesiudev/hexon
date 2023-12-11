"use client";
import { auth } from "@/common/firebase";
import {
  FaClock,
  FaCoins,
  FaEnvelope,
  FaHome,
  FaImages,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { SettingsModal } from "./modals/settings";
import { BackpackModal } from "./modals/backpack";
import Loading from "./loading";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/common/redux/slices/userSlice";
import { AccountHistoryItem } from "@/types";
import moment from "moment";
import Link from "next/link";
import Badges from "./modals/badges";
import InfoHover from "@/app/components/infohover";
import { calculateLevel } from "@/app/components/levelsystem/CalculateLevel";
import { redirect } from "next/navigation";
import { Locale } from "@/common/i18n/i18n-config";
import "moment/locale/nl";
import "moment/locale/cs";
import "moment/locale/de";
import "moment/locale/pl";
import NewAccount from "./newAccount";
import { RootState } from "@/common/redux/store";
import { GiLightBackpack } from "react-icons/gi";
import { ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Dashboard({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
  const { userData } = useSelector((state: RootState) => state.user);
  const [user, loading] = useAuthState(auth);
  const { loadingImages, images } = useSelector(
    (state: RootState) => state.images
  );
  const dispatch = useDispatch();
  moment.locale(lang);
  function handleLogout() {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  }
  const accountHistory = userData?.accountHistory
    ?.map((commit: AccountHistoryItem) => commit)
    .sort(
      (a: { creationTime: number }, b: { creationTime: number }) =>
        b.creationTime - a.creationTime
    );

  const { percentageExperience } = calculateLevel(
    userData.accountLevel,
    userData.accountExperience
  );

  if (!userData && !loadingImages) {
    redirect("/auth");
  }
  if (!images.length && !loadingImages) {
    redirect("/backpack/empty");
  }
  if (!user && loading) {
    return <Loading />;
  }
  if (!user && !loading) {
    redirect("/auth");
  }
  return (
    <>
      <div className="mx-auto w-[90vw] py-12 font-sans italic relative">
        <ToastContainer />
        {!userData.configurated && userData.tutorialStep === -1 && (
          <NewAccount dictionary={dictionary.Dashboard} user={userData} />
        )}
        <div className="text-gray-50 text-4xl flex flex-row w-full">
          <div className="ml-2">
            <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
            <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="ml-3 text-2xl sm:text-3xl">Dashboard</div>
            <div className="justify-between flex flex-row flex-wrap space-x-6">
              <Link
                href="/"
                className="flex flex-row items-center not-italic text-lg sm:text-xl"
              >
                <FaHome className="mr-1" /> Home
              </Link>
              <Link
                href="/dashboard/backpack"
                className="flex flex-row items-center not-italic text-lg sm:text-xl"
              >
                <GiLightBackpack className="mr-1" /> {dictionary.Empty.backpack}
              </Link>
              <Link
                href="/dashboard/generator"
                className="flex flex-row items-center not-italic text-lg sm:text-xl"
              >
                <FaImages className="mr-1" /> Generator
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[90vw] mt-12">
          <div className="w-full text-2xl lg:text-3xl text-gray-100">
            <div className="flex flex-row items-center justify-between w-full bg-purple-900 p-5 rounded-xl">
              <div className="flex flex-row items-center not-italic font-bold">
                <FaUser className="mr-1 text-2xl" />

                {userData?.userName
                  ? userData?.userName
                  : dictionary.Dashboard.your_account}
              </div>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 w-full mt-2 relative">
              <div className="bg-purple-900 rounded-xl p-5 w-full relative min-h-[40vh]">
                <span className="text-3xl not-italic">
                  {dictionary.Dashboard.account_details}
                </span>
                <div className="flex flex-col mt-2">
                  <div className="text-xl flex flex-row items-center mt-2">
                    <FaEnvelope className="h-6 w-6 mr-1 mt-[2px]" />

                    <span className="text-lg overflow-x-hidden">
                      {userData?.email}
                    </span>
                  </div>
                  <span className="flex flex-row items-center relative w-max mt-2 text-[20px]">
                    <FaCoins
                      className={`text-white h-6 w-6 mr-1 ${
                        !userData.finishedTutorial &&
                        userData.tutorialStep === 0 &&
                        "z-50"
                      }`}
                    />{" "}
                    <span
                      className={`text-gray-100 flex flex-row items-center ${
                        !userData.finishedTutorial &&
                        userData.tutorialStep === 0 &&
                        "z-50"
                      }`}
                    >
                      {userData.balance}
                    </span>
                    {!userData.finishedTutorial &&
                      userData.tutorialStep === 0 && (
                        <InfoHover
                          title="Account balance"
                          description="Each render has its own price. You can earn Render Points daily by being active user. There is also a shop where you can buy them."
                          side="L"
                          destination="tutorialStep01"
                        />
                      )}
                  </span>
                  <div className="bottom-0 left-0 absolute p-5 flex flex-col w-full text-lg not-italic bg-[#6B21A8] rounded-b-xl">
                    <div className="flex flex-row justify-between pb-2 relative">
                      <span> {dictionary.Dashboard.account_experience}</span>
                      <div className="">
                        {dictionary.Dashboard.account_level}{" "}
                        {userData.accountLevel + 1}
                      </div>
                    </div>
                    <div className="w-full h-7 bg-gray-50 rounded-full relative overflow-hidden">
                      <div
                        style={{
                          transform: `translateX(${percentageExperience}%)`,
                        }}
                        className={`bg-green-600 absolute top-0 h-9 w-full -left-[100%]`}
                      ></div>
                      <span className="text-zinc-800 drop-shadow-lg shadow-black font-bold text-center mx-auto not-italic w-max absolute left-[50%] top-0 -translate-x-[50%] opacity-80">
                        {percentageExperience}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 h-full bg-purple-900 rounded-xl w-full mt-2 sm:mt-0 ">
                <span className="text-3xl not-italic">
                  {dictionary.Dashboard.account_history}
                </span>
                {accountHistory?.length && (
                  <div className="h-[35vh] overflow-y-scroll scrollbar">
                    {accountHistory?.map(
                      (item: AccountHistoryItem, idx: number) => (
                        <div className="flex flex-col mt-4" key={idx}>
                          <div className="flex flex-row items-center">
                            <FaClock className="w-6 h-6 mt-px mr-1" />
                            <span className="text-lg not-italic">
                              {moment(item.creationTime).format(
                                "DD-MM-yyyy hh:mm a"
                              )}{" "}
                            </span>
                            <span className="text-green-400 font-light text-sm ml-1 hidden lg:block">
                              {`(${moment(item.creationTime).fromNow()})`}
                            </span>
                          </div>
                          <span className="text-lg flex flex-row items-center">
                            <BsArrowReturnRight className="w-5 h-5 mr-1 ml-[9px]" />
                            {item.action === "Joined decocanva" &&
                              dictionary.Dashboard.joined_decocanva}
                            {item.action === "Rendered image" &&
                              dictionary.Dashboard.generated_image}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`w-full mt-6`}>
            <BackpackModal
              images={images}
              dictionary={dictionary.Dashboard}
              lang={lang}
            />
            <div className="mt-6 gap-x-3 grid sm:grid-cols-2 gap-y-6 sm:gap-y-0">
              <Badges dictionary={dictionary.Dashboard} />
              <SettingsModal dictionary={dictionary} user={userData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
