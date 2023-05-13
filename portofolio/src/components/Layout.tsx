import { LayoutType } from "@/types/layoutType";
import React from "react";


export const Layout  = ({ className, children }:LayoutType) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
