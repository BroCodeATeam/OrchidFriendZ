import React from "react";
import "../styles/globals.css";
import Topnav from "../components/navigation/Topnav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topnav />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
