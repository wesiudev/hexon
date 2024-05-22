import Link from "next/link";
import Image from "next/image";
import Hero from "./components/hero/Hero";
import Header from "./components/header";
import VerticalScroll from "./components/vertical_scroll";
export default async function Home() {
  return (
    <div className="font-sans relative h-max w-full bg-[#222222] pb-48">
      <div className="justify-evenly h-screen lg:mt-0 w-full mx-0 sm:mx-auto flex flex-col sm:w-4/5 lg:w-3/4 relative">
        <div className="z-[30] fixed h-screen w-full left-0 top-0 ">
          <Hero />
        </div>
        <div className="mx-auto grid lg:grid-cols-2">
          <h1 className="z-50">
            <Image
              src="/logo-hexon-work.png"
              width={400}
              height={400}
              alt=""
              className="mx-auto lg:mx-0 w-3/4 sm:w-[400px]"
            />
            <div className="font-light mt-12 text-base lg:text-lg xl:text-xl lg:max-w-[50rem] text-gray-50 text-center max-w-[40rem] lg:text-left z-30  mx-auto sm:mx-0">
              <span className="text-white drop-shadow-md shadow-black italic">
                Doradztwo na każdym etapie dofinansowania termomodernizacji
                budynków.
              </span>
            </div>
            <div className="flex flex-col-reverse lg:flex-row z-30 w-full lg:space-x-3 justify-center items-center sm:w-max mt-12 mx-auto lg:mx-0">
              <Link
                target="_blank"
                href={`https://hexon.eco`}
                className="py-3 px-5 text-sm lg:text-base sm:pl-0 mt-4 lg:mt-0 w-max sm:w-auto hover:scale-110 duration-200 in-out text-white rounded-lg cursor-pointer"
              >
                ZOSTAŃ DORADCĄ
              </Link>

              <Link
                target="_blank"
                href={`https://hexon.eco`}
                className="py-3 px-5 w-max text-base sm:w-auto bg-gradient-to-br from-[#C5FF17] to-[#33E5CF] hover:scale-110 duration-200 ease-in-out text-zinc-800 rounded-lg cursor-pointer font-bold"
              >
                DOFINANSOWANIE
              </Link>
            </div>
          </h1>
          <div className="hidden lg:flex items-end lg:justify-end xl:justify-center w-full">
            <Image
              src="/cieplo.png"
              width={500}
              height={500}
              alt=""
              className="w-[320px] animate-left-to-right"
            />
          </div>
        </div>
      </div>
      <main className="font-sans overflow-hidden relative items-center min-h-screen  px-3 lg:px-0 grid grid-cols-1">
        <Header />
        <section className={`w-full h-max z-50`}>
          <div className="w-[90vw] sm:w-3/4 mx-auto text-xl sm:text-2xl lg:text-3xl flex flex-col mt-12 bg-white px-3 xl:px-12 pt-12 rounded-t-md relative text-zinc-700 drop-shadow-md shadow-black">
            <button className="absolute -top-12 left-0" name="about"></button>
            <div className="">
              <Image
                src="/logo-hexon2.png"
                width={400}
                height={400}
                alt=""
                className="max-w-[300px] mx-auto"
              />
              <h2 className="text-3xl lg:text-4xl font-bold mt-12">
                Kim jesteśmy?
              </h2>
              <p className="text-base font-light max-w-[45rem] mt-4 text-justify lg:text-left">
                Jesteśmy liderem w branży OZE, <b>Hexon</b>. Zafascynowanymi
                termomodernizacjami, fotowoltaiką i pompami ciepła, doskonale
                zdawaliśmy sobie sprawę, że to rozwiązania, które sprawią, że
                ludzie zaczną chcieć odchodzić od &quot;klasycznych&quot; źródeł
                ciepła. Zresztą... Nie myliliśmy się. Ilość domów z instalacjami
                fotowoltaicznymi czy pompami ciepła rośnie z każdym dniem.
              </p>
              <div className="mt-3">
                <span className="text-base">W skrócie: </span>
                <span className="text-base font-bold">
                  rzetelność, innowacyjność, odpowiedzialność
                </span>
              </div>
            </div>
            <div className="my-12">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Na co otrzymasz dofinansowanie?
              </h2>
              <ul className="mt-6 space-y-3 flex flex-col text-sm">
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Docieplenie dachu i elewacji
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Wymiana pieca
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Wymiana stolarki okiennej
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Wymiana drzwi
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Fotowoltaika
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Pompa ciepła lub pellet
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Rekuperacja
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
