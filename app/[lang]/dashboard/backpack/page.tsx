import Backpack from "./Backpack";
import { Locale } from "@/common/i18n/i18n-config";

export default async function Page({ params }: { params: { lang: Locale } }) {
  return <Backpack lang={params.lang} />;
}
