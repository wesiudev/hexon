import "@/styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import AOSInit from "./components/AOS";
import { Providers } from "@/common/redux/Provider";
import ClientFormWrapper from "./components/cta/ClientFormWrapper";
import { Metadata } from "next";

export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${cocosharp.variable} ${gotham.variable}`}>
        <AOSInit />
        <Providers>
          {children}
          <ClientFormWrapper />{" "}
        </Providers>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title:
    "Hexon Group - Dofinansowanie na termomodernizacje budynków | Czyste Powietrze",
  description:
    "Kompleksowa termomodernizacja budynków. Fotowoltaika, pompy ciepła. Specjaliści od dofinansowań. Zyskaj do 136200zł dofinansowania",
  authors: [{ name: "wesiu.dev", url: "https://wesiu.dev" }],
  publisher: "wesiu.dev",
  keywords:
    "dotacje, finansowanie, termomodernizacja, remont, modernizacja energetyczna, oszczędność energii, efektywność energetyczna, wsparcie finansowe, programy rządowe, fundusze unijne, poprawa izolacji, renowacja budynków, energooszczędność, zrównoważony rozwój, dotacje unijne",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};

//font
const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/Gotham-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/GothamBold.ttf",
      weight: "500",
      style: "bold",
    },
  ],
  variable: "--font-gotham",
});
const cocosharp = localFont({
  src: [
    {
      path: "../public/fonts/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
