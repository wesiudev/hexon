"use client";
import { updateUser } from "@/common/firebase";
import { setUser } from "@/common/redux/slices/userSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaCog } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const diacritic = require("diacritic");
export const SettingsModal = ({
  dictionary,
  user,
}: {
  dictionary: any;
  user: any;
}) => {
  const dispatch = useDispatch();
  function replaceSpecialCharacters(input: any) {
    const withoutDiacritics = diacritic.clean(input);

    let result = withoutDiacritics;

    return result.replace(/[^a-zA-Z0-9 -  " "]*/g, "");
  }
  const [error, setError] = useState("");
  const initialState = {
    userName: user.userName,
    password: "",
    isDeleting: false,
  };
  const [modalState, setModalState] = useState(initialState);
  const [editUserName, setEditUserName] = useState(false);
  useEffect(() => {
    if (error !== "") {
      setError("");
    }
  }, [modalState.userName]);
  function verifyError(error: string, id: any) {
    if (error === "userName-Taken") {
      toast.update(id, {
        render: (
          <div className="font-sans w-max h-full">
            <span>{dictionary.Dashboard.user_name_taken}</span>
          </div>
        ),
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 5000,
      });
    }
  }
  const changeUserName = () => {
    const id = toast.loading(
      <span className="font-sans">
        {dictionary.Dashboard.changing_userName}
      </span>
    );
    updateUser(user, {
      ...user,
      userName: modalState.userName,
      nameChangedAt: Date.now(),
      // === "userName-Taken"
    }).then((res: any) =>
      res?.error
        ? verifyError(res.error, id)
        : (dispatch(setUser(res[0])),
          toast.update(id, {
            render: (
              <div className="font-sans w-max h-full">
                <span>{dictionary.Dashboard.name_changed}</span>
              </div>
            ),
            type: "success",
            isLoading: false,
            closeOnClick: true,
            autoClose: 5000,
          }))
    );
  };
  const [isTargetDateHigher, setIsTargetDateHigher] = useState(false);
  useEffect(() => {
    if (user.nameChangedAt === undefined) {
      setIsTargetDateHigher(false);
    } else {
      const targetDateMoment = moment(user?.nameChangedAt).add(1, "day");
      const isTargetDateHigherOrEqual = targetDateMoment.isSameOrAfter(
        moment(user?.nameChangedAt)
      );
      if (isTargetDateHigherOrEqual) {
        setIsTargetDateHigher(true);
      }
    }
  }, [user]);

  console.log(user?.nameChangedAt);

  return (
    <div className="flex flex-col bg-purple-900 text-gray-100 p-5 rounded-xl not-italic font-bold">
      {editUserName && (
        <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-black bg-opacity-90 z-[1200]">
          <div className="bg-white text-zinc-800 drop-shadow-lg shadow-black p-4 lg:p-6 w-[90vw] lg:w-max lg:h-max relative rounded-md not-italic duration-1000">
            <div className="text-3xl drop-shadow-lg shadow-black pb-3 flex flex-row items-center">
              {dictionary.Dashboard.change_user_name}
            </div>
            <div className="flex flex-col h-full border-t border-gray-400 pt-3 w-full">
              <div className="h-max py-2">
                {dictionary.Dashboard.about_user_name_changing}
              </div>
              <div className="h-max py-2 flex flex-col">
                {isTargetDateHigher && (
                  <>
                    {dictionary.Dashboard.next_change}{" "}
                    <span className="text-green-500">
                      {moment(user?.nameChangedAt).format(
                        "MMMM D, YYYY h:mm:ss A z"
                      )}
                    </span>
                  </>
                )}
              </div>
              <input
                disabled={isTargetDateHigher}
                value={modalState.userName}
                onChange={(e) =>
                  setModalState({
                    ...modalState,
                    userName: replaceSpecialCharacters(e.target.value),
                  })
                }
                placeholder={`eg. ${dictionary.Dashboard.name}`}
                type="text"
                className="disabled:cursor-not-allowed mx-auto mt-6 bg-gradient-to-tr from-zinc-700 to-purple-700 text-white font-bold rounded-md h-18 w-[300px] lg:w-[450px] text-2xl lg:text-4xl p-3 lg:p-6"
              />
              <p
                className={`h-5 text-red-500 opacity-80 font-bold mt-2 text-center`}
              >
                {error && error}
              </p>
              {!isTargetDateHigher && (
                <button
                  onClick={changeUserName}
                  className={`rounded-full mt-4 w-max mx-auto disabled:cursor-not-allowed ${
                    modalState.userName?.length >= 3 &&
                    modalState.userName?.length <= 16
                      ? "bg-green-500"
                      : " hover:bg-red-500"
                  }`}
                >
                  <FaCheckCircle className="w-16 h-16" />
                </button>
              )}

              <button
                onClick={() => (
                  setModalState(initialState), setEditUserName(false)
                )}
                className="mt-3 text-black hover:underline mx-auto w-max"
              >
                {dictionary.LoginPage.close}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="text-2xl sm:text-3xl flex flex-row items-center">
        <FaCog className=" mr-1 mt-1" /> {dictionary.Dashboard.settings}
      </div>
      <div className="grid grid-cols-2 gap-3 text-center mt-6 rounded-xl">
        <button
          onClick={() => setEditUserName(true)}
          className="text-gray-100 bg-purple-700 hover:bg-purple-800 p-3 cursor-pointer rounded-xl"
        >
          {dictionary.Dashboard.user_name}
        </button>
        <button className="text-gray-100 bg-purple-700 hover:bg-purple-800 p-3 cursor-pointer rounded-xl">
          {dictionary.Dashboard.password}
        </button>
        {/* <div className="text-gray-100 bg-purple-700 hover:bg-purple-800 p-3 cursor-pointer rounded-md">
        {dictionary.Dashboard.privacy}
        </div> */}
      </div>
      <div className="mt-20 h-full w-full flex items-end">
        <button className="w-full h-12 bg-red-500 hover:bg-red-600 flex items-center justify-center font-light rounded-xl">
          {dictionary.Dashboard.delete}
        </button>
      </div>
    </div>
  );
};
