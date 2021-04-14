import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onUsersnapCXLoad = function (api) {
      api.init();
    };
    var script = document.createElement("script");
    script.defer = 1;
    script.src =
      "https://widget.usersnap.com/global/load/5b82eb0e-ab1d-4866-b2e7-da95ecb512ab?onload=onUsersnapCXLoad";
    document.getElementsByTagName("head")[0].appendChild(script);
    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
