export const DEFAULT_LOCALE = "ja";
export const LOCALES = ["ja", "en"];

// Returns the value for the given locale when given an object like
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

export const localePath = (locale) => (locale === DEFAULT_LOCALE ? "/" : `/${locale}/`);
