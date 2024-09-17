import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/Header";
import { Open_Sans, Roboto } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Github Profile",
  description: "DEV2DEV",
};

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
})

const openSans = Open_Sans({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-open-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${roboto.variable}`}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
