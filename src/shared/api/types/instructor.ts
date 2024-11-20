import { StaticImageData } from "next/image";

export interface Instructor {
    id: number;
    gallery: StaticImageData[];
    name: string;
    achievements: string;
}