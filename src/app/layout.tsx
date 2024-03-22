import type { Metadata } from "next";
import { ColorModeScript } from "@chakra-ui/react";

import { Providers } from "./providers";
import { sans } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Stopwatch App",
  description: "Flow Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
