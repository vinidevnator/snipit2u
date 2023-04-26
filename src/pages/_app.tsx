import type { AppProps } from "next/app";
import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { defaultTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
