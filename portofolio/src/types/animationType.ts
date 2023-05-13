import { StaticImageData } from "next/image";

export interface AnimatedNumbersType {
  value: number;
}
export interface AnimatedTextType {
  text: string;
  className?: string;
}
export interface MovingImageType {
  img: string | StaticImageData;
  title: string;
  link: string;
}
