import type { AppProps } from "next/app";
import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { defaultTheme } from "../theme";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-2G6N6XDNP2" });
  }, []);

  return (
    <ChakraProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
