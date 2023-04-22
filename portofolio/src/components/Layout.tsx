import React from "react";

interface ILayout {
  className?: string;
  children?: React.ReactNode;
}
export const Layout: React.FC<ILayout> = ({ className, children }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
