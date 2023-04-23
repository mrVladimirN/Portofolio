import React, { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./Licon";
import { IDetails } from "./Experience";
interface IDetailsEducation {
  type: string;
  time: string;
  info?: string;
  grade?: string;
  place: string;
}
export const DetailsEducation: React.FC<IDetailsEducation> = ({
  type,
  time,
  info,
  place,
  grade,
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
          {type} 
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        {grade? (<p className="font-medium w-full">Final grade: {grade}</p>) : (<></>)}
        
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <DetailsEducation type="Bachelor of Computers Information Technology" time="2016-2020" place="Polytehnic University of Timisoara" grade="10" />
          <DetailsEducation type="Master of Software Engineering" time="2020-2022" place="Polytehnic University of Timisoara" grade="10"/>
          <DetailsEducation type="Teaching Assistent" time="2020-Present" place="Polytehnic University of Timisoara" />
        </ul>
      </div>
    </div>
  );
};
