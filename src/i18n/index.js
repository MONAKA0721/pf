import * as React from "react";

export const DEFAULT_LOCALE = "ja";
export const LOCALES = ["ja", "en"];

export const LocaleContext = React.createContext(DEFAULT_LOCALE);

export const useLocale = () => React.useContext(LocaleContext);

// Returns the value for the current locale when given an object like
// { ja: "...", en: "..." }; otherwise returns the value as-is.
export const localize = (value, locale) => {
  if (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.prototype.hasOwnProperty.call(value, DEFAULT_LOCALE)
  ) {
    return value[locale] ?? value[DEFAULT_LOCALE];
  }
  return value;
};

export const useT = () => {
  const locale = useLocale();
  return (value) => localize(value, locale);
};

export const localePath = (locale) => (locale === DEFAULT_LOCALE ? "/" : `/${locale}/`);

const STORAGE_KEY = "locale";

export const getStoredLocale = () => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return LOCALES.includes(value) ? value : null;
  } catch (e) {
    return null;
  }
};

export const storeLocale = (locale) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch (e) {
    // localStorage may be unavailable (private mode, etc.); ignore.
  }
};
