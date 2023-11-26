import { Locale } from "@/i18n-config";
import EmptyBackpack from "./EmptyBackpack";
import { getDictionary } from "@/get-dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return <EmptyBackpack lang={params.lang} dictionary={dictionary} />;
}
