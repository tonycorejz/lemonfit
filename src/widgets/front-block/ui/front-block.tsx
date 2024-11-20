import { CallMeBtn } from "@/shared";
import Image from "next/image";
import frotnImg from '../../../../public/img/front-image.webp';
import { ArrowLink } from "@/shared/ui/links";
import { CallMeBackModal } from "@/features";

export const FrontBlock: React.FC = () => {

    return (
        <div className="relative overflow-hidden w-full flex max-w-7xl items-center sm:justify-between justify-center p-6 lg:px-8">
            <div className="flex flex-col me-2">
                <h1 
                    className="mb-6 sm:mb-8 lg:mb-10 font-sans text-center sm:text-start font-black text-standart-text text-4xl lg:text-6xl leading-8 lg:leading-8"
                >
                    LemonFit - <br/>
                    <span className="font-medium text-xl leading-3">
                        Ваш путь к идеальной форме!
                    </span>
                </h1>
                <Image 
                    src={frotnImg} alt="Изображение нашего фитнес-зала"
                    className="w-full rounded-xl mb-6 sm:hidden"
                />
                <div className="flex flex-col lg:flex-row items-center sm:items-start lg:items-center">
                    <CallMeBackModal>
                        <CallMeBtn className="sm:max-w-64 mb-6 lg:mb-0 lg:me-3">Перезвоните мне</CallMeBtn>
                    </CallMeBackModal>
                    <ArrowLink href='/#prices' className="">Узнать цены</ArrowLink>
                </div>
            </div>
            <Image 
                src={frotnImg} alt="Изображение нашего фитнес-зала"
                className="hidden w-80 md:w-1/2 rounded-xl sm:block"
            />
        </div>
    );
}