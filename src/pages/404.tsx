import Head from "next/head";
import Link from "next/link";
import React from "react";

const errorPage = () => {
  return (
    <>
     <Head>
        <title>404 Error</title>
        <meta name="description" content="error"></meta>
      </Head>
      
      <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
        <h1 className="text-6xl text-primary dark:text-primaryDark xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl">404</h1>
        <h3 className="text-3xl dark:text-light xl:!text-2xl lg:!text-xl md:!text-lg  sm:!text-md">Page not found</h3>
        <p className="text-3xl dark:text-light xl:!text-2xl lg:!text-xl md:!text-lg  sm:!text-sm"> The URL of the page was not found. Please try again</p>
        <div className="flex space-x-2">
            <Link href="/" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base">Go Home</Link>
        </div>
      </div>
    </>
  );
};

export default errorPage