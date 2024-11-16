import { StaticImageData } from "next/image";

export interface Instructor {
    id: Number;
    gallery: StaticImageData[];
    name: string;
    achievements: string[];
}