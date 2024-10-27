'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import galleryImg1 from '../../../../public/img/gallery/1.jpg';
import galleryImg2 from '../../../../public/img/gallery/2.jpg';
import galleryImg3 from '../../../../public/img/gallery/3.jpg';
import galleryImg4 from '../../../../public/img/gallery/4.jpg';
import galleryImg5 from '../../../../public/img/gallery/5.jpg';
import galleryImg6 from '../../../../public/img/gallery/6.jpg';
import galleryImg7 from '../../../../public/img/gallery/7.jpg';
import galleryImg8 from '../../../../public/img/gallery/8.jpg';
import galleryImg9 from '../../../../public/img/gallery/9.jpg';

export const Gallery = () => {
    return (
        <div className='w-full mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full h-[500px]"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    }
                }}
            >
                <SwiperSlide><Image src={galleryImg1} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg2} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg3} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg4} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg5} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg6} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg7} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg8} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
                <SwiperSlide><Image src={galleryImg9} className='object-cover block w-full h-full rounded-lg' alt='' /></SwiperSlide>
            </Swiper>
        </div>
    );
}