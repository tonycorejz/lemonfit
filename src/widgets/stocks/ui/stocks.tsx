'use client';

import { Title } from "@/shared";
import { HTMLProps } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import stockImg1 from '../../../../public/img/stocks/2.png';
import stockImg2 from '../../../../public/img/stocks/1.png';

export const Stocks: React.FC<HTMLProps<HTMLDivElement>> = ({...props}) => {

    return (
        <div {...props} className={`w-full max-w-7xl flex flex-col items-center sm:justify-between justify-center p-6 md:px-8 ${props.className}`}>
            <Title className='w-full mb-6'>Акции</Title>
            <div className={`relative w-full mx-auto flex items-center justify-center pb-6`}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        el: '.swiper-pagination-stocks',
                        type: 'bullets',
                        clickable: true,
                    }}
                    centeredSlides={false}
                    modules={[Pagination, Autoplay]}
                    className="w-full overflow-y-auto"
                    zoom={true}
                >
                    <SwiperSlide className=''>
                        <div className="rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 m-2 md:m-4 flex flex-col md:flex-row items-center justify-center">
                            <Image src={stockImg1} className='w-full max-w-80 pointer-events-none mb-2 md:me-4 md:mb-0' alt='' />
                            <div className="">
                                <p className="text-xl font-black mb-4">Первое занятие бесплатно!</p>
                                <p>
                                    Впервые в нашем тренажёрном зале? Мы рады предложить вам уникальную возможность: первая тренировка абсолютно БЕСПЛАТНО!
                                </p>
                                <p> 
                                    👨‍🏫 В рамках этой тренировки вы получите индивидуальный подход от нашего профессионального тренера. Он поможет вам составить план занятий, покажет правильную технику выполнения упражнений и ответит на все интересующие вопросы.
                                </p>
                                <p>
                                    🔥 Это отличная возможность оценить качество наших услуг, познакомиться с оборудованием и атмосферой зала, а также понять, подходит ли вам наш клуб.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 m-2 md:m-4 flex flex-col md:flex-row items-center justify-center">
                            <Image src={stockImg2} className='w-full max-w-80 pointer-events-none mb-2 md:me-4 md:mb-0' alt='' />
                            <div className="">
                                <p className="text-xl font-black mb-4">Наша бонусная система! </p>
                                <p>Присоединяйтесь к нашей уникальной бонусной программе, которая сделает ваши тренировки не только полезными, но и приятными!</p>
                                <p>💪 С каждой покупкой вы получаете 5% на ваш личный бонусный счет.</p>
                                <p>📅 Накопленными баллами можно воспользоваться в течение 3 месяцев. Вы сами решаете, когда использовать бонусы, чтобы сделать вашу следующую покупку еще более выгодной.</p>
                                <p>🎉 Более того, накопленные баллы можно потратить на до 30% от суммы вашей следующей покупки. Это отличный способ сэкономить и получить максимум удовольствия от тренировок!</p>
                            </div>
                        </div>
                        </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination-stocks absolute -bottom-8 flex justify-center"></div>
            </div>
        </div>
    );
}