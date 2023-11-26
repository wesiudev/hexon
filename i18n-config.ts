export const i18n = {
  defaultLocale: "pl",
  locales: ["cs", "pl", "en", "de", "nl"],
} as const;
export type Locale = (typeof i18n)["locales"][number];
