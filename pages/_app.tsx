import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
