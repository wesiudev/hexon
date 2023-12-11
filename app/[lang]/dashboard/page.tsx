import Link from "next/link";
import Dashboard from "./Dashboard";
import { Locale } from "@/common/i18n/i18n-config";
import { getDictionary } from "@/common/i18n/get-dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return <Dashboard lang={params.lang} dictionary={dictionary} />;
}
