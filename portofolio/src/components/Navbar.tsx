import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import {
  GitHubIcon,
  LinkedinIcon,
  MediumIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";
import { motion } from "framer-motion";

interface ICustomLink {
  href: string;
  title: string;
  className?: string;
  toggle?: () => void; //for mobile
}
const CustomLink: React.FC<ICustomLink> = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const NavBar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/artickes" title="Articles" className="mr-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <YoutubeIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TikTokIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <MediumIcon />
          </motion.a>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};
