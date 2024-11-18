'use client';

import { Title } from "@/shared";
import { HTMLProps } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

import freeFirstWorkout from '../../../../public/img/stocks/freeFirstWorkout.jpg';

export const Stocks: React.FC<HTMLProps<HTMLDivElement>> = ({...props}) => {

    return (
        <div {...props} className={`w-full max-w-7xl flex flex-col items-center sm:justify-between justify-center p-6 lg:px-8 ${props.className}`}>
            <Title className='w-full mb-6'>Акции</Title>
            <div className={`relative w-full mx-auto flex items-center justify-center pb-6`}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    pagination={{
                        el: '.swiper-pagination-stocks',
                        type: 'bullets',
                        clickable: true,
                    }}
                    centeredSlides={true}
                    modules={[Pagination]}
                    className="w-full overflow-y-auto"
                    zoom={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide className='flex flex-col items-center justify-center text-sm'>
                        <Image src={freeFirstWorkout} className='block rounded-lg pointer-events-none mb-4' alt='' />
                        <p>
                            Впервые в нашем тренажёрном зале? Мы рады предложить вам уникальную возможность: первая тренировка абсолютно БЕСПЛАТНО!
                        </p>
                        <p> 
                            👨‍🏫 В рамках этой тренировки вы получите индивидуальный подход от нашего профессионального тренера. Он поможет вам составить план занятий, покажет правильную технику выполнения упражнений и ответит на все интересующие вопросы.
                        </p>
                        <p>
                            🔥 Это отличная возможность оценить качество наших услуг, познакомиться с оборудованием и атмосферой зала, а также понять, подходит ли вам наш клуб.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col items-center justify-center text-sm'>
                    <p className="font-bold mb-10">Наша бонусная система ! </p>
                    <p>Присоединяйтесь к нашей уникальной бонусной программе, которая сделает ваши тренировки не только полезными, но и приятными!</p>
                    <p>💪 С каждой покупкой вы получаете 5% на ваш личный бонусный счет.</p>
                    <p>📅 Накопленными баллами можно воспользоваться в течение 3 месяцев. Вы сами решаете, когда использовать бонусы, чтобы сделать вашу следующую покупку еще более выгодной.</p>
                    <p>🎉 Более того, накопленные баллы можно потратить на до 30% от суммы вашей следующей покупки. Это отличный способ сэкономить и получить максимум удовольствия от тренировок!</p>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination-stocks absolute -bottom-8 flex justify-center"></div>
            </div>
        </div>
    );
}