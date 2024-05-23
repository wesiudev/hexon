import Link from "next/link";
import Image from "next/image";
import Hero from "./components/hero/Hero";
import Header from "./components/header";
import VerticalScroll from "./components/vertical_scroll";
export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="font-sans w-full bg-[#222222] pb-48 h-full">
      <Header view={searchParams?.view} />
      <div className="z-[30] fixed h-screen w-full left-0 top-0">
        <Hero />
      </div>
      <div className="justify-evenly min-h-screen lg:mt-0 w-full mx-0 sm:mx-auto flex flex-col sm:w-4/5 lg:w-3/4 relative">
        {searchParams?.view === "recruitment" && (
          <>
            <Link href="/" className="z-50 relative my-24">
              <Image
                src="/logo-hexon-work.png"
                width={300}
                height={300}
                alt=""
                className="w-[200px] mx-auto"
              />
            </Link>
            <div className=" bg-zinc-800 w-[90vw] mx-auto lg:mx-0 lg:w-full z-[50] relative p-6 lg:p-12">
              <h1 className="text-white font-bold text-3xl lg:text-6xl max-w-[40rem]">
                Rekrutacja na stanowisko{" "}
                <span className="bg-gradient-to-r from-[#B4FC2D] to-[#3EE7C0] bg-clip-text text-transparent">
                  Doracdy Klienta
                </span>
              </h1>
              <h2 className="text-2xl font-bold mt-12">Opis stanowiska:</h2>
              <p className="text-white mt-4 bg-zinc-700 p-3">
                Twoim zadaniem będzie przedstawianie oferty potencjalnym
                klientom dotyczącej dofinansowania na termomodernizację z
                wykorzystaniem OZE dla domów jednorodzinnych i bliźniaków,
                przeprowadzenie wywiadu z klientem oraz finalizowanie umowy.
              </p>
              <h2 className="text-2xl font-bold mt-12">Wymagania:</h2>
              <ul className="text-white mt-4">
                <li className="flex flex-row items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52eba7] mr-2" />
                  Komunikatywność
                </li>
                <li className="flex flex-row items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52eba7] mr-2" />
                  Doświadczenie w branży handlowej
                </li>
                <li className="flex flex-row items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52eba7] mr-2" />
                  Prawo jazdy
                </li>
                <li className="flex flex-row items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52eba7] mr-2" />
                  Zaangażowanie
                </li>
                <li className="flex flex-row items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52eba7] mr-2" />
                  Umiejętność pracy w zespole
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-12">
                Kariera w Hexon - dlaczego warto?
              </h2>

              <p className="text-white mt-4 font-light">
                Mamy za sobą lata sukcesów w realizacji usług OZE, od pomp
                ciepła i klimatyzacji, po panele solarne i instalacje
                fotowoltaiczne. To dopiero początek...
              </p>
              <p className="text-white mt-4 font-light">
                Wierzymy, że dobrze prosperująca firma to efekt przemyślanych
                działań realizowanych przez ludzi z pasją do rozwoju i chęcią
                podnoszenia standardu życia. Od samego początku traktowaliśmy
                każdy sektor działalności jako osobny organizm, który ma inne
                potrzeby i spojrzenie na wykonywanie swoich obowiązków.
              </p>
              <p className="text-white mt-4 font-light">
                Każdy z tych sektorów chce być wysłuchany i zrozumiany, aby jego
                praca była wykonywana z maksymalnym zaangażowaniem i pełną
                satysfakcją. Od powstania naszej firmy kładziemy duży nacisk na
                wspieranie naszych doradców w rozwijaniu kompetencji w zakresie
                perswazji, zarządzania sobą, własnym czasem oraz zespołem. Firma
                wspiera doradców zarówno w kwestiach praktycznych, jak i
                technicznych, z dużym naciskiem na rozwój do poziomu dyrektora.
              </p>
              <h2 className="text-2xl font-bold mt-12">Proces rekrutacyjny:</h2>
              <ul className="text-white mt-4">
                <li className="flex flex-row items-center">
                  <p className="text-[#52eba7] mr-2">1.</p>
                  Spotkanie organizacyjne online
                </li>
                <li className="flex flex-row items-center">
                  {" "}
                  <p className="text-[#52eba7] mr-2">2.</p>
                  Podpisanie umowy
                </li>
                <li className="flex flex-row items-center">
                  {" "}
                  <p className="text-[#52eba7] mr-2">3.</p>
                  Szkolenie wdrożeniowe na miejscu
                </li>
              </ul>
            </div>
          </>
        )}
        {!searchParams?.view && (
          <div className="mx-auto grid lg:grid-cols-2">
            <h1 className="z-50 bg-zinc-800 bg-opacity-80 p-6">
              <Image
                src="/logo-hexon-work.png"
                width={400}
                height={400}
                alt=""
                className="mx-auto lg:mx-0 w-3/4 sm:w-[400px]"
              />
              <div className="font-light mt-12 text-base lg:text-lg xl:text-xl sm:max-w-[30rem] lg:max-w-[50rem] text-gray-50 text-center max-w-[40rem] lg:text-left z-30  mx-auto sm:mx-0">
                <span className="text-white drop-shadow-md shadow-black italic ">
                  Doradztwo na każdym etapie dofinansowania termomodernizacji
                  budynków.
                </span>
              </div>
              <div className="flex flex-col-reverse xl:flex-row z-30 w-full lg:space-x-3 justify-center items-center sm:w-max mt-12 mx-auto lg:mx-0">
                <Link
                  href={`/?view=recruitment`}
                  className="py-3 px-5 text-sm lg:text-base xl:pl-0 mt-4 xl:mt-0 w-max sm:w-auto hover:scale-110 duration-200 in-out text-white rounded-lg cursor-pointer"
                >
                  ZOSTAŃ DORADCĄ
                </Link>

                <Link
                  href={`#`}
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
        )}
      </div>
      {!searchParams?.view && (
        <main className="font-sans overflow-hidden relative items-center min-h-screen px-3 lg:px-0 grid grid-cols-1">
          <section className={`w-full h-max z-50`}>
            <div className="w-[90vw] sm:w-3/4 mx-auto text-xl sm:text-2xl lg:text-3xl flex flex-col mt-12 bg-white px-3 xl:px-12 py-3 xl:py-12 rounded-md relative text-zinc-700 drop-shadow-md shadow-black">
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
                  Jesteśmy liderem w branży OZE - Hexon. Zafascynowani
                  termomodernizacjami, fotowoltaiką i pompami ciepła, doskonale
                  zdawaliśmy sobie sprawę, że to rozwiązania, które skłonią
                  ludzi do rezygnacji z tradycyjnych źródeł ciepła. I mieliśmy
                  rację. Liczba domów z instalacjami fotowoltaicznymi i pompami
                  ciepła rośnie z każdym dniem.
                </p>
                <div className="mt-3">
                  <span className="text-base">W skrócie: </span>
                  <span className="text-base font-bold">
                    rzetelność, innowacyjność, odpowiedzialność
                  </span>
                </div>
              </div>
              <div className="mt-6">
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
      )}
    </div>
  );
}
