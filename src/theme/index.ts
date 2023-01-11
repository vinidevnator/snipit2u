import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1F222A",
        color: "#fff",
      },
    },
  },
});
