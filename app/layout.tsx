import type { Metadata } from "next";
import "./globals.css";

import { Fugaz_One } from "next/font/google";
import Link from "next/link";

import AuthProvider from "../context/AuthContext";
import Head from "./head";

const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Broodl",
  description: "Track you mood, everyday.",
};

const header = (
  <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
    <Link href="/">
      <h1 className={"text-base sm:text-lg textGradient " + fugazOne.className}>
        Broodl
      </h1>
    </Link>
    <div className=" flex items-center justify-between">PLACEHOLDER</div>
  </header>
);

const footer = (
  <footer className={" p-4 sm:p-8 grid place-items-center"}>
    <p className={" " + fugazOne.className + " text-indigo-400"}>
      Created By alon2904
    </p>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body className="w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800  ">
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
