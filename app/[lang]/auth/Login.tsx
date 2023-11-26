"use client";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { provider, auth } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleAuthButtons from "./GoogleAuth";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Hero from "@/app/components/hero/Hero";
import ResetPasswordForm from "./ResetPasswordForm";

export default function Login({ dictionary }: { dictionary: any }) {
  const [user, loading] = useAuthState(auth);
  const [isLoginUser, setIsLoginUser] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  if (user) {
    redirect("/dashboard");
  }
  function handleLogin() {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        if (token) {
          redirect("/dashboard");
        }
        // The signed-in user info.
        const user = result?.user;
      })
      .catch((error) => {});
  }
  function handleLogout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }
  function emailPasswordLogin() {
    if (email.includes("@") && email.includes(".")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {})
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setEmailError(dictionary.LoginPage.user_does_not_exist);
            setTimeout(() => {
              setEmailError("");
            }, 7500);
          }
          if (error.code === `auth/wrong-password`) {
            setPasswordError(dictionary.LoginPage.wrong_password);
            setTimeout(() => {
              setPasswordError("");
            }, 7500);
          }
        });
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError(dictionary.LoginPage.please_enter_valid_email_address);
      setTimeout(() => {
        setEmailError("");
      }, 7500);
    }
    if (password.length < 6) {
      setPasswordError(dictionary.LoginPage.password_is_incorrect);
      setTimeout(() => {
        setPasswordError("");
      }, 7500);
    }
  }
  function registerWithEmailPassword() {
    const accountCount = localStorage.getItem("accountCount");
    if (email.includes("@") && email.includes(".") && password.length >= 6) {
      if (accountCount === "3") {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const accountCount = localStorage.getItem("accountCount");
          if (accountCount === null) {
            localStorage.setItem("accountCount", "1");
          } else {
            switch (accountCount) {
              case "1":
                localStorage.setItem("accountCount", "2");
                break;
              case "2":
                localStorage.setItem("accountCount", "3");
                break;
              default:
                break;
            }
          }
        })

        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setEmailError(dictionary.LoginPage.user_already_exists);
          }
        });
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError(dictionary.LoginPage.please_enter_valid_email_address);
      setTimeout(() => {
        setEmailError("");
      }, 7500);
    }
    if (password.length < 6) {
      setPasswordError(
        dictionary.LoginPage.password_should_contain_more_than_6_characters
      );
      setTimeout(() => {
        setPasswordError("");
      }, 7500);
    }
  }
  return (
    <>
      <section className="h-screen items-center font-sans overflow-hidden">
        <div className="bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900  w-full  h-screen relative  lg:overflow-hidden">
          <div className="relative z-[0] h-screen w-screen">
            <Hero />
          </div>
          <div className="h-[50vh] md:h-[100vh] w-full flex rounded-lg relative">
            <Link href="/">
              <div className="absolute m-10 text-gray-100 text-xl z-[50]">
                decocanva.com
              </div>
            </Link>
          </div>
        </div>

        <div
          className="bg-white w-[90vw] sm:w-[80vw] lg:w-[50vw] xl:w-1/3  p-12 rounded-lg shadow-lg duration-1000
        flex items-center justify-center fixed  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight  text-black">
              {isLoginUser && dictionary.LoginPage.sign_in_to_your_account}
              {!isLoginUser && dictionary.LoginPage.create_an_account}
            </h1>

            <form
              className="mt-6"
              onSubmit={(e) => {
                isLoginUser
                  ? emailPasswordLogin()
                  : registerWithEmailPassword();
                e.preventDefault();
              }}
            >
              <div>
                <label className="flex flex-row items-center text-black">
                  <FaEnvelope className="mr-1 text-gray-700" />{" "}
                  {dictionary.LoginPage.email_address}
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Email Address"
                  className={`text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none ${
                    emailError !== "" && "border-2 border-red-600"
                  }`}
                />
                {emailError !== "" && (
                  <span className=" text-red-600">{emailError}</span>
                )}
              </div>

              <div className="mt-4">
                <label className="flex flex-row items-center text-black">
                  <FaKey className="mr-1 text-gray-700" />
                  {dictionary.LoginPage.password}
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter Password"
                  className={`text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none${
                  passwordError !== "" && "border-2 border-red-600"
                }`}
                />
                {passwordError !== "" && (
                  <span className=" text-red-600">{passwordError}</span>
                )}
              </div>

              {isLoginUser && (
                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  {dictionary.LoginPage.log_in}
                </button>
              )}
              {!isLoginUser && (
                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  {dictionary.LoginPage.sign_up}
                </button>
              )}
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <GoogleAuthButtons
              user={user}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              btnText={dictionary.LoginPage.continue_with_google}
            />
            <div className="flex flex-row items-center justify-between">
              {isLoginUser && (
                <p className="mt-8 text-black">
                  {dictionary.LoginPage.dont_have_account}{" "}
                  <a
                    onClick={() => setIsLoginUser(false)}
                    className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold"
                  >
                    {dictionary.LoginPage.create}
                  </a>
                </p>
              )}
              {!isLoginUser && (
                <p className="mt-8 text-black">
                  {dictionary.LoginPage.already_registered}{" "}
                  <a
                    onClick={() => setIsLoginUser(true)}
                    className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold"
                  >
                    {dictionary.LoginPage.sign_in}
                  </a>
                </p>
              )}
              <div className="text-right mt-8">
                <a
                  onClick={() => setForgotPassword(!forgotPassword)}
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  {dictionary.LoginPage.forgot_passord}
                </a>
              </div>
            </div>
          </div>
          {forgotPassword && (
            <ResetPasswordForm
              dictionary={dictionary}
              setForgotPassword={setForgotPassword}
            />
          )}
        </div>
      </section>
    </>
  );
}
