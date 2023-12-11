import Link from "next/link";
import RenderFromText from "./RenderFromText";
import { Locale } from "@/common/i18n/i18n-config";
import { getDictionary } from "@/common/i18n/get-dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return <RenderFromText lang={params.lang} dictionary={dictionary} />;
}
