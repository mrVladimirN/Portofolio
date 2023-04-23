import React from "react";
import { motion } from "framer-motion";
interface ISkill {
  name: string;
  x: string;
  y: string;
}
const Skill: React.FC<ISkill> = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};
export const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="MongoDB" x="-10vw" y="-2vw"></Skill>
        <Skill name="Node" x="0vw" y="-10vw"></Skill>
        <Skill name="Typescript" x="13vw" y="7vw"></Skill>
        <Skill name="Javascript" x="-13vw" y="7vw"></Skill>
        <Skill name="SQL" x="10vw" y="-2vw"></Skill>
        <Skill name="HTML" x="0vw" y="14vw"></Skill>
        <Skill name="CSS" x="0vw" y="-14vw"></Skill>
        <Skill name="Angular" x="23vw" y="0vw"></Skill>
        <Skill name="React" x="-23vw" y="0vw"></Skill>
        <Skill name="Github" x="17vw" y="13vw"></Skill>
        <Skill name="Docker" x="-17vw" y="-13vw"></Skill>
        {/* <Skill name="Docker" x="5vw" y="13vw"></Skill> */}

      </div>
    </>
  );
};
