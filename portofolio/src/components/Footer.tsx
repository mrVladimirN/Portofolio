import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-xl dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Rights</span>
        <div className="flex items-center lg:py-2">
          Deployed with
          <span className="text-primary dark:text-primaryDark text-2xl px-1"> &#9825;</span>
          <a href="https://vercel.com" className="underline underline-offset-2">
            Vercel
          </a>
        </div>
        <Link
          href="/newsletter"
          className="underline underline-offset-2"
        >
          Newsletter
        </Link>
      </Layout>
    </footer>
  );
};
