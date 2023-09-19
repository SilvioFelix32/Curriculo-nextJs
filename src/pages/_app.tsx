import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ThemePreferenceProvider from "../context/Theme";
import Cookies from "js-cookie";
import { MainApp } from "../components/MainApp";
//styles
import { GlobalStyles } from "../styles/global";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: AppProps;
}

export default function App({ Component, pageProps }: AppProps) {
  const setDefaultColorTheme = () => {
    const favoriteTheme = Cookies.get("color-theme");

    if (!favoriteTheme) {
      Cookies.set("color-theme", "light", {
        expires: 30,
        path: "/",
      });
    }
  };

  setDefaultColorTheme();

  return (
    <ThemePreferenceProvider>
      <Head>
        <title>Sf-tech</title>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainApp>
        <Component {...pageProps} />
        <GlobalStyles />
      </MainApp>
    </ThemePreferenceProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
