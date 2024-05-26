"use client";
import { pushLead } from "@/common/firebase";
import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
export default function ClientFormLogic() {
  const [formData, setFormData] = useState<any>({
    ownership: undefined,
    incomeLevel: undefined,
    heatingSource: undefined,
    visitors: undefined,
    debtStatus: undefined,
    hectareCount: undefined,
    houseType: undefined,
    houseAge: undefined,
    phone: "",
  });
  const [isSending, setIsSending] = useState<any>(undefined);

  const handleSubmit = (e: any) => {
    setIsSending(true);
    e.preventDefault();
  };

  return (
    <>
      <div className="z-0 relative">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.ownership !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 1
            </span>
            <label className="font-light mt-3">
              Czy jesteś właścicielem KW bądź współwłaścicielem?
            </label>
            <div className="-ml-2 flex flex-row flex-wrap">
              <button
                onClick={() => setFormData({ ...formData, ownership: true })}
                className={`${
                  formData.ownership ? "border-black" : "border-green-500"
                } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
              >
                Jestem
              </button>
              <button
                onClick={() => setFormData({ ...formData, ownership: false })}
                className={`${
                  formData.ownership === false
                    ? "border-black"
                    : "border-green-500"
                } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
              >
                Nie jestem
              </button>
            </div>
            {/* Add more input fields as needed */}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.incomeLevel !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 2
            </span>
            <label className="font-light mt-3">
              Jakiej wysokości są Twoje dochody?
            </label>
            {formData.ownership !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <button
                  onClick={() =>
                    setFormData({ ...formData, incomeLevel: "0-1999zł" })
                  }
                  className={`${
                    formData.incomeLevel === "0-1999zł"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  0-1999zł
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, incomeLevel: "2000-3999zł" })
                  }
                  className={`${
                    formData.incomeLevel === "2000-3999zł"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  2000-3999zł
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, incomeLevel: "4000-5999zł" })
                  }
                  className={`${
                    formData.incomeLevel === "4000-5999zł"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  4000-5999zł
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, incomeLevel: "powyżej 6000zł" })
                  }
                  className={`${
                    formData.incomeLevel === "powyżej 6000zł"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  powyżej 6000zł
                </button>
              </div>
            )}
            {/* Add more input fields as needed */}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.heatingSource !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 3
            </span>
            <label className="font-light mt-3">
              Jakim źródłem ciepła ogrzewasz gospodarstwo domowe?
            </label>
            {formData.incomeLevel !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <button
                  onClick={() =>
                    setFormData({ ...formData, heatingSource: "Gaz" })
                  }
                  className={`${
                    formData.heatingSource === "Gaz"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Gaz
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, heatingSource: "Kopciuch" })
                  }
                  className={`${
                    formData.heatingSource === "Kopciuch"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Kopciuch
                </button>
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      heatingSource: "Piec klasy od I do V",
                    })
                  }
                  className={`${
                    formData.heatingSource === "Piec klasy od I do V"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Piec klasy od I do V
                </button>
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      heatingSource: "Inne",
                    })
                  }
                  className={`${
                    formData.heatingSource === "Inne"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Inne
                </button>
              </div>
            )}
            {/* Add more input fields as needed */}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.visitors !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 4
            </span>
            <label className="font-light mt-3">
              Czy posiadasz dzieci bądź wnuków, którzy uczestniczą w
              gospodarstwie domowym?
            </label>
            {/* Add more input fields as needed */}
            {formData.heatingSource !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <button
                  onClick={() => setFormData({ ...formData, visitors: "Tak" })}
                  className={`${
                    formData.visitors === "Tak"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Tak
                </button>
                <button
                  onClick={() => setFormData({ ...formData, visitors: "Nie" })}
                  className={`${
                    formData.visitors === "Nie"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Nie
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.debtStatus !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 5
            </span>
            <label className="font-light mt-3">
              Czy KW jest zadłużona przez komornika?
            </label>
            {/* Add more input fields as needed */}
            {formData.visitors !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <button
                  onClick={() =>
                    setFormData({ ...formData, debtStatus: "Tak" })
                  }
                  className={`${
                    formData.debtStatus === "Tak"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Tak
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, debtStatus: "Nie" })
                  }
                  className={`${
                    formData.debtStatus === "Nie"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Nie
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.hectareCount !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 6
            </span>
            <label className="font-light mt-3">
              Ile posiadasz przeliczeniowych hektarów?
            </label>
            {formData.debtStatus !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <button
                  onClick={() =>
                    setFormData({ ...formData, hectareCount: "0-9" })
                  }
                  className={`${
                    formData.hectareCount === "0-9"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  0-9
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, hectareCount: "10-19" })
                  }
                  className={`${
                    formData.hectareCount === "10-19"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  10-19
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, hectareCount: "20-29" })
                  }
                  className={`${
                    formData.hectareCount === "20-29"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  20-29
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, hectareCount: "30-49" })
                  }
                  className={`${
                    formData.hectareCount === "30-49"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  30-49
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, hectareCount: "50-99" })
                  }
                  className={`${
                    formData.hectareCount === "50-99"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  50-99
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, hectareCount: "Powyżej 100" })
                  }
                  className={`${
                    formData.hectareCount === "Powyżej 100"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Powyżej 100
                </button>
              </div>
            )}
            {/* Add more input fields as needed */}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.houseType !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 7
            </span>
            <label className="font-light mt-3">
              Czy jest to dom czy bliźniak?
            </label>
            {formData.hectareCount !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <button
                  onClick={() => setFormData({ ...formData, houseType: "Dom" })}
                  className={`${
                    formData.houseType === "Dom"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Dom
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, houseType: "Bliźniak" })
                  }
                  className={`${
                    formData.houseType === "Bliźniak"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Bliźniak
                </button>
              </div>
            )}
            {/* Add more input fields as needed */}
          </div>
          <div className="flex flex-col justify-center border-t border-green-500 py-6 px-6 relative">
            <span className="font-bold text-lg">
              {formData.houseAge !== undefined && (
                <div className="text-2xl absolute left-2 top-4 -translate-y-1/2 text-green-500">
                  <FaCheckCircle />
                </div>
              )}
              Pytanie 8
            </span>
            <label className="font-light mt-3">
              Czy Twój dom stoi więcej niż 10 lat?
            </label>
            {formData.houseType !== undefined && (
              <div className="-ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <button
                  onClick={() => setFormData({ ...formData, houseAge: "Tak" })}
                  className={`${
                    formData.houseAge === "Tak"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Tak
                </button>
                <button
                  onClick={() => setFormData({ ...formData, houseAge: "Nie" })}
                  className={`${
                    formData.houseAge === "Nie"
                      ? "border-black"
                      : "border-green-500"
                  } border-dashed border-2 mt-2 ml-2 p-2 py-0 font-light text-base bg-green-500 hover:bg-green-400 text-white`}
                >
                  Nie
                </button>
              </div>
            )}
            {/* Add more input fields as needed */}
          </div>
        </form>
        {formData.houseAge !== undefined && (
          <div
            style={{ boxShadow: "0px 0px 3px black" }}
            className="absolute bottom-0 left-0 p-6 w-full bg-white z-[500]"
          >
            <div className="">
              <h2 className="text-xl mb-3">Numer telefonu:</h2>
              <input
                style={{ boxShadow: "0px 0px 3px black" }}
                className="w-full sm:w-auto p-2 placeholder:font-light focus:outline-2 focus:outline-green-500"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
                placeholder="Wpisz numer"
              />
            </div>
            {isSending === "success" && (
              <div className="text-green-500 animate-pulse mt-3">
                Wysłano pomyślnie!
              </div>
            )}
            <div className="flex flex-col-reverse lg:flex-row items-center w-full mt-2">
              <button
                onClick={() =>
                  setFormData({ ...formData, houseAge: undefined })
                }
                className="font-light mt-2 lg:mr-4"
              >
                Powrót
              </button>
              <button
                disabled={isSending === "success"}
                onClick={() => {
                  pushLead({ ...formData, id: uuidv4() }).then(() => {
                    setIsSending("success");
                  });
                }}
                className="flex flex-row items-center justify-center py-3 px-5 w-full text-base sm:w-max bg-gradient-to-br from-[#C5FF17] to-[#33E5CF] hover:scale-110 duration-200 ease-in-out text-zinc-800 rounded-lg cursor-pointer font-bold mt-2"
              >
                Wyślij wniosek <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
