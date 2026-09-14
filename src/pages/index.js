import * as React from "react";
import Home from "../components/home";
import {
  consumeRedirected,
  getStoredLocale,
  localePath,
  markRedirected,
} from "../i18n";

// On the first visit, send visitors whose browser is not set to Japanese to
// the English page. A locale chosen manually via the header link is stored
// and always wins over the browser setting. The redirect happens at most
// once per session so it can never loop.
const IndexPage = () => {
  React.useEffect(() => {
    if (consumeRedirected()) return;
    const stored = getStoredLocale();
    if (stored === "ja") return;
    const language = navigator.language || "";
    if (stored === "en" || (language && !language.toLowerCase().startsWith("ja"))) {
      markRedirected();
      window.location.replace(localePath("en"));
    }
  }, []);

  return <Home locale="ja" />;
};

export default IndexPage;
