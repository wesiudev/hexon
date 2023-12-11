import Link from "next/link";
import Header from "../components/header";
import { Accents } from "../components/accents/accents";
import Image from "next/image";
import { Locale } from "@/common/i18n/i18n-config";
import { getDictionary } from "@/common/i18n/get-dictionary";
import VerticalScroll from "../components/vertical_scroll";
import Hero from "../components/hero/Hero";
import ScrollTo from "../components/ScrollTo";
export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const sectionWithImages = [
    {
      images: [
        "/assets/homeImages/1.webp",
        "/assets/homeImages/2.webp",
        "/assets/homeImages/3.webp",
        "/assets/homeImages/4.webp",
      ],
      h1: dictionary.Homepage.capture_h1,
      h2: dictionary.Homepage.capture_h2,
      p: dictionary.Homepage.capture_p,
    },
    {
      images: [
        "/assets/homeImages/5.webp",
        "/assets/homeImages/6.webp",
        "/assets/homeImages/7.webp",
        "/assets/homeImages/8.webp",
      ],
      h1: dictionary.Homepage.connect_h1,
      h2: dictionary.Homepage.connect_h2,
      p: dictionary.Homepage.connect_p,
    },
    {
      images: [
        "/assets/homeImages/9.webp",
        "/assets/homeImages/10.webp",
        "/assets/homeImages/11.webp",
        "/assets/homeImages/12.webp",
      ],
      h1: dictionary.Homepage.create_h1,
      h2: dictionary.Homepage.create_h2,
      p: dictionary.Homepage.create_p,
    },
    {
      images: [
        "/assets/homeImages/13.webp",
        "/assets/homeImages/14.webp",
        "/assets/homeImages/15.webp",
        "/assets/homeImages/16.webp",
      ],
      h1: dictionary.Homepage.explore_h1,
      h2: dictionary.Homepage.explore_h2,
      p: dictionary.Homepage.explore_p,
    },
  ];
  const sectionWithUseCases = [
    {
      h1: dictionary.Homepage.inspiration_drawing_h1,
      h2: dictionary.Homepage.inspiration_drawing_h2,
    },
    {
      h1: dictionary.Homepage.inspiration_painting_h1,
      h2: dictionary.Homepage.inspiration_painting_h2,
    },
    {
      h1: dictionary.Homepage.social_media_h1,
      h2: dictionary.Homepage.social_media_h2,
    },
    {
      h1: dictionary.Homepage.educational_h1,
      h2: dictionary.Homepage.educational_h2,
    },
    {
      h1: dictionary.Homepage.marketing_h1,
      h2: dictionary.Homepage.marketing_h2,
    },
    {
      h1: dictionary.Homepage.books_covers_h1,
      h2: dictionary.Homepage.books_covers_h2,
    },
    {
      h1: dictionary.Homepage.interior_design_h1,
      h2: dictionary.Homepage.interior_design_h2,
    },
    {
      h1: dictionary.Homepage.merchandise_h1,
      h2: dictionary.Homepage.merchandise_h2,
    },
    {
      h1: dictionary.Homepage.development_h1,
      h2: dictionary.Homepage.development_h2,
    },
  ];
  const sectionWithIndividuals = [
    {
      src: "/assets/images/home_page_images/decocanva_use_case_art.png",
      h1: dictionary.Homepage.artists_h1,
      h2: dictionary.Homepage.artists_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_design.png",
      h1: dictionary.Homepage.designers_h1,
      h2: dictionary.Homepage.designers_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_educators.png",
      h1: dictionary.Homepage.educators_h1,
      h2: dictionary.Homepage.educators_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_students.png",
      h1: dictionary.Homepage.students_h1,
      h2: dictionary.Homepage.students_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_event_planners.png",
      h1: dictionary.Homepage.event_planners_h1,
      h2: dictionary.Homepage.event_planners_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_influencers.png",
      h1: dictionary.Homepage.influencers_h1,
      h2: dictionary.Homepage.influencers_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_musicans.png",
      h1: dictionary.Homepage.writers_musicans_h1,
      h2: dictionary.Homepage.writers_musicans_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_home_design.png",
      h1: dictionary.Homepage.home_decor_h1,
      h2: dictionary.Homepage.home_decor_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_workers.png",
      h1: dictionary.Homepage.entrepreneurs_h1,
      h2: dictionary.Homepage.entrepreneurs_h2,
    },
    {
      src: "/assets/images/home_page_images/decocanva_use_case_everyone.png",
      h1: dictionary.Homepage.everyone_h1,
      h2: dictionary.Homepage.everyone_h2,
    },
  ];
  return (
    <div className="font-sans relative h-max w-full bg-gradient-to-br from-zinc-900  to-purple-900 bg-opacity-50">
      <div className="justify-evenly h-screen lg:mt-0 w-screen mx-0 sm:mx-auto flex flex-col sm:w-4/5 lg:w-3/4 relative">
        <div className="z-[30] fixed h-screen w-screen left-0 top-0 ">
          <Hero />
        </div>
        <h1 className="z-50">
          <div className="text-[12vw] sm:text-[10vw] xl:text-9xl text-gray-50 font-bold text-center sm:text-left drop-shadow-md shadow-black">
            Deco<span className="">canva </span>
          </div>
          <div className="font-light mt-3 text-xl sm:text-2xl lg:text-3xl w-4/5 lg:w-3/4 text-gray-50 text-center sm:text-left z-30  mx-auto sm:mx-0">
            <span className="text-white drop-shadow-md shadow-black">
              {" "}
              {dictionary.Homepage.join}
            </span>
          </div>
          <div className="flex z-30 w-full space-x-3 justify-center items-center sm:w-max lg:mt-8 mx-auto sm:mx-0">
            <ScrollTo
              title={dictionary.Homepage.read_more}
              destination="about"
            />

            <Link
              href={`/${params.lang}/auth`}
              className="py-3 px-5 w-max sm:w-auto bg-gradient-to-br from-purple-600 to-rose-500 hover:scale-110 duration-200 ease-in-out text-white rounded-lg sm:text-xl  cursor-pointer"
            >
              {" "}
              {dictionary.LoginPage.create_an_account}
            </Link>
          </div>
        </h1>
      </div>
      <main className="font-sans overflow-hidden relative items-center min-h-screen  px-3 lg:px-0 grid grid-cols-1">
        <Header dictionary={dictionary} />
        <Accents />
        <section
          className={`duration-[750ms] w-full h-max bg-gradient-to-b from-purple-900 to-transparent z-50`}
        >
          <div className="w-[90vw] sm:w-3/4 mx-auto text-xl sm:text-2xl lg:text-3xl flex flex-col mt-12 bg-white px-3 xl:px-12 pt-20 rounded-t-md relative text-zinc-700 drop-shadow-md shadow-black">
            <button className="absolute -top-12 left-0" name="about"></button>
            <span className="opacity-75 w-16 h-16 xl:w-20 xl:h-20 rounded-full absolute from-purple-600 to-purple-800 bg-gradient-to-br shadow-sm shadow-black left-16 top-16" />
            <span className="opacity-75 w-8 h-8 rounded-full absolute from-purple-600 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black top-8 left-8" />
            <span className="opacity-75 w-8 h-8  absolute  rotate-45 from-purple-600 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black top-8 right-8" />
            <h2 className="text-3xl lg:text-5xl text-zinc-700 drop-shadow-md shadow-black italic font-semibold mt-24 mb-6 text-center px-0 lx:px-12">
              {dictionary.Homepage.hero}
              {""}{" "}
              <span className="text-purple-600">
                {dictionary.Homepage.decocava}
              </span>
            </h2>
            <div className="grid grid-cols-1">
              {sectionWithImages.map((item: any, i: any) => (
                <div
                  key={i}
                  className={`flex flex-col xl:flex-row w-full justify-between rounded-lg my-6 ${
                    i % 2 !== 0 ? "xl:flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={` prose text-zinc-700 drop-shadow-md shadow-black h-full w-full flex flex-col  justify-center mx-auto font-sans text-center mb-12 xl:mb-0 ${
                      i % 2 !== 0 ? "xl:pl-6" : "xl:pr-6"
                    } `}
                  >
                    <h2 className="!text-2xl lg:!text-4xl text-zinc-700 drop-shadow-md shadow-black">
                      {item.h1}
                    </h2>
                    <p className="!text-lg lg:!text-2xl italic -mt-3 text-white bg-purple-400 text-center">
                      {item.h2}
                    </p>
                    <p className="text-zinc-700 drop-shadow-md shadow-black">
                      {item.p}
                    </p>
                  </div>
                  <div className="h-max grid grid-cols-2 gap-3 aspect-square w-full my-auto">
                    {item.images.map((image: any, i: any) => (
                      <div key={i} className="rounded-xl overflow-hidden">
                        <Image
                          src={image}
                          width={512}
                          height={512}
                          alt={
                            item.h1 + "generated with image generator decocanva"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <h2 className=" justify-center text-3xl mx-auto text-white drop-shadow-md shadow-black bg-purple-400 w-full text-center my-12 font-bold italic lg:text-5xl py-2 flex flex-row items-center">
                {dictionary.Homepage.easier_h1}
              </h2>
              <p className="text-zinc-700 drop-shadow-md shadow-black mb-6 text-lg lg:text-2xl">
                {dictionary.Homepage.easier_h2}
              </p>
              <Image
                src="/assets/images/home_page_images/decocanva_main_image.png"
                width={1024}
                height={1024}
                alt="Unleash your creativity and transform your ideas into stunning
                visual masterpieces with AI Generator Decocanva"
                className="rounded-xl drop-shadow-md  shadow-black w-full h-max block lg:hidden"
              />
              <Image
                src="/assets/images/home_page_images/playful_characters.png"
                width={1024}
                height={1024}
                alt="Unleash your creativity and transform your ideas into stunning
                visual masterpieces with AI Generator Decocanva"
                className="rounded-xl drop-shadow-md shadow-black w-full h-max hidden lg:block"
              />
            </div>
            <div className="grid grid-cols-1 my-12">
              {sectionWithIndividuals.map((item: any, i: any) => (
                <div
                  key={i}
                  className={`flex flex-col xl:flex-row w-full justify-between rounded-lg my-6 ${
                    i % 2 !== 0 ? "xl:flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`prose text-zinc-700 drop-shadow-md shadow-black h-full w-full flex flex-col mx-auto justify-center font-sans mb-12 xl:mb-0 ${
                      i % 2 !== 0
                        ? "xl:pl-6 text-center xl:text-right"
                        : "xl:pr-6 text-center xl:text-left"
                    } `}
                  >
                    <h2 className="!text-4xl lg:!text-6xl text-zinc-700 drop-shadow-md shadow-black">
                      {item.h1}
                    </h2>
                    <p className="!text-lg lg:!text-2xl italic -mt-3 text-zinc-700 drop-shadow-md shadow-black ">
                      {item.h2}
                    </p>
                  </div>
                  <div className="h-max">
                    <Image
                      src={item.src}
                      width={512}
                      height={512}
                      alt={item.h1 + " image by decocanva team"}
                      className="rounded-xl drop-shadow-md  shadow-black w-full aspect-square"
                    />
                  </div>
                </div>
              ))}
            </div>
            <h2 className=" justify-center text-3xl mx-auto text-white drop-shadow-md shadow-black bg-purple-400 w-full text-center my-12 font-bold italic lg:text-5xl py-2 flex flex-row items-center">
              {dictionary.Homepage.capabilities_h1}
            </h2>
            <p className="!text-lg lg:!text-2xl italic -mt-3 text-zinc-700 drop-shadow-md shadow-black ">
              {dictionary.Homepage.capabilities_h2}
            </p>
            <VerticalScroll sectionWithUseCases={sectionWithUseCases} />
          </div>
          <div className="h-screen flex items-center flex-col w-screen justify-center text-center text-white">
            authors:{" "}
            <ul>
              <li>
                <Link
                  href="https://wesiu.dev"
                  className="text-green-400 font-bold"
                >
                  {" "}
                  wesiu.dev
                </Link>
              </li>
              <li>
                <Link
                  href="https://quixy.pl"
                  className="text-yellow-400 font-bold"
                >
                  Quixy
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
