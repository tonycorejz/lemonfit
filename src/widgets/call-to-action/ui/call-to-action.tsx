import Image from "next/image";
import callToActionImg from '../../../../public/img/call-to-action-image.png';
import { CallMeBtn, Title } from "@/shared";
import { CallMeBackModal } from "@/features";

export const CallToAction: React.FC = () => {
    return (
        <div className="overflow-hidden w-full flex flex-col">
            <div className="relative w-1/2 h-10 max-w-7xl self-end">
                <Image 
                    src={callToActionImg} 
                    className="absolute -right-8 md:left-16 -bottom-20 sm:-bottom-36 md:-bottom-40 lg:-bottom-56 w-52 sm:w-[300px] md:w-[350px] lg:w-[450px]"
                    alt='Изображение к блоку действия'
                />
            </div>
            <div className="w-full bg-[#212121] flex justify-start sm:justify-center p-6 md:pb-10 lg:px-8">
                <div className="w-full flex max-w-7xl">
                    <div className="sm:w-3/4 flex flex-col sm:items-center">
                        <Title className='w-[90%] sm:w-auto text-white text-start sm:text-center mb-6'>Не думай,<br/> действуй прямо сейчас!</Title>
                        <CallMeBackModal>
                            <CallMeBtn className="max-w-96">Записаться на первую тренировку</CallMeBtn>
                        </CallMeBackModal>
                    </div>
                </div>
            </div>
        </div>
    );
}