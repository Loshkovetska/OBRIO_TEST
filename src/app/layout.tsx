import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OBRIO Test",
  description: "",
};

export default async function RootLayout(props: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className="flex flex-col min-h-screen"
    >
      <body className={`${openSans.variable} antialiased flex flex-col grow`}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
