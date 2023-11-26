"use client";
import { useState } from "react";
import { auth } from "@/common/firebase"; // Import your Firebase authentication instance
import { sendPasswordResetEmail } from "firebase/auth";

export default function ResetPasswordForm({
  dictionary,
  setForgotPassword,
}: {
  dictionary: any;
  setForgotPassword: Function;
}) {
  const [email, setEmail] = useState("");
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e: any) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email, {
        url: "https://decocanva.com/auth",
      });
      setIsResetEmailSent(true);
      setTimeout(() => {
        setIsResetEmailSent(false);
        setForgotPassword(false);
      }, 3500);
      setError("");
    } catch (error: any) {
      setIsResetEmailSent(false);
      setError(error.code);
    }
  };
  return (
    <div className="bg-blue-300 text-zinc-800 p-3 rounded-xl flex justify-center items-center h-max w-max fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] ">
      {isResetEmailSent ? (
        <p className="text-zinc-800">
          {dictionary.LoginPage.password_reset_success}
        </p>
      ) : (
        <form onSubmit={handleResetPassword} className="flex flex-col ">
          <label htmlFor="email" className="">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border p-2 mb-1 mt-2"
            required
          />
          {error === "auth/user-not-found" && (
            <p className="text-red-500 text-center">
              {dictionary.LoginPage.user_does_not_exist}
            </p>
          )}
          <button
            type="submit"
            className="bg-blue-500 mt-1 p-2 rounded text-white"
          >
            {dictionary.LoginPage.reset_password}
          </button>
          <br />
          <button onClick={() => setForgotPassword(false)} className="pb-1">
            {" "}
            {dictionary.LoginPage.close}
          </button>
        </form>
      )}
    </div>
  );
}
