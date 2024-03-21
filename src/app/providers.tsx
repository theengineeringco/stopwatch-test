"use client";

import { mono, sans } from "@/styles/fonts";
import { ChakraProvider, extendTheme, IconButton } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: true,
  initialColorMode: "dark",
  styles: {
    // global: {
    //   "html, body": {
    //     background: "gray.900",
    //     minHeight: "100vh",
    //     color: "white",
    //     padding: 0,
    //     margin: 0,
    //     boxSizing: "border-box",
    //     fontFamily: sans.style.fontFamily,
    //     fontSize: 16,
    //   },
    // },
  },
  fonts: {
    mono: mono.style.fontFamily,
    body: sans.style.fontFamily,
  },
  fontSizes: {
    "xxx-large": "6rem",
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: "96px",
          w: "96px",
          fontSize: "xx-large",
          px: "32px",
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
