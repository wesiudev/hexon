import { getDictionary } from "@/common/i18n/get-dictionary";
import { Locale } from "@/common/i18n/i18n-config";
import Link from "next/link";
import Login from "./Login";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return <Login dictionary={dictionary} />;
}
