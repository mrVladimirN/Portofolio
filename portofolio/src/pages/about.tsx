import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/Vladimir_Black.png";
import Image from "next/image";
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
const about = () => {
  return (
    <>
      <Head>
        <title>About Vladimir</title>
        <meta name="description" content="about vladimir"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium"></p>
              <p className="my-4 font-medium"></p>
              <p className="font-medium"></p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8  dark:bg-dark dark:border-light xl:col-span-4 md:order-1"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Vladimir Nitu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-center  justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={new Date().getFullYear() - 2018} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of experience as a Software Engineer
                </h2>
              </div>
              <div className="flex flex-col items-center  justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={new Date().getFullYear() - 2021} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of experience as a Backend Developer
                </h2>
              </div>
              <div className="flex flex-col items-center  justify-center">
                <span className="inline-block text-7xl font-bold"></span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {" "}
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};
export default about;
