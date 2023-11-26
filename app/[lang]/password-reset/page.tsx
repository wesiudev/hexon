import Hero from "@/app/components/hero/Hero";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import ResetPasswordForm from "./ResetPasswordForm";
import { auth } from "@/common/firebase";

export default function Page({
  params,
  searchParams,
}: {
  params: { lang: Locale; id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
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
      <ResetPasswordForm />
    </section>
  );
}
