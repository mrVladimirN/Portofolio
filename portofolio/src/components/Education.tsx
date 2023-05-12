import React, { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./Licon";
interface DetailsEducationType {
  type: string;
  time: string;
  info?: string;
  grade?: string;
  place: string;
}
export const DetailsEducation = ({
  type,
  time,
  info,
  place,
  grade,
}:DetailsEducationType) => {
  const ref = useRef(null);
  return (
    <li
      key={type}
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
        {grade ? (
          <p className="font-medium w-full md:text-sm"><b>Final grade: {grade}</b></p>
        ) : (
          <></>
        )}
      </motion.div>
    </li>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
         
          <DetailsEducation
            type="Master of Software Engineering"
            time="2020-2022"
            place="Polytehnic University of Timisoara"
            info= "Relevant courses including Advance Databases, Reinforcement Learning, Deep Learning, Advance Web Development"
          />
          <DetailsEducation
            type="Bachelor of Computers Information Technology"
            time="2016-2020"
            place="Polytehnic University of Timisoara"
            info = "Relevant courses including Data Structures and Algorithms, Computer Systems Engineering"
          />
        </ul>
      </div>
    </div>
  );
};
