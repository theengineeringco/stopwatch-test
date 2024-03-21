import { Red_Hat_Display, Chivo_Mono } from "next/font/google";

export const mono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-redhat-mono",
});

export const sans = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat-display",
});
