import Image from "next/image";
import Hero from "./components/hero/Hero";
import Header from "./components/header";
import Cta from "./components/cta/Cta";
import ScrollTo from "./components/ScrollTo";
import Opinions from "./components/opinions/Opinions";

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
        <div className="mx-auto grid lg:grid-cols-2">
          <h1 className="z-50 bg-zinc-800 bg-opacity-80 rounded-xl p-6 flex flex-col justify-center">
            <Image
              src="/logo-hexon2.png"
              width={400}
              height={400}
              alt=""
              className="mx-auto lg:mx-0 w-3/4 sm:w-[300px]"
            />
            <div className="font-light mt-6 text-base lg:text-lg xl:text-xl sm:max-w-[30rem] lg:max-w-[50rem] text-gray-50 text-center max-w-[40rem] lg:text-left z-30  mx-auto sm:mx-0">
              <span className="text-white drop-shadow-md shadow-black italic ">
                Doradztwo na każdym etapie dofinansowania termomodernizacji
                budynków.
              </span>
            </div>
            <div className="flex flex-col-reverse xl:flex-row z-30 w-full justify-center items-center sm:w-max mt-12 mx-auto lg:mx-0">
              <Cta styleType="white" label="ZŁÓŻ WNIOSEK" />
              <ScrollTo />
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

      <main className="font-sans overflow-hidden relative items-center min-h-screen px-3 lg:px-0 grid grid-cols-1 z-30">
        <section className={`w-full h-max z-50`}>
          <div
            id="about"
            className="w-[90vw] sm:w-3/4 mx-auto text-xl sm:text-2xl lg:text-3xl flex flex-col mt-12 bg-white px-6 xl:px-12 py-3 xl:py-12 rounded-md relative text-zinc-700 drop-shadow-md shadow-black"
          >
            <div>
              <Image
                src="/logo-hexon2.png"
                width={400}
                height={400}
                alt=""
                className="max-w-[250px] mx-auto lg:mx-0"
              />
              <h2 className="text-3xl lg:text-4xl font-bold mt-12">
                Kim jesteśmy?
              </h2>
              <p className="text-base font-light max-w-[45rem] mt-4 text-justify lg:text-left">
                Jesteśmy liderem w branży OZE - Hexon. Zafascynowani
                termomodernizacjami, fotowoltaiką i pompami ciepła, doskonale
                zdawaliśmy sobie sprawę, że to rozwiązania, które skłonią ludzi
                do rezygnacji z tradycyjnych źródeł ciepła. I mieliśmy rację.
                Liczba domów z instalacjami fotowoltaicznymi i pompami ciepła
                rośnie z każdym dniem.
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
            <div className="mt-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Progi dofinansowania:
              </h2>
              <ul className="mt-6 space-y-3 flex flex-col text-sm">
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Próg II (do 99 tys. zł)
                </li>
                <li className="flex flex-row items-center">
                  <div className="bg-[#52eba7] h-2 w-2 rounded-full mr-2"></div>
                  Próg III (do 136 tys. zł)
                </li>
              </ul>
            </div>
            <Cta styleType="colored" label="ZŁÓŻ WNIOSEK" />
            <div className="mt-12">
              <Opinions />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
