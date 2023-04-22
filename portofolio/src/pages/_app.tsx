import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NavBar } from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
     
      </main>
    </>
  );
}
