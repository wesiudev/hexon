"use client";
import {
  FaHome,
  FaPeopleArrows,
  FaRegQuestionCircle,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import Faq from "../faq";
import { useState } from "react";

export default function Header() {
  const [isFaqOpen, setFaqOpen] = useState<boolean>(false);
  const faqs = [
    {
      question: "Co to jest termoocieplenie domu?",
      answer:
        "Termoocieplenie domu to proces polegający na zwiększeniu izolacji termicznej budynku poprzez zastosowanie różnych materiałów izolacyjnych, takich jak styropian, wełna mineralna czy pianka poliuretanowa, w celu zmniejszenia strat ciepła i poprawy efektywności energetycznej.",
    },
    {
      question: "Jakie korzyści przynosi termoocieplenie domu?",
      answer:
        "Termoocieplenie domu przynosi szereg korzyści, w tym zmniejszenie rachunków za ogrzewanie, poprawę komfortu termicznego w pomieszczeniach, redukcję emisji CO2, ograniczenie występowania kondensacji oraz zwiększenie wartości nieruchomości.",
    },
    {
      question: "Jakie są główne metody termoocieplania domu?",
      answer:
        "Główne metody termoocieplania domu obejmują ocieplenie ścian zewnętrznych, stropodachów, podłóg, a także montaż energooszczędnych okien i drzwi. Dodatkowo, można zastosować systemy dociepleń fasad, takie jak ocieplenie lekkie, ocieplenie metodą 'na mokro' czy ocieplenie pianką poliuretanową.",
    },
    {
      question: "Czy termoocieplenie domu można wykonać samodzielnie?",
      answer:
        "Termoocieplenie domu wymaga doświadczenia oraz znajomości odpowiednich technik i materiałów. Choć niektóre prace, takie jak montaż materiałów izolacyjnych w poddaszu, mogą być wykonywane samodzielnie przez właścicieli domów, zazwyczaj zaleca się skorzystanie z usług specjalistów, aby zapewnić prawidłowe wykonanie oraz optymalne rezultaty.",
    },
  ];
  return (
    <header className="fixed left-0 top-6 w-full z-[1000] font-sans">
      <Faq faqs={faqs} isFaqOpen={isFaqOpen} setFaqOpen={setFaqOpen} />
      <div className="w-[98vw] mx-auto flex flex-row justify-end px-6">
        <div className="flex flex-row items-center hover:scale-110 duration-200 cursor-pointer fixed bottom-[63px] w-max px-4 py-2 left-[50%] -translate-x-[50%] bg-gradient-to-br from-[#C5FF17] to-[#33E5CF] text-zinc-800 rounded-t-xl text-xl">
          SKONTAKTUJ SIĘ
        </div>
        <div className="fixed w-full h-16 bottom-0 left-0 flex flex-row items-center justify-evenly text-white bg-gradient-to-r from-zinc-800 via-gray-500 to-zinc-800">
          {[
            {
              href: "#",
              icon: <FaHome className="h-6 w-6 sm:mr-3" />,
              text: "HOME",
            },
            {
              href: "#",
              icon: <FaPeopleArrows className="h-6 w-6 sm:mr-3" />,
              text: <span className="text-white">DOFINANSOWANIE</span>,
            },
          ].map(({ href, icon, text }) => (
            <Link
              key={href}
              href={href}
              className="flex sm:flex-row flex-col items-center justify-center w-full h-full sm:px-12 hover:bg-white hover:bg-opacity-10 duration-200 ease-in-out"
            >
              {icon}
              <span>{text}</span>
            </Link>
          ))}
          <button
            onClick={() => setFaqOpen(true)}
            className="flex sm:flex-row flex-col items-center justify-center w-full h-full sm:px-12 hover:bg-white hover:bg-opacity-10 duration-200 ease-in-out"
          >
            <FaRegQuestionCircle className="h-6 w-6 sm:mr-3" />
            <span>FAQ</span>
          </button>
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center">
          <Link href="#">
            <div className="hover:scale-110 duration-200 ease-in-out flex flex-row items-center bg-gradient-to-br from-[#C5FF17] to-[#33E5CF] border-px rounded-lg px-3 py-2">
              <FaUser className="mr-2 h-5 w-5 text-zinc-800" />
              <span className="text-zinc-800">Dołącz do nas</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
