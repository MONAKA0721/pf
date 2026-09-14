import * as React from "react";
import Home from "../components/home";
import { consumeRedirected } from "../i18n";

const EnglishPage = () => {
  // Landing here means the redirect from "/" succeeded; clear its flag so a
  // later visit to "/" can redirect again.
  React.useEffect(() => {
    consumeRedirected();
  }, []);

  return <Home locale="en" />;
};

export default EnglishPage;
