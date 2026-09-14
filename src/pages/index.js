import * as React from "react";
import Home from "../components/home";
import { getStoredLocale, localePath } from "../i18n";

// On the first visit, send visitors whose browser is not set to Japanese to
// the English page. A locale chosen manually via the header link is stored
// and always wins over the browser setting.
const IndexPage = () => {
  React.useEffect(() => {
    const stored = getStoredLocale();
    if (stored === "ja") return;
    const language = navigator.language || "";
    if (stored === "en" || (language && !language.toLowerCase().startsWith("ja"))) {
      window.location.replace(localePath("en"));
    }
  }, []);

  return <Home locale="ja" />;
};

export default IndexPage;
