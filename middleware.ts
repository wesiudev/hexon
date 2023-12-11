import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./common/i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore files in the public folder
  if (/^\/public\//.test(pathname)) {
    return;
  }

  // Ignore specific paths
  const ignoredPaths = [
    "/manifest.json",
    "/favicon.ico",
    // Add other paths as needed
  ];

  if (ignoredPaths.some((path) => pathname.startsWith(path))) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // If no supported locale is found, use the default locale
    const targetLocale = locale || i18n.defaultLocale;

    // Build the new URL with the detected or default locale
    const newUrl = new URL(
      `${request.nextUrl.origin}/${targetLocale}${pathname}`
    );

    // Redirect to the new URL
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  // Adjust the matcher to include paths that should be handled by the middleware
  matcher: [
    "/((?!api|_next/static|_next/public/assets|_ipx|_next/_ipx|_ipx/w_640,q_75|_next/_ipx/w_640,q_75|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
