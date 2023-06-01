import { StaticImageData } from "next/image";

export interface ArticleType {
    img: string | StaticImageData;
    title: string;
    time: string;
    summary?: string;
    link: string;
  }