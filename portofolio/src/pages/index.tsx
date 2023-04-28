import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AI_Image from "../../public/AI_Image.png";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { TransitionEffect } from "@/components/TransitionEffect";
export default function Home() {
  return (
    <>
      <Head>
        <title>Vladimirs Portofolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                priority
                src={AI_Image}
                alt="Vladimir"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning vision into reality with code and design"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 !text-xl font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                </Link>
                <Link
                  href="mailto:vladimir.nitu.business@outlook.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
