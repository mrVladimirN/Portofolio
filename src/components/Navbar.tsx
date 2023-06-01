import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import {
  DarkMoonIcon,
  GitHubIcon,
  LinkedinIcon,
  MediumIcon,
  SunIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitcher } from "./hooks/useThemeSwitcher";


const CustomLink = ({ href, title, className = "" }: CustomLinkType) => {
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
const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLinkType) => {
  const router = useRouter();
  const handleClick = () => {
    if (toggle) {
      toggle();
    }
    router.push(href);
  };
  return (
    <a href={href}>
      <button
        className={`${className} relative group text-light dark:text-dark my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-light 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
        ></span>
      </button>
    </a>
  );
};
export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease  ease-out h-0.5 w-6  rounded-sm  ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mr-4" />
            {/* <CustomLink
              href="/newsletter"
              title="Newsletter"
              className="mr-4"
            /> */}
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TwitterIcon theme={mode} mobile={false}/>
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GitHubIcon theme={mode} mobile={false}/>
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedinIcon theme={mode} mobile={false}/>
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <YoutubeIcon theme={mode} mobile={false}/>
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TikTokIcon theme={mode} mobile={false}/>
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <MediumIcon theme={mode} mobile={false}/>
            </motion.a>
            <button
              onClick={setMode}
              className="ml-3 flex items-center justify-center rounded-full p-1 "
            >
              {mode === "dark" ? (
                <motion.a
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3"
                >
                  <SunIcon />
                </motion.a>
              ) : (
                <motion.a
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3"
                >
                  <DarkMoonIcon />
                </motion.a>
              )}
            </button>
          </nav>
        </div>

        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
    "
          >
            <nav className="flex items-center flex-col justify-center  mt-[-5vw]">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=" "
                toggle={handleClick}
              />
              {/* <CustomMobileLink
                href="/newsletter"
                title="Newsletter"
                className=" "
                toggle={handleClick}
              /> */}
            </nav>
            <nav className="flex items-center justify-center flex-wrap mt-[10vw]">
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <TwitterIcon theme={mode} mobile={true} />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <GitHubIcon theme={mode} mobile={true}/>
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <LinkedinIcon theme={mode} mobile={true}/>
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <YoutubeIcon theme={mode} mobile={true}/>
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <TikTokIcon theme={mode} mobile={true}/>
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <MediumIcon theme={mode} mobile={true}/>
              </motion.a>
            
            </nav>
            <nav className="flex items-center justify-center flex-wrap mt-[10vw]">
              <button
                onClick={setMode}
                className="ml-3 flex items-center justify-center rounded-full p-1 "
              >
                <motion.a
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3"
                >
                  {mode === "dark" ? <SunIcon /> : <DarkMoonIcon />}
                </motion.a>
              </button>
              </nav>
          </motion.div>
        ) : null}
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};
