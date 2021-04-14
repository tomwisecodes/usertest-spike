import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onUsersnapCXLoad = function (api) {
      api.init();
    };
    var script = document.createElement("script");
    script.async = 1;
    script.src =
      "https://widget.usersnap.com/load/6cd26e4a-4d67-4aa1-8b78-15cb7f0bdd7e?onload=onUsersnapCXLoad";
    document.getElementsByTagName("head")[0].appendChild(script);
    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
