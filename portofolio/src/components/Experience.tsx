import React, { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./Licon";

export interface IDetails {
  position?: string;
  company?: string;
  companyLink?: string;
  time?: string;
  work?: string;
  grade?: string;
}
export const DetailsExperience: React.FC<IDetails> = ({
  position,
  company,
  companyLink,
  time,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <DetailsExperience
            position="Database Administrator Internship"
            company="Continental"
            companyLink="https://www.continental.com"
            time="2018-2019"
            work=""
          />
          <DetailsExperience
            position="Junior Software Developer"
            company="Nokia"
            companyLink="https://www.nokia.com"
            time="2019-2021"
            work=""
          />
          <DetailsExperience
            position="Backend Developer"
            company="SoftNRG"
            companyLink="https://www.soft-nrg.de/"
            time="2021-Present"
            work=""
          />
        </ul>
      </div>
    </div>
  );
};
