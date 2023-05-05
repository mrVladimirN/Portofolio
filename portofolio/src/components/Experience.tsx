import React, { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./Licon";
import { DetailsEducation } from "./Education";

export interface IDetails {
  position?: string;
  company?: string;
  companyLink?: string;
  time?: string;
  work?: string;
  grade?: string;
  skills?: string;
}
export const DetailsExperience: React.FC<IDetails> = ({
  position,
  company,
  companyLink,
  time,
  work,
  skills,
}) => {
  const ref = useRef(null);
  return (
    <li
    key={company}
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <p className="font-medium w-full md:text-sm">
        <b>Skills: {skills}</b>
        </p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
      
          <DetailsExperience
            position="Backend Developer"
            company="SoftNRG"
            companyLink="https://www.soft-nrg.de/"
            time="2021-Present"
            work='I work with a variety of technologies, including message broker
            in order to enable communication between different
            components and microservices.
            Writing clean and readable code, participating in architecture
            projects, and building scalable systems.
            I write libraries and tests to ensure high-quality code that meets
            stakeholder requirements.'
            skills= "MongoDB, TypeScript, Javascript, Node, Kafka, Docker, Cucumber"
          />
            <DetailsEducation
            type="Teaching Assistent"
            time="2020-Present"
            place="Polytehnic University of Timisoara"
            info = "As a teaching assistant I have taught the following laboratories: Software Validation and Verification and The Foundations of AI"
          />
          <DetailsExperience
            position="Junior Software Developer"
            company="Nokia"
            companyLink="https://www.nokia.com"
            time="2019-2021"
            work="I've been responsible for designing, developing, and executing
            integration test plans that validate the end-to-end functionality
            also understanding the CI, CD pipeline."
            skills="TTCN3, C++, Python"          />
          <DetailsExperience
            position="Database Administrator Internship"
            company="Continental"
            companyLink="https://www.continental.com"
            time="2018-2019"
            work="I had the opportunity to work with SQL and gain valuable skills in
            database management and optimization."
            skills="SQL"
          />
        </ul>
      </div>
    </div>
  );
};
