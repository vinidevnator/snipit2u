import type { AppProps } from "next/app";
import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { defaultTheme } from "../theme";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import Script from "next/script";

function Snipit2u({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-2G6N6XDNP2" });
  }, []);

  <Script
    async
    strategy="afterInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3721444151635807"
  />;

  return (
    <ChakraProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Snipit2u;
