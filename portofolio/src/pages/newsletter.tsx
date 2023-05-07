import { Layout } from "@/components/Layout";
import { NewsLetterForm } from "@/components/NewsLetter";
import { TransitionEffect } from "@/components/TransitionEffect";
import Head from "next/head";
const newsLetter = () => {
  return (
    <>
      <Head>
        <title>Newsletter</title>
        <meta name="description" content="Newsletter"></meta>
      </Head>
      {/* <TransitionEffect/> */}
      <Layout className="pt-16">
        <NewsLetterForm></NewsLetterForm>
      </Layout>
    </>
  );
};

export default newsLetter;
