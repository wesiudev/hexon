//READY TO DEPLOY
import { Providers } from "@/common/redux/Provider";
import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { FAQPage, Question } from "schema-dts";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  // fetch data
  const dictionary = await getDictionary(params.lang);
  if (dictionary) {
    const title = dictionary.Seo?.title;
    const description = dictionary.Seo?.description;
    const keywords = dictionary.Seo?.keywords;
    const faqQuestions: Question[] =
      dictionary.Faq?.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })) ?? [];

    type CustomFAQPage = FAQPage & {
      "@context": string;
    };

    const faqPage: CustomFAQPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqQuestions,
    };

    return {
      title,
      description,
      keywords,
      verification: {
        google: "google85185d3abec28326.html",
      },
      icon: "/favicon.ico",
      openGraph: {
        type: "website",
        url: "https://decocanva.com",
        title,
        description,
        siteName: "Decocanva",
        images: [
          {
            url: "/favicon.ico",
          },
        ],
      },
      schema: [faqPage],
    };
  }
}

export const dynamicParams = false;
export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${cocosharp.variable}`}>
        <Providers>{children}</Providers>
        {/* analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TKFVWD1KMR"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TKFVWD1KMR');
          `}
        </Script>
      </body>
    </html>
  );
}
//font
const cocosharp = localFont({
  src: [
    {
      path: "../../public/fonts/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
