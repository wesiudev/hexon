"use client";
import { useState } from "react";
import { auth } from "@/common/firebase"; // Import your Firebase authentication instance
import { sendPasswordResetEmail } from "firebase/auth";

export default function ResetPasswordForm({ dictionary }: { dictionary: any }) {
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
      setError("");
    } catch (error: any) {
      setIsResetEmailSent(false);
      setError(error.message);
    }
  };
  return (
    <div className="bg-white rounded-xl flex justify-center items-center h-max w-max fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] ">
      {isResetEmailSent ? (
        <p className="text-green-500">
          Password reset email sent. Check your inbox.
        </p>
      ) : (
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col items-center"
        >
          <div className="w-[90%] lg:w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 drop-shadow-md shadow-black rounded p-12 z-[1605]">
            <div className="space-y-4 flex flex-col justify-start">
              <label className=" text-black text-2xl flex flex-row items-center">
                {dictionary.LoginPage.email_recovery}
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter Email Address"
                className="text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="w-full block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg
              p-2 mt-6"
                >
                  {dictionary.LoginPage.reset_password}
                </button>
                <button
                  onClick={() => setForgotPassword(false)}
                  type="submit"
                  className="mr-4 w-full block bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg
              p-2 mt-6"
                >
                  {dictionary.LoginPage.close}
                </button>
              </div>
            </div>
          </div>

          <label htmlFor="email" className="text-gray-200">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border p-2 m-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Reset Password
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      )}
    </div>
  );
}
