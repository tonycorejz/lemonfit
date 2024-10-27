import { CallMeBtn } from "@/shared";
import Image from "next/image";
import frotnImg from '../../../../public/img/front-image.jpeg';
import Link from "next/link";

export const FrontBlock = () => {

    return (
        <div className="relative overflow-hidden w-full mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
            <div className="flex flex-col">
                <h1 className="mb-6 font-sans text-center font-black text-4xl leading-8">LemonFit - <br/><span className="font-medium text-xl leading-3">Ваш путь к идеальной форме!</span></h1>
                <Image 
                    src={frotnImg} alt="Изображение нашего фитнес-зала"
                    className="w-full rounded-xl mb-6"
                />
                <CallMeBtn className="w-[80%] mb-6 self-center">Перезвоните мне</CallMeBtn>
                <Link href='#' className="self-center flex flex-row items-center">
                    <p className="font-sans font-bold text-sm me-4">Узнать цены</p>
                    <svg width="32" height="13" viewBox="0 0 32 13" fill="#212121" stroke="#24A746" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.83026H31H1ZM31 6.83026L23.5 1.83026L31 6.83026ZM31 6.83026L23.5 11.8303L31 6.83026Z" />
                        <path d="M1 6.83026H31M31 6.83026L23.5 1.83026M31 6.83026L23.5 11.8303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
            <Image 
                src={frotnImg} alt="Изображение нашего фитнес-зала"
                className="hidden max-w-2xl lg:rounded-xl "
            />
        </div>
    );
}