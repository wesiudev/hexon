import Link from "next/link";
import Dashboard from "./Dashboard";
import { Locale } from "@/i18n-config";

export default function Page({ params }: { params: { lang: Locale } }) {
  return <Dashboard lang={params.lang} />;
}
