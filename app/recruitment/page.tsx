import Image from "next/image";
import Link from "next/link";
import Hero from "../components/hero/Hero";

export default function Page() {
  return (
    <div className="font-sans w-full bg-[#222222] pb-48 h-full px-48">
      <div className="z-[30] fixed h-screen w-full left-0 top-0">
        <Hero />
      </div>
      <div className="py-24">
        <Link href="/" className="z-50 relative">
          <Image
            src="/logo-hexon-work.png"
            width={300}
            height={300}
            alt=""
            className="w-[200px] mx-auto"
          />
        </Link>
      </div>
      <div className="bg-zinc-800 w-[80vw] mx-auto lg:mx-0 lg:w-full z-[50] relative p-6 lg:p-12">
        <h1 className="text-white font-bold text-3xl lg:text-6xl max-w-[40rem]">
          Rekrutacja na stanowisko{" "}
          <span className="bg-gradient-to-r from-[#B4FC2D] to-[#3EE7C0] bg-clip-text text-transparent">
            Doracdy Klienta
          </span>
        </h1>
        <h2 className="text-2xl font-bold mt-12">Opis stanowiska:</h2>
        <p className="text-white mt-4 bg-zinc-700 p-3">
          Twoim zadaniem będzie przedstawianie oferty potencjalnym klientom
          dotyczącej dofinansowania na termomodernizację z wykorzystaniem OZE
          dla domów jednorodzinnych i bliźniaków, przeprowadzenie wywiadu z
          klientem oraz finalizowanie umowy.
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
          Mamy za sobą lata sukcesów w realizacji usług OZE, od pomp ciepła i
          klimatyzacji, po panele solarne i instalacje fotowoltaiczne. To
          dopiero początek...
        </p>
        <p className="text-white mt-4 font-light">
          Wierzymy, że dobrze prosperująca firma to efekt przemyślanych działań
          realizowanych przez ludzi z pasją do rozwoju i chęcią podnoszenia
          standardu życia. Od samego początku traktowaliśmy każdy sektor
          działalności jako osobny organizm, który ma inne potrzeby i spojrzenie
          na wykonywanie swoich obowiązków.
        </p>
        <p className="text-white mt-4 font-light">
          Każdy z tych sektorów chce być wysłuchany i zrozumiany, aby jego praca
          była wykonywana z maksymalnym zaangażowaniem i pełną satysfakcją. Od
          powstania naszej firmy kładziemy duży nacisk na wspieranie naszych
          doradców w rozwijaniu kompetencji w zakresie perswazji, zarządzania
          sobą, własnym czasem oraz zespołem. Firma wspiera doradców zarówno w
          kwestiach praktycznych, jak i technicznych, z dużym naciskiem na
          rozwój do poziomu dyrektora.
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
    </div>
  );
}
