'use client';

import { Title } from "@/shared";
import { HTMLProps } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import stockImg1 from '../../../../public/img/stocks/2.webp';
import stockImg2 from '../../../../public/img/stocks/1.webp';
import stockImg3 from '../../../../public/img/stocks/3.webp';

export const Stocks: React.FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {

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
                    {/* <SwiperSlide className=''>
                        <div className="rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 m-2 md:m-4 flex flex-col md:flex-row items-center justify-center">
                            <Image src={stockImg3} className='w-full max-w-80 pointer-events-none mb-2 md:me-4 md:mb-0' alt='' />
                            <div className="">
                                <p className="text-xl font-black mb-4">🎄 <b>Новогодний подарок, который изменит вас!</b> 🎁</p>
                                <p>Только до 31 декабря: покупайте абонемент на 6 месяцев и получайте <b>9 месяцев тренировок!</b> 💪</p>
                                <p>Почему это выгодно?</p>
                                <ol className="ms-2">
                                    <li>1. <b>Экономия</b>: 3 месяца бесплатно.</li>
                                    <li>2. <b>Лучший старт года</b>: идеальный подарок себе или близким.</li>
                                    <li>3. <b>Время для целей</b>: достигайте формы мечты или укрепляйте здоровье.</li>
                                </ol>
                                <p>Не упустите шанс! Акция действует только до конца года. Закажите абонемент и начните 2024 год с новых побед!</p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className=''>
                        <div className="rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 m-2 md:m-4 flex flex-col md:flex-row items-center justify-center">
                            <Image src={stockImg3} className='w-full max-w-80 pointer-events-none mb-2 md:me-4 md:mb-0 p-4' alt='' />
                            <div className="">
                                <p className="text-xl font-black mb-4">ОД ОТ 600₽/МЕСЯЦ! 🎁</p>
                                <p>
                                    Только до 21.09 держим суперцены на абонементы!
                                </p>
                                <p> 
                                    6 причин успеть:✨
                                </p>
                                <ol className="ms-2">
                                    <li>1️⃣ 6 лет опыта и вашего доверия!🙌</li>
                                    <li>2️⃣ Выгода: Год занятий — цена смешная!💰</li>
                                    <li>3️⃣ Дневной (7:00-17:00) — 600₽/мес (при покупке года).☀️</li>
                                    <li>4️⃣ Полный — 800₽/мес (при покупке года).🌙</li>
                                    <li>5️⃣ Цена заморожена на год! 🔒</li>
                                    <li>6️⃣ Подарок: протеиновый коктейль при покупке! 🥤</li>
                                </ol>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/*<SwiperSlide className=''>
                        <div className="rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 m-2 md:m-4 flex flex-col md:flex-row items-center justify-center">
                            <Image src={stockImg3} className='w-full max-w-80 pointer-events-none mb-2 md:me-4 md:mb-0' alt='' />
                            <div className="">
                                <p className="text-xl font-black mb-4">3 месяца в подарок!</p>
                                <p>
                                    🍋 9 месяцев по цене 6! Только 7-14 февраля в LemonFit!
                                </p>
                                <p> 
                                    🎁 Покупаешь 6 месяцев — дарим +3! Полный абонемент 9 490₽, дневной — 7 490₽.
                                </p>
                                <p>
                                    Первые 10 клиентов получают протеиновый коктейль в подарок! 🥤
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>*/}
                    <SwiperSlide className=''>
                        <div className="rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 m-2 md:m-4 flex flex-col md:flex-row items-center justify-center">
                            <Image src={stockImg1} className='w-full max-w-80 pointer-events-none mb-2 md:me-4 md:mb-0' alt='' />
                            <div className="">
                                <p className="text-xl font-black mb-4">Первая тренировка за 0 ₽! 🏎️</p>
                                <p>
                                    Хотите проверить нас на прочность? Без проблем!
                                </p>
                                <p>
                                    Приходите, знакомьтесь с тренером и пробуйте тренажёры.
                                </p>
                                <p>
                                    Условие всего одно: если покупаете любой абонемент в день первого визита — тренировка за наш счёт. Если решите, что штанга — это не ваше, просто оплатите разовое посещение (650 ₽).
                                </p>
                                <p>
                                    Это как тест-драйв тачки: если покупаете, бензин в подарок. Справедливо? Справедливо.
                                </p>
                                <p>
                                    Погнали тренироваться! 🍋💪
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
                                <p>🎉 Более того, накопленные баллы можно потратить на до 15% от суммы вашей следующей покупки. Это отличный способ сэкономить и получить максимум удовольствия от тренировок!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination-stocks absolute -bottom-8 flex justify-center"></div>
            </div>
        </div>
    );
}