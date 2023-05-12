import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import AI_Image from "../../public/AI_Image.png";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
interface ArticleType {
  img: string | StaticImageData;
  title: string;
  time: string;
  summary?: string;
  link: string;
}
interface MovingImageType {
  img: string | StaticImageData;
  title: string;
  link: string;
}
const FramerImage = motion(Image);
const MovingImg  = ({ img, title, link }:MovingImageType) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLInputElement>(null);

  const handleMouse = (event: { pageX: number }) => {
    if (imgRef && imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  };

  const handleMouseLeave = () => {
    if (imgRef && imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  };
  return (
    <>
      <a
        href={link}
        target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
        <FramerImage
          style={{ x: x, y: y }}
          src={img}
          alt={title}
          ref={imgRef}
          className="z-10 w-96 h-auto hidden absolute rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ></FramerImage>
      </a>
    </>
  );
};

const FeaturedArticle  = ({
  img,
  title,
  time,
  summary,
  link,
}:ArticleType) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2-xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};
const Article  = ({ img, title, time, link }: ArticleType) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img as string} link={link} />
      <span className="text-primary font-semibold pl-4">{time}</span>
    </motion.li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>Vladimirs Articles</title>
        <meta name="description" content="about vladimir"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Software Engineering Articles"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build something"
              summary="Learn how to become a scammer"
              time="9 min read"
              link="/"
              img={AI_Image}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="yeah"
              time="March 22,2023"
              link="/"
              img={AI_Image}
            ></Article>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
