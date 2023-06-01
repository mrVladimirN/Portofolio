import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl border border-solid border-transparent dark:border-light font-bold"
        whileHover={{
          backgroundColor: [
            "#12121",
            "#833ab4",
            "#fd1d1d",
            "#fcb045",
            "#833ab4",
            "#121212",
          ],
          transition:{duration:1, repeat: Infinity}
        }}
      >
        VN
      </MotionLink>
    </div>
  );
};
