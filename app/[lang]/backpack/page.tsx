import Backpack from "./Backpack";
import { Locale } from "@/i18n-config";

export default function Page({ params }: { params: { lang: Locale } }) {
  return <Backpack lang={params.lang} />;
}
