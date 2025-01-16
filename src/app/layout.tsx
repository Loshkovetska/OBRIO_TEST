import Providers from "@/app/providers";
import { getQuizInitialState } from "@/lib/utils/get-data";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Obrio Test",
  description: "",
};

export default async function RootLayout(props: React.PropsWithChildren) {
  const initData = await getQuizInitialState();
  return (
    <html
      lang="en"
      className="flex flex-col min-h-screen"
    >
      <body className={`${openSans.variable} antialiased flex flex-col grow`}>
        <Providers initData={initData}>{props.children}</Providers>
      </body>
    </html>
  );
}
